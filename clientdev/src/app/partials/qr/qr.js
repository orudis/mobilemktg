angular.module('app.qr', [
    'ngRoute',
    'colorpicker.module',
    'ngFileUpload'
 ]);

angular.module('app').requires.push('app.qr');

angular.module('app.qr')
.config(function config($routeProvider) {
	$routeProvider.when('/qr/:id', {
		templateUrl: 'app/partials/qr/qr.tpl.html', 
		controller:'qrCtrl'
	});
 }).controller('qrCtrl', function($rootScope,$scope,$routeParams,dataFactoryApp,Session,$location,toaster,Upload) {
	 
    //-----------------------------------------------------------------------------
	//  Get path params
	//-----------------------------------------------------------------------------
      $rootScope.showNavBar=true;  
	   var id_campaign=$routeParams.id;
    
    
    
    //-----------------------------------------------------------------------------
	//  Config
	//-----------------------------------------------------------------------------	
    $scope.qrBgColor= '#FFFFFF';
    $scope.qrFrColor= '#000000';
    $scope.canvasBgColor= '#FFFFFF';
    $scope.qrCorrectionLevel=1;
    
    $scope.canvasWidth=600;
    $scope.canvasHeight=600;
    
    //-----------------------------------------------------------------------------
	//  Observers
	//-----------------------------------------------------------------------------	
    // qr fore color
    $scope.$watch('qrFrColor', function(oldValue, newValue) {
        //alert('hey, qrFrColor has changed!');
    });
    
    // qr background color
    $scope.$watch('qrBgColor', function(oldValue, newValue) {
        //alert('hey, qrBgColor has changed!');
    });
    
    
    // canvas width 
     $scope.$watch('canvasWidth', function(oldValue, newValue) {
        //alert('hey, canvasWidth has changed!');
    });
    // canvas height
    $scope.$watch('canvasHeight', function(oldValue, newValue) {
        //alert('hey, canvasHeight has changed!');
    });
    
    // qr correction level
    $scope.$watch('qrCorrectionLevel', function(oldValue, newValue) {
        //alert('hey, qrCorrectionLevel has changed!'+newValue);
    });
    //onChangeCanvasBgColor
    // canvas bg color
    $scope.$watch('canvasBgColor', function(oldValue, newValue) {
        //alert('hey, canvasBgColor has changed!'+newValue);
    });
    $scope.onChangeCanvasBgColor=function(){
        //alert('hey, canvasBgColor has changed!'+canvasBgColor);
    }
    
    //-----------------------------------------------------------------------------
	//  API REST
	//-----------------------------------------------------------------------------	
	var uriCampaigns="/api/campaigns/:id";
	$scope.apiCampaigns=dataFactoryApp(uriCampaigns,'');
    
    //-----------------------------------------------------------------------------
    // create a wrapper around native canvas element (with id="qrcontainer")
    //-----------------------------------------------------------------------------
    var canvas = new fabric.Canvas('qrcontainer');
    //event for object modified save changes
    canvas.on('object:modified', function(e) {
        if(!_.isUndefined($scope.intervalMove)){
            clearTimeout($scope.intervalMove); 
        }
        $scope.intervalMove=setTimeout(function(){ $scope.updateQrCode(); }, 500);
        //var activeObject = e.target;
        //console.log('Move:'+ activeObject.get('left'), activeObject.get('top'));
    });
    
    //-----------------------------------------------------------------------------
    // save changes custom qr code
    //-----------------------------------------------------------------------------
    $scope.updateQrCode=function(){
         $rootScope.campaign.custom_qr_svg=canvas.toSVG();//  toJSON();
         $rootScope.campaign.custom_qr_json=canvas.toJSON();
        
         $scope.apiCampaigns.update($rootScope.campaign,function (result) {     
                    if(result.success){
                         
                    }else{
                        toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    }
                    $scope.editing=false;
                },function(err){
                    toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    $scope.editing=false;
                });
    }
    
    
    
    canvas.on('object:added', function(e) {
        //$scope.updateQrCode();
    });
    
    canvas.on('object:removed', function(e) {
        $scope.updateQrCode();
    });
    
    //-----------------------------------------------------------------------------
	//  Add svg QR code black and white
	//-----------------------------------------------------------------------------	
    $scope.addQRSVG = function(path) {
	    fabric.loadSVGFromURL('/qr-svg/'+$scope.id_campaign, function(oImg,options) {
            $scope.qrShape =fabric.util.groupSVGElements(oImg, options);
            $scope.qrShape
            .set({
                name:'qr',
                left: 100,
                top: 100,
                scaleY: 400/$scope.qrShape.height,
                scaleX: 400/ $scope.qrShape.width
            })
            //.scale(2.0);
            // var canvas=FabricCanvas.getCanvas();
            canvas.add($scope.qrShape);
            canvas.moveTo($scope.qrShape, 1);
            canvas.renderAll();
            //save changes         
            $scope.updateQrCode(); 

          });
	};
    
   
    //-----------------------------------------------------------------------------
    // save changes custom qr code
    //-----------------------------------------------------------------------------
    //load custom qr code if exists
    if($rootScope.campaign.custom_qr_json!=null && !_.isUndefined($rootScope.campaign.custom_qr_json)){
        
        console.log("JSON_QR:"+$rootScope.campaign.custom_qr_json);
        canvas.loadFromJSON($rootScope.campaign.custom_qr_json, canvas.renderAll.bind(canvas), function(o, object) {
            fabric.log(o, object);
        });
        
       /* var path = fabric.loadSVGFromString($rootScope.campaign.custom_qr,function(objects, options) {
          var obj = fabric.util.groupSVGElements(objects, options);
          //obj.scaleToHeight(canvas.height-10)
          //  .set({ left: canvas.width/2, top: canvas.height/2 })
          //  .setCoords();

          canvas.add(obj).renderAll();
        });*/
        
    }else{//add qr code black and white
       $scope.addQRSVG();
    }
    
   
    
    //-----------------------------------------------------------------------------
    // upload image background
    //-----------------------------------------------------------------------------
    $scope.uploadBgImg=function(file){
        // upload on file select or drop
        if(file==null)return;
        Upload.upload({
            url: 'uploads',
            data: {file: file}
        }).then(function (resp) {
                $rootScope.campaign.img_bg=resp.data.files[0].url;
                $scope.apiCampaigns.update($rootScope.campaign,function (result) {     
                    if(result.success){
                         fabric.Image.fromURL(resp.data.files[0].url, function (oImg) {
                            //oImg.set('left', PosX).set('top',PosY);
                            $scope.bgImg=oImg;
                            $scope.bgImg.set({
                            
                                left: 50,
                                top: 50,
                                width:500,
                                height:500
                            });
                             
                             $scope.bgImg.name='bg';
                             //esto de abajo no vale
                           /* $scope.bgImg.toObject=function(){
                                var obj={}
                                for(var prop in this){
                                    obj.prop=this[prop];
                                }
                                obj.name='bg';
                                return obj;
                            }*/
                              
                            canvas.add($scope.bgImg);
                             canvas.moveTo($scope.bgImg, 0);
                            canvas.renderAll();
                            //save changes         
                            //$scope.updateQrCode(); 
                             console.log("Canvas.toJson:"+angular.toJson(canvas.toJSON()));
                             
                          });
                    }else{
                        toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    }
                    $scope.editing=false;
                },function(err){
                    toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    $scope.editing=false;
                });
            
            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }
    
    //-----------------------------------------------------------------------------
    // upload image logo
    //-----------------------------------------------------------------------------
    $scope.uploadLogoImg=function(file){
        // upload on file select or drop
        if(file==null)return;
        Upload.upload({
            url: 'uploads',
            data: {file: file}
        }).then(function (resp) {
                $rootScope.campaign.img_logo=resp.data.files[0].url;
                $scope.apiCampaigns.update($rootScope.campaign,function (result) {     
                    if(result.success){
                         fabric.Image.fromURL(resp.data.files[0].url, function (oImg) {
                            //oImg.set('left', PosX).set('top',PosY);
                            $scope.logoImg=oImg;
                            $scope.logoImg.set({
                                
                                left: 250,
                                top: 250,
                                width:100,
                                height:100
                            });
                            $scope.logoImg.name='logo';
                             //esto de abajo no vale
                           /* $scope.logoImg.toObject=function(){
                                var obj={}
                                for(var prop in this){
                                    obj.prop=this[prop];
                                }
                                obj.name='logo';
                                return obj;
                            }*/
                             
                            canvas.add($scope.logoImg);
                            canvas.renderAll();
                            //save changes 
                            $scope.updateQrCode();
                          });
                    }else{
                        toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    }
                    $scope.editing=false;
                },function(err){
                    toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
                    $scope.editing=false;
                });

            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }
    
    //-----------------------------------------------------------------------------
    // remove image logo
    //-----------------------------------------------------------------------------
    $scope.onClickDeleteBgImg=function(){
        //canvas.getObjects()[0].remove();
      var objects = canvas.getObjects();

      for (var i = 0, len = objects.length; i < len; i++) {
        if (objects[i].name && objects[i].name === 'bg') {
          objects[i].remove();
        }
      }
    }
    
    //-----------------------------------------------------------------------------
    // remove image logo
    //-----------------------------------------------------------------------------
    $scope.onClickDeleteLogoImg=function(){
        //canvas.getObjects()[2].remove();
      var objects = canvas.getObjects();

      for (var i = 0, len = objects.length; i < len; i++) {
        if (objects[i].name && objects[i].name === 'logo') {
          objects[i].remove();
        }
      }
    }
    //-----------------------------------------------------------------------------
    // delete selected object
    //-----------------------------------------------------------------------------
    $scope.onClickDeleteSelectedObject=function(){
      var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (true) {
                canvas.remove(activeObject);
            }
        }
    }
    
    
    //-----------------------------------------------------------------------------
    // Clear canvas
    //-----------------------------------------------------------------------------
    $scope.onClickRestoreQr=function(){
        $rootScope.campaign.custom_qr=null;
        $rootScope.campaign.img_logo=null;
        $rootScope.campaign.img_bg=null;
        canvas.clear();
        $scope.addQRSVG();
        /*$scope.apiCampaigns.update($rootScope.campaign,function (result) {     
            if(result.success){
                  canvas.clear();
                  $scope.addQRSVG();
            }else{
                toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
            }
            $scope.editing=false;
        },function(err){
            toaster.pop("error","UPDATE QR CODE",angular.toJson(err));
            $scope.editing=false;
        });
        */
    }
    
    $scope.qrPngCustom=function() {
      canvas.deactivateAll().renderAll();  
      window.open(
          canvas.toDataURL({
                format: 'png'
            })
        ); 
    }
    $scope.qrJpgCustom=function() {
      canvas.deactivateAll().renderAll();  
       window.open(
          canvas.toDataURL({
                format: 'jpeg'
            })
        ); 
    }
    
    
    $scope.onClickExportSvg=function(){
        ///qr-svg-custom/:code
        $location.path('/qr-svg-custom/'+id_campaign);
    }
    
    //-----------------------------------------------------------------------------
    // navegation
    //-----------------------------------------------------------------------------
     
    $scope.navbar={};
    $scope.navbar.home={show:true,active:false};
    $scope.navbar.qr={show:true,active:true};
    $scope.navbar.editweb={show:true,active:false};
    $scope.navbar.statistics={show:true,active:false};
    $scope.navbar.users={show:true,active:false};

        
    $scope.onAction=function(action,id){
      switch(action) {
        case 'download':
            $location.path('/download/'+id_campaign);
            break;
        case 'config':
            $location.path('/config/'+id_campaign);
            break;
        case 'editweb':
            $location.path('/editweb/'+id_campaign);
            break;
        case 'statistics':
            $location.path('/statistics/'+id_campaign);
            break;
        case 'users':
            $location.path('/users/'+$rootScope.user.id);
            break;
        case 'home':
            $location.path('/campaigns');
            break;
      }

   }
        
     
      //************************************************************************
        // "add" rectangle onto canvas
       // canvas.add(rect);
        
        
        
       /* var group = new fabric.Group([rect], {
                          left:0,
                          top: 0
                        });
                        
        canvas.add(group);
      */
        fabric.NamedImage = fabric.util.createClass(fabric.Image, {
          type: 'named-image',

          initialize: function(element, options) {
            this.callSuper('initialize', element, options);
            options && this.set('name', options.name);
          },

          toObject: function() {
            return fabric.util.object.extend(this.callSuper('toObject'), { name: this.name });
          }
        });
        
        fabric.NamedImage.fromObject = function(object, callback) {
          fabric.util.loadImage(object.src, function(img) {
            callback && callback(new fabric.NamedImage(img, object));
          });
        };
        
       
        
        $scope.addImageBg=function(){
            fabric.Image.fromURL('/images/daniel-season-nine.jpg', function (oImg) {
                //oImg.set('left', PosX).set('top',PosY);
                $scope.bgImg=oImg;
                $scope.bgImg.set({
                    left: 0,
                    top: 0,
                    width:500,
                    height:500
                });
                canvas.add($scope.bgImg);
                canvas.renderAll();
              });
        
        }
        
        $scope.addImageLogo=function(){
            fabric.Image.fromURL('/images/daniel-season-nine.jpg', function (oImg) {
                //oImg.set('left', PosX).set('top',PosY);
                $scope.logoImg=oImg;
                $scope.logoImg.set({
                    left: 200,
                    top: 200,
                    width:100,
                    height:100
                });
                canvas.add($scope.logoImg);
                canvas.renderAll();
              }
              //, {"left": PosX, "top": PosY, "scaleX": 0.25, "scaleY": 0.25}
              );
        
        }
        
        $scope.toJson=function(){
          console.log("Canvas.toJson:"+canvas.toJson());
        }
        
/*	$scope.onChangeQrBgColor=function($event, color){
	    alert("hola capullo");
	}
	$scope.qrBgColor='#00abcd';
	//================================================
	
	$scope.fabric = {};
	$scope.FabricConstants = FabricConstants;

	//
	// Creating Canvas Objects
	// ================================================================
	$scope.addQRPNG = function(path) {
		//img = new Image();
		//img.src = '/qr-png/'+$scope.id_campaign;
		$scope.fabric.addImage('/qr-png/'+$scope.id_campaign);
	};
	
	$scope.addQRSVG = function(path) {
	    fabric.loadSVGFromURL('/qr-svg/'+$scope.id_campaign, function(objects, options) {
          $scope.qrShape = fabric.util.groupSVGElements(objects, options);
                $scope.qrShape
                .set({
                    left: 0,
                    top: 0,
                    width:100,
                    height:100
                })
                .scale(2.0);
                        var canvas=FabricCanvas.getCanvas();
                canvas.add($scope.qrShape);
                canvas.calcOffset();
              });
	
		//$scope.fabric.addShape('/qr-svg/'+$scope.id_campaign);
	};
        
        $scope.colorQrShape=function(){
            
          $scope.qrShape.setFill('#12df56');
        }
        
        $scope.bgColorQrShape==function(){
            
          $scope.qrShape.setFill('#12df56');
        }
        
        $scope.changeFormShape=function(){
              for (var i = 0; i < $scope.qrShape.paths.length; i++) {
                var a=$scope.qrShape.paths[i];
              }
        }
         
        $scope.changeColorCanvas=function(path) {
              var canvas=FabricCanvas.getCanvas();
              canvas.backgroundColor="green";
	};
        
        
        
        
	
	$scope.addShape = function(path) {
		$scope.fabric.addShape('/images/homer-simpson.svg');
	};

	$scope.addImage = function(image) {
		$scope.fabric.addImage('/images/daniel-season-nine.jpg');
	};

	$scope.addImageUpload = function(data) {
		var obj = angular.fromJson(data);
		$scope.addImage(obj.filename);
	};

	//
	// Editing Canvas Size
	// ================================================================
	$scope.selectCanvas = function() {
		$scope.canvasCopy = {
			width: $scope.fabric.canvasOriginalWidth,
			height: $scope.fabric.canvasOriginalHeight
		};
	};

	$scope.setCanvasSize = function() {
		$scope.fabric.setCanvasSize($scope.canvasCopy.width, $scope.canvasCopy.height);
		$scope.fabric.setDirty(true);
		delete $scope.canvasCopy;
	};

	//
	// Init
	// ================================================================
	var options={
			canvasBackgroundColor: '#ffffff',
			canvasWidth: 500,
			canvasHeight: 500,
			canvasOriginalHeight: 500,
			canvasOriginalWidth: 500,
			maxContinuousRenderLoops: 25,
			continuousRenderTimeDelay: 500,
			editable: true,
			JSONExportProperties:FabricConstants.JSONExportProperties,
			loading: false,
			dirty: false,
			initialized: false,
			userHasClickedCanvas: false,
			downloadMultipler: 2,
			imageDefaults: {},
			textDefaults: FabricConstants.textDefaults,
			shapeDefaults:FabricConstants.shapeDefaults,
			windowDefaults: {
				transparentCorners: false,
				rotatingPointOffset: 25,
				padding: 0
			},
			canvasDefaults: {
				selection: false
			},
			json:{
			       width:500,
				   height:500
				 }
		}
	
	$scope.init = function() {
	    $scope.fabric = new Fabric(options);
            $scope.group = new fabric.Group([], {
                          left:0,
                          top: 0
                        });
		//$scope.fabric = new Fabric({
		//	JSONExportProperties: FabricConstants.JSONExportProperties,
	  //		textDefaults: FabricConstants.textDefaults,
	 //		shapeDefaults: FabricConstants.shapeDefaults,
	//		json: {}
	//	})
	};

	
	
	$scope.$on('canvas:created', $scope.init);

	Keypress.onSave(function() {
		$scope.updatePage();
	});
        */
 /* $( document ).ready(function() {      
        var element = document.getElementById('grid-snap'),
        x = 0, y = 0;

        interact(element)
          .draggable({
            snap: {
              targets: [
                interact.createSnapGrid({ x: 30, y: 30 })
              ],
              range: Infinity,
              relativePoints: [ { x: 0, y: 0 } ]
            },
            inertia: true,
            restrict: {
              restriction: element.parentNode,
              elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
              endOnly: true
            }
          })
          .on('dragmove', function (event) {
            x += event.dx;
            y += event.dy;

            event.target.style.webkitTransform =
            event.target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';
          }).resizable({
            preserveAspectRatio: true,
            edges: { left: true, right: true, bottom: true, top: true }
          })
          .on('resizemove', function (event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            target.style.width  = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            //target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
           // target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
          });
    });
    */
    
    
    
/*
    $scope.id_campaign=$routeParams.id;
    
    var width = window.innerWidth;
    var height = window.innerHeight;

    function update(activeAnchor) {
        var group = activeAnchor.getParent();

        var topLeft = group.get('.topLeft')[0];
        var topRight = group.get('.topRight')[0];
        var bottomRight = group.get('.bottomRight')[0];
        var bottomLeft = group.get('.bottomLeft')[0];
        
        var image = group.get('Image')[0];

        var anchorX = activeAnchor.getX();
        var anchorY = activeAnchor.getY();

        // update anchor positions
        switch (activeAnchor.getName()) {
            case 'topLeft':
                topRight.setY(anchorY);
                bottomLeft.setX(anchorX);
                break;
            case 'topRight':
                topLeft.setY(anchorY);
                bottomRight.setX(anchorX);
                break;
            case 'bottomRight':
                bottomLeft.setY(anchorY);
                topRight.setX(anchorX);
                break;
            case 'bottomLeft':
                bottomRight.setY(anchorY);
                topLeft.setX(anchorX);
                break;
        }

        image.position(topLeft.position());

        var width = topRight.getX() - topLeft.getX();
        var height = bottomLeft.getY() - topLeft.getY();
        if(width && height) {
            image.width(width);
            image.height(height);
        }
    }
    function addAnchor(group, x, y, name) {
        var stage = group.getStage();
        var layer = group.getLayer();

        var anchor = new Konva.Circle({
            x: x,
            y: y,
            stroke: '#666',
            fill: '#ddd',
            strokeWidth: 2,
            radius: 2,
            name: name,
            draggable: true,
            dragOnTop: false
        });

        anchor.on('dragmove', function() {
            update(this);
            layer.draw();
            // save stage as a json string
            var json = stage.toJSON();

            console.log('DRAGMOVE:'+json);
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function() {
            group.setDraggable(true);
            layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'pointer';
            this.setStrokeWidth(4);
            layer.draw();
        });
        anchor.on('mouseout', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            this.setStrokeWidth(2);
            layer.draw();
            console.log(stage.toJSON());
        });

        group.add(anchor);
    }

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    // darth vader
    var darthVaderImg = new Konva.Image({
        width: 200,
        height: 200
    });

    // yoda
    var yodaImg = new Konva.Image({
        width: 50,
        height: 50
    });
    
    // qr
    var qrImg = new Konva.Image({
        width: 150,
        height: 150
    });

    var darthVaderGroup = new Konva.Group({
        x: 200,
        y: 200,
        draggable: true
    });
    layer.add(darthVaderGroup);
    darthVaderGroup.add(darthVaderImg);
    addAnchor(darthVaderGroup, 0, 0, 'topLeft');
    addAnchor(darthVaderGroup, 200, 0, 'topRight');
    addAnchor(darthVaderGroup, 200, 200, 'bottomRight');
    addAnchor(darthVaderGroup, 0, 200, 'bottomLeft');

    var yodaGroup = new Konva.Group({   
        x: 50,
        y: 50,
        draggable: true
    });
    layer.add(yodaGroup);
    yodaGroup.add(yodaImg);
    addAnchor(yodaGroup, 0, 0, 'topLeft');
    addAnchor(yodaGroup, 50, 0, 'topRight');
    addAnchor(yodaGroup, 50, 50, 'bottomRight');
    addAnchor(yodaGroup, 0, 50, 'bottomLeft');
    
    
    
    var qrGroup = new Konva.Group({   
        x: 150,
        y: 150,
        draggable: true
    });
    layer.add(qrGroup);
    qrGroup.add(qrImg);
    addAnchor(qrGroup, 0, 0, 'topLeft');
    addAnchor(qrGroup, 150, 0, 'topRight');
    addAnchor(qrGroup, 150, 150, 'bottomRight');
    addAnchor(qrGroup, 0, 150, 'bottomLeft');
    

    var imageObj1 = new Image();
    imageObj1.onload = function() {
        darthVaderImg.image(imageObj1);
        layer.draw();
    };
    imageObj1.src = 'http://konvajs.github.io/assets/darth-vader.jpg';

    var imageObj2 = new Image();
    imageObj2.onload = function() {
        yodaImg.image(imageObj2);
        layer.draw();
    };
    imageObj2.src = 'http://konvajs.github.io/assets/yoda.jpg';
    
    
    var imageObj3 = new Image();
    imageObj3.onload = function() {
        qrImg.image(imageObj3);
        layer.draw();
    };
    imageObj3.src = '/qr-png/'+$scope.id_campaign;
}	*/
});
