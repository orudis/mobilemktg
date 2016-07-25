angular.module('app.home', [ 'ngRoute']);

angular.module('app').requires.push('app.home');

angular.module('app.home')
.config(function config($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'app/partials/home/home.tpl.html',
		controller:'HomeCtrl'
	});
}).controller('HomeCtrl', function($rootScope,$scope,Session, $location,$window,toaster,dataFactoryApp) {
    $rootScope.showNavBar=true;
	
	//---------------------------------------------------------------------
	//  API REST
	//---------------------------------------------------------------------	
	var uriCampains="/api/campaigns/:id";
	$scope.apiCampains=dataFactoryApp(uriCampains,'');
	
	//---------------------------------------------------------------------
	//  DATA
	//---------------------------------------------------------------------	
	var getData=function(){
			var oParamsCampains={};
			//oParamsCampaiins.filter='{ "where": {"centro":"'+$scope.centro.id+'","periodo":"'+$scope.session.periodo+'","ensenanza":"'+$scope.ensenanza.id+'","materia":"'+$scope.materia.id+'","curso":"'+$scope.curso.id+'","grupo":"'+$scope.grupo.id+'" }, "fields": {"id": true, "nombre": true, "notas": true, "plantilla": true} ,"order":"nombre ASC" }'
			$scope.apiCampains.getAll({},function (data) {     
				$scope.campains=data;		
			},function(err){
                            
                            console.log('error:'+err);
                        });
     }
	 
    getData();
    
    $scope.optionsFormCampaign={};
    
    $scope.optionsFormCampaign.show=false;
    
    $scope.optionsFormCampaign.continue=function(){ 
        $scope.apiCampains.update($scope.campaign,function (data,result) {     
                                                                    	
                                                                    $scope.optionsFormCampaign.show=false;
                                                                    if(result)
                                                                        alert("success");	
                                                                },function(err){
                                                                    
                                                                    alert('error:'+err);
                                                                });
         
    }
  
    $scope.onAction=function(action,id_campaign){
          switch(action) {
            case 'edit':
                var oParamsCampains={};
                oParamsCampains.id=id_campaign;
                $scope.apiCampains.get(oParamsCampains,function (data) {     
                        $scope.campaign=data;	
                        $scope.qrimg="/qr-png/"+$scope.campaign.id;
                        $scope.optionsFormCampaign.show=true;	
                },function(err){
                    
                    console.log('error:'+err);
                });
                break;
            case 'qr':
                $location.search('id', id_campaign);
                $location.path('/qr');
                break;
            case 'download':
                $location.search('id', id_campaign);
                $location.path('/download');
                break;
            case 'config':
                $location.search('id', id_campaign);
                $location.path('/config');
                break;
            case 'editweb':
                $location.search('id', id_campaign);
                $location.path('/editweb');
                break;
            
          }
       
    }



	
});
