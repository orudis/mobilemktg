angular.module('e2e-mocks', ['ngMockE2E'])
 .filter('fk', function() {
    return function(entities, field,value) {
      var out = [];
      for (var i = 0; i < entities.length; i++) {
	        //console.log("fkFilters:"+entities[i][field] + "==" + value);
			if(entities[i][field]==value){
				out.push(entities[i]);
			}
      }
      return out;
    };
  });
  
//angular.module('app').requires.push('e2e-mocks');
  
angular.module('e2e-mocks')  
.run(function($httpBackend,$http,$log,$filter,filterFilter,fkFilter) {
    // The mock
   
    var orderBy = $filter('orderBy');
	
    //-------------------------------------------------------------------
	// Authorization
	//-------------------------------------------------------------------
	$httpBackend.whenGET(/services\/controlservice\/autorizacion\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/controlservice/autorizacion/:app "+method + " "+ url);
        return [200, user, {}];
    });
	//-------------------------------------------------------------------
	// Menu
	//-------------------------------------------------------------------
	$httpBackend.whenGET(/services\/controlservice\/menu\/lineas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/controlservice/menu/lineas/:app "+method + " "+ url);
        return [200, menu, {}];
    });
	
    //-------------------------------------------------------------------
	// CRUD services count
	//-------------------------------------------------------------------
	 // GET count disposiciones from array
    $httpBackend.whenGET(/services\/disposicionesservice\/disposiciones\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/disposicionesservice/disposiciones/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,disposiciones)}, {}]; 
    }); 
	$httpBackend.whenGET(/services\/historicosservice\/historicos\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/historicosservice/historicos/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,historicos)}, {}]; 
    }); 
    $httpBackend.whenGET(/services\/temasservice\/temas\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/temasservice/temas/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,temas)}, {}]; 
    }); 
    $httpBackend.whenGET(/services\/subtemasservice\/subtemas\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/subtemasservice/subtemas/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,subtemas)}, {}]; 
    }); 	
	$httpBackend.whenGET(/services\/organicasservice\/organicas\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/organicasservice/organicas/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,organicas)}, {}]; 
    }); 
	$httpBackend.whenGET(/services\/organicastemaservice\/organicastema\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/organicastemaservice/organicastema/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,organicastema)}, {}]; 
    }); 
	$httpBackend.whenGET(/services\/fuentesservice\/fuentes\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/fuentesservice/fuentes/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,fuentes)}, {}]; 
    }); 
	$httpBackend.whenGET(/services\/gruposemailservice\/gruposemail\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/gruposemailservice/gruposemail/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,gruposemail)}, {}]; 
    }); 
	$httpBackend.whenGET(/services\/parametrosservice\/parametros\/count(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services/parametrosservice/parametros/count "+method + " url:"+ url);
	    return [200, {"count":getCount(url,parametros)}, {}]; 
    }); 
    var getCount=function(url,entities){
		var params={};
		var entitiesFk=[];
		params=queryStringToJSON(url.split('?')[1]);
		if(params.hasOwnProperty("fieldfk") && params.hasOwnProperty("valuefk") && params.hasOwnProperty("fieldfk") && params.fieldfk!="" && params.valuefk!="" ){
			console.log(" getCount si Fk");
			entitiesFk=fkFilter(entities, params.fieldfk,params.valuefk);
		}else{
			console.log("getCount no Fk");
			entitiesFk=entities;
		}
        
        return filterFilter(entitiesFk, params.filter).length;
	}
	
	//-------------------------------------------------------------------
	// CRUD services one
	//-------------------------------------------------------------------
	// GET one disposicion from array
    $httpBackend.whenGET(/services\/disposicionesservice\/disposiciones\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/disposicionesservice\/disposiciones/:id "+method + " "+ url+ " "+url.split('/')[4]);
		var id=url.split('/')[4];
        return [200, getOne(id,disposiciones,"ID"), {}];
    });
	// GET one historicos from array
    $httpBackend.whenGET(/services\/historicosservice\/historicos\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/historicosservice\/historicos/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,historicos,"ID"), {}];
    });
	// GET one temas from array
    $httpBackend.whenGET(/services\/temasservice\/temas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/temasservice\/temas/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,temas,"CODIGO"), {}];
    });
	// GET one subtemas from array
    $httpBackend.whenGET(/services\/subtemasservice\/subtemas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/subtemasservice\/subtemas/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,subtemas,"SUBTEMA"), {}];
    });
	// GET one disposicion from array
    $httpBackend.whenGET(/services\/organicasservice\/organicas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/organicasservice\/organicas/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,organicas,"CODIGO"), {}];
    });
	// GET one organicas from array
    $httpBackend.whenGET(/services\/organicastemaservice\/organicastema\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/organicastemaservice\/organicastema/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,organicastema,"CODIGOTEMA"), {}];
    });
	// GET one fuentes from array
    $httpBackend.whenGET(/services\/fuentesservice\/fuentes\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/fuentesservice\/fuentes/:id "+method + " "+ url+ " "+url.split('/')[4]);
		var id=url.split('/')[4];
		return [200, getOne(id,fuentes,"CODIGO"), {}];
    });
	// GET one grupos from array
    $httpBackend.whenGET(/services\/gruposemailservice\/gruposemail\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/gruposemailservice\/gruposemail/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,gruposemail,"ID"), {}];
    });
	// GET one parametros from array
    $httpBackend.whenGET(/services\/parametrosservice\/parametros\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a GET /services\/parametrosservice\/parametros/:id "+method + " "+ url+ " "+url.split('/')[4]);
        var id=url.split('/')[4];
		return [200, getOne(id,parametros,"PARAMETRO"), {}];
    });
	var getOne=function(id,entities,fieldId){
		var entity="";
        for(i=0;i<entities.length;i++){
			//console.log("getOne:"+entities[i][fieldId] + " " + id);
            if(entities[i][fieldId]==id){
                entity=entities[i];
            }
        }
        return entity;
	}

	//-------------------------------------------------------------------
	// CRUD services all
	//-------------------------------------------------------------------
	
	// GET all disposiciones from disposiciones array with filters
    $httpBackend.whenGET(/services\/disposicionesservice\/disposiciones(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
        console.log("llamada a GET services/disposicionservice/disposiciones?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
		var disp=getAll(url,disposiciones);
		for(var i=0;i<disp.length;i++){
			for(var j=0;j<temas.length;j++){
			  // console.log("cruce:"+org[i].TEMA+"=="+temas[j].CODIGO);
				if(disp[i].CODIGO_TEMA==temas[j].CODIGO){
					disp[i].DESC_TEMA=temas[j].TEMA;
					break;
				}
		    }
		}
        return [200, disp, {}];
    });
	// GET all disposiciones_hist from disposiciones_hist array with filters
    $httpBackend.whenGET(/services\/historicosservice\/historicos(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/historicoservice/historicos?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        var hist=getAll(url,historicos);
		for(var i=0;i<hist.length;i++){
			for(var j=0;j<temas.length;j++){
			   //console.log("cruce:"+hist[i].CODIGO_TEMA+"=="+temas[j].CODIGO);
				if(hist[i].CODIGO_TEMA==temas[j].CODIGO){
					hist[i].DESC_TEMA=temas[j].TEMA;
					break;
				}
		    }
		}
		return [200,hist , {}];
	});
	// GET all temas from temas array with filters
    $httpBackend.whenGET(/services\/temasservice\/temas(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/temaservice/temas?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,temas), {}];
	});
	// GET all subtemas from subtemas array with filters
    $httpBackend.whenGET(/services\/subtemasservice\/subtemas(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/subtemasservice/subtemas?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,subtemas), {}];
	});
	// GET all organica from organica array with filters
    $httpBackend.whenGET(/services\/organicasservice\/organicas(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/organicasservice/organicas?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,organicas), {}];
	});
	// GET all organicatema from organicastema array with filters
    $httpBackend.whenGET(/services\/organicastemaservice\/organicastema(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/organicastemaservice/organicastema?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        var org= getAll(url,organicastema);
		for(var i=0;i<org.length;i++){
			for(var j=0;j<temas.length;j++){
			  // console.log("cruce:"+org[i].TEMA+"=="+temas[j].CODIGO);
				if(org[i].TEMA==temas[j].CODIGO){
					org[i].DESCRIPCION=temas[j].TEMA;
					break;
				}
		    }
		}
		return [200,org, {}];
	});
	// GET all fuentes from fuentes array with filters
    $httpBackend.whenGET(/services\/fuentesservice\/fuentes(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/fuentesservice/fuentes?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,fuentes), {}];
	});
	// GET all grupos mail from grupos mail array with filters
    $httpBackend.whenGET(/services\/gruposemailservice\/gruposemail(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/gruposemailservice/gruposemail?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,gruposemail), {}];
	});
	// GET all parametros from parametros array with filters
    $httpBackend.whenGET(/services\/parametrosservice\/parametros(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*/).respond(function(method, url,data,headers) {
		console.log("llamada a GET services/parametrosservice/parametros?algo=algo "+method + " params:"+ url.split('?')[1]+ " url:"+url);
        return [200, getAll(url,parametros), {}];
	});
	
	var getAll2=function(url,entities){
		var params={};
		var querystring=url.split('?');
		if (querystring.length==1){
		  params.filter='';
		  params.field='';
		  params.orderby='asc';
		}else{
			params=queryStringToJSON(querystring[1]);
		}
        var entitiesFiltered=filterFilter(entities, params.filter);
        return orderBy(entitiesFiltered, params.orderby, false);
	}
	var getAll=function(url,entities){
		var params={};
		var entitiesFk=[];
        params=queryStringToJSON(url.split('?')[1]);
		console.log("params....:"+angular.toJson(params));
		var reverse=(params.order.toUpperCase()==='ASC')?false:true;
		if(params.hasOwnProperty("fieldfk") && params.hasOwnProperty("valuefk") && params.hasOwnProperty("fieldfk") && params.fieldfk!="" && params.valuefk!="" ){
			console.log("si Fk");
			entitiesFk=fkFilter(entities, params.fieldfk,params.valuefk);
		}else{
		  console.log("no Fk");
			entitiesFk=entities;
		}
		
        var entitiesFiltered=filterFilter(entitiesFk, params.filter);
        entitiesFiltered = orderBy(entitiesFiltered, params.orderby, reverse);
        console.log("entitiesFiltered:"+ entitiesFiltered.length);
        var entitiesPaged=getPagedData(entitiesFiltered,params.limit, params.offset, params.filter);
        console.log("entitiesPaged:"+entitiesPaged.length);
        return entitiesPaged;
	}
    
	//-------------------------------------------------------------------
	// CRUD services INSERT
	//-------------------------------------------------------------------
    // ADD a new disposicion to disposiciones array
    $httpBackend.whenPOST(/services\/disposicionesservice\/disposiciones/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/disposicionesservice\/disposiciones data:"+angular.toJson(data));	
      return [200, postOne(data,disposiciones), {}];
    });
	// ADD a new historico to historicos array
    $httpBackend.whenPOST(/services\/historicosservice\/historicos/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/historicosservice\/historicos data:"+angular.toJson(data));	
      return [200, postOne(data,historicos), {}];
    });
	// ADD a new tema to temas array
    $httpBackend.whenPOST(/services\/temasservice\/temas/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/temasservice\/temas data:"+angular.toJson(data));	
      return [200, postOne(data,temas), {}];
    });
	// ADD a new subtema to subtemas array
    $httpBackend.whenPOST(/services\/subtemasservice\/subtemas/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/subtemasservice\/subtemas data:"+angular.toJson(data));	
      return [200, postOne(data,subtemas), {}];
    });
	// ADD a new organica to organicas array
    $httpBackend.whenPOST(/services\/organicasservice\/organicas/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/organicasservice\/organicas data:"+angular.toJson(data));	
      return [200, postOne(data,organicas), {}];
    });
	// ADD a new organicatema to organicastema array
    $httpBackend.whenPOST(/services\/organicastemaservice\/organicastema/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/organicastemaservice\/organicastema data:"+angular.toJson(data));	
      return [200, postOne(data,organicastema), {}];
    });
	// ADD a new fuente to fuentes array
    $httpBackend.whenPOST(/services\/fuentesservice\/fuentes/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/fuentesservice\/fuentes data:"+angular.toJson(data));	
      return [200, postOne(data,fuentes), {}];
    });
	// ADD a new grupoemail to gruposemail array
    $httpBackend.whenPOST(/services\/gruposemailservice\/gruposemail/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/gruposemailservice\/gruposemail data:"+angular.toJson(data));	
      return [200, postOne(data,gruposemail), {}];
    });
	// ADD a new parametro to parametros array
    $httpBackend.whenPOST(/services\/parametrosservice\/parametros/).respond(function(method, url, data,headers) {
      console.log("llamada a POST /services\/parametrosservice\/parametros data:"+angular.toJson(data));	
      return [200, postOne(data,parametros), {}];
    });
	
	var postOne=function(data,entities){
	  var entity = angular.fromJson(data);
      entities.push(entity);
      return entity;
	}
	
    //-------------------------------------------------------------------
	// CRUD services UPDATE
	//-------------------------------------------------------------------
    // UPDATE a disposicion IN disposiciones array
    $httpBackend.whenPUT(/services\/disposicionesservice\/disposiciones\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/disposicionesservice\/disposiciones/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,disposiciones,"ID"), {}];
    });
	// UPDATE a historico IN historicos array
    $httpBackend.whenPUT(/services\/historicosservice\/historicos\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/historicosservice\/historicos/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,historicos,"ID"), {}];
    });
	// UPDATE a tema IN temas array
    $httpBackend.whenPUT(/services\/temasservice\/temas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/temasservice\/temas/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,temas,"CODIGO"), {}];
    });
	// UPDATE a subtema IN subtemas array
    $httpBackend.whenPUT(/services\/subtemasservice\/subtemas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/subtemasservice\/subtemas/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,subtemas,"SUBTEMA"), {}];
    });
	// UPDATE a organica IN organicas array
    $httpBackend.whenPUT(/services\/organicasservice\/organicas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/organicasservice\/organicas/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,organicas,"CODIGO"), {}];
    });
	// UPDATE a organicatema IN organicastema array
    $httpBackend.whenPUT(/services\/organicastemaservice\/organicastema\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/organicastemaservice\/organicastema/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,organicas,"CODIGOTEMA"), {}];
    });
	// UPDATE a fuente IN fuentes array
    $httpBackend.whenPUT(/services\/fuentesservice\/fuentes\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/fuentesservice\/fuentes/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,fuentes,"CODIGO"), {}];
    });
	// UPDATE a grupoemail IN gruposemail array
    $httpBackend.whenPUT(/services\/gruposemailservice\/gruposemail\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/gruposemailservice\/gruposemail/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,gruposemail,"GRUPO"), {}];
    });
	// UPDATE a parametro IN parametros array
    $httpBackend.whenPUT(/services\/parametrosservice\/parametros\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url, data,headers) {
        console.log("llamada a PUT /services\/parametrosservice\/parametros/:id METHOD:"+method + " URL:"+ url+ " ID:"+url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, putOne(id,data,parametros,"PARAMETRO"), {}];
    });
	var putOne=function(id,data,entities,fieldId){
		for(i=0;i<entities.length;i++){
            if(entities[i][fieldId]==id){
                entities.splice(i, 1);
            }
        }
        var entity = angular.fromJson(data);
        entities.push(entity);
        return entity;
	}
    //-------------------------------------------------------------------
	// CRUD services DELETE
	//-------------------------------------------------------------------
    // DELETE a disposicion from disposiciones array
    $httpBackend.whenDELETE(/services\/disposicionesservice\/disposiciones\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/disposicionesservice/disposiciones/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,disposiciones,"ID"), {}];
     });
	 // DELETE a historico from historicos array
    $httpBackend.whenDELETE(/services\/historicosservice\/historicos\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/historicosservice/historicos/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,historicos,"ID"), {}];
     });
	 // DELETE a tema from temas array
    $httpBackend.whenDELETE(/services\/temasservice\/temas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/temasservice/temas/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,temas,"CODIGO"), {}];
     });
	 // DELETE a subtema from subtemas array
    $httpBackend.whenDELETE(/services\/subtemasservice\/subtemas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/subtemasservice/subtemas/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,subtemas,"SUBTEMA"), {}];
     });
	 // DELETE a organica from organicas array
    $httpBackend.whenDELETE(/services\/organicasservice\/organicas\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/organicasservice/organicas/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,organicas,"CODIGO"), {}];
    });
	// DELETE a organicatema from organicastema array
    $httpBackend.whenDELETE(/services\/organicastemaservice\/organicastema\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/organicastemaservice/organicastema/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,organicastema,"CODIGOTEMA"), {}];
    });
	// DELETE a fuente from fuentes array
    $httpBackend.whenDELETE(/services\/fuentesservice\/fuentes\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/fuentesservice/fuentes/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,fuentes,"CODIGO"), {}];
     });
	 // DELETE a grupoemail from gruposemail array
    $httpBackend.whenDELETE(/services\/gruposemailservice\/gruposemail\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/gruposemailservice/gruposemail/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,gruposemail,"GRUPO"), {}];
     });
	 // DELETE a parametros from parametros array
    $httpBackend.whenDELETE(/services\/parametrosservice\/parametros\/([0-9a-zA-Z$_\.\+!\*\'\(\),;:@&=-])+/).respond(function(method, url,data,headers) {
        console.log("llamada a DELETE services/parametrosservice/parametrosmail/:id "+method + " "+ url.split('/')[4]);
        var id=url.split('/')[4];
        return [200, deleteOne(id,data,parametros,"PARAMETRO"), {}];
     });
    var deleteOne=function(id,data,entities,fieldId){
		var entity="";
        for(i=0;i<entities.length;i++){
            if(entities[i][fieldId]==id){
                entity=entities[i];
                entities.splice(i, 1);
            }
        }
        return entity;
	}
    
    
    // Don't mock the html views
    $httpBackend.whenGET(/views\/\w+.*/).passThrough();
     
    // For everything else, don't mock
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
    $httpBackend.whenPUT(/^\w+.*/).passThrough();
    $httpBackend.whenDELETE(/^\w+.*/).passThrough();
    
    /*
     * helpers
     */
    
    var setPagingData = function(data, offset, limit){
        console.log("setPagingData: offset:"+offset+ " limit:"+limit)
        return data.slice(offset, (offset*1) + (limit*1));
        
    }
    
    var getPagedData = function (data,limit, offset, searchText) {
        var dataf;
        if (searchText) {
            var ft = searchText.toLowerCase();
            dataf = data.filter(function(item) {
                return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
            });
            return setPagingData(dataf,offset,limit);
                                       
        } else {
            console.log("getPagedData sin searchText: offset:" + offset +" limit:" + limit);
            return setPagingData(data,offset,limit);
        }
    };
    
    var queryStringToJSON=function(queryString) {
        var pairs = queryString.split('&');
    
        var result = {};
        pairs.forEach(function(pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });

        return JSON.parse(JSON.stringify(result));
    }
  
});

