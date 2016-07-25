angular.module('app.editweb', [
 'ngRoute',
 'angular-medium-editor'
]);

angular.module('app').requires.push('app.editweb');

angular.module('app.editweb')
.config(function config($routeProvider) {
	$routeProvider.when('/editweb/:id', {
		templateUrl: 'app/partials/editweb/editweb.tpl.html',
		controller:'editwebCtrl'
	});
}).controller('editwebCtrl', function($rootScope,$scope,$routeParams,Session,$location,dataFactoryApp,toaster) {
	
    $rootScope.showNavBar=true;
    $scope.editing=false;
    $scope.adding=false;
    
    $scope.pageDirty=false;
    $scope.mobilePage={};
    $scope.mobilePages=[];
    
    var id_campaign=$routeParams.id;
    
	//---------------------------------------------------------------------
	//  API REST
	//---------------------------------------------------------------------	
	var uriMobilePages="/api/mobilepages/:id";
	$scope.apiMobilePages=dataFactoryApp(uriMobilePages,'');
    
    var uriMobilePagesChildren="/api/mobilepages/children/:id";
	$scope.apiMobilePagesChildren=dataFactoryApp(uriMobilePagesChildren,'');
        
    var uriCampaigns="/api/campaigns/:id";
	$scope.apiCampaigns=dataFactoryApp(uriCampaigns,'');

    //---------------------------------------------------------------------
	//  navbar
	//--------------------------------------------------------------------- 
    $scope.navbar={};
    $scope.navbar.home={show:true,active:false};
    $scope.navbar.qr={show:true,active:false};
    $scope.navbar.editweb={show:true,active:true};
    $scope.navbar.statistics={show:true,active:false};
    $scope.navbar.users={show:true,active:false};
    
    //---------------------------------------------------------------------
	//  get init data
	//--------------------------------------------------------------------- 
   /* var getData=function(){
			var oParamsMobilePages={};
			$scope.apiMobilePages.getAll({},function (data) {     
				$scope.mobilePages=data;		
			},function(err){
                            toaster.pop("error","GET MOBILEPAGES",angular.toJson(err));
                        });
    }
	 */
    //getData();
    
    //---------------------------------------------------------------------
	//  menú actions
	//--------------------------------------------------------------------- 
    $scope.onAction=function(action,id){
          switch(action) {
            
            case 'delete':
               $scope.apiMobilePages.delete({'id': id},function (result) {     
                    if(result.success){
                        var idxMobilePage=_.findIndex($scope.mobilePages,{'id':result.data.id*1});
                        $scope.mobilePages.splice(idxMobilePage,1);
                    }	
               },function(err){
                    toaster.pop("error","DELETE MOBILEPAGES",angular.toJson(err));
                });
                break;
            case 'new':
                $scope.mobilePage={name:'',description:'',html:'',id_page:$scope.campaign.id_page};
                $scope.apiMobilePages.insert($scope.mobilePage,function (result) {     
                    if(result.success){
                        $scope.mobilePage.id=result.data.id;
                        $scope.mobilePages.push($scope.mobilePage);
                        $scope.mobilePages=_.sortBy($scope.mobilePages,'id');
                        $scope.mobilePage.editing=true;
                    }else{
                        toaster.pop("error","INSERT MOBILEPAGES",angular.toJson(err));
                    }
                    //$scope.adding=false;
                },function(err){
                    toaster.pop("error","INSERT MOBILEPAGES",angular.toJson(err));
                    //$scope.adding=false;
                });  
                  
                //$scope.mobilePages.push(mobilePage);
                //$scope.adding=true;
                break;
            case 'edit':
                $scope.mobilePage={};
                var oParamsMobilePages={};
                oParamsMobilePages.id=id;
                $scope.apiMobilePages.get(oParamsMobilePages,function (mobilePage) {  
                        var mobilePage= _.find($scope.mobilePages,{'id':id});
                        $scope.mobilePage=mobilePage;
                        $scope.editor.setContent($scope.mobilePage.html);
                        $scope.mobilePage.editing=true;		
                },function(err){
                    toaster.pop("error","GET MOBILEPAGES",angular.toJson(err));
                });
                break;
            case 'qr':
                $location.path('/qr/'+id_campaign);
                break;
            case 'config':
                $location.path('/config/'+id_campaign);
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
            case 'save':
                var mobilePage= _.find($scope.mobilePages,{'id':id});
                mobilePage.html=$scope.editor.serialize()['element-0'].value;
                $scope.apiMobilePages.update(mobilePage,function (result) {     
                    if(result.success){
             
                    }else{
                        toaster.pop("error","UPDATE MOBILEPAGES",angular.toJson(err));
                    }
                    mobilePage.editing=false;
                },function(err){
                    toaster.pop("error","UPDATE MOBILEPAGES",angular.toJson(err));
                    $scope.editing=false;
                });
              case 'cancel':
                  $scope.editing=false;
                   
          }
    }
        
        
        //create editor
       
        $scope.editor = new MediumEditor('.editable', {
                extensions: {
                  table: new MediumEditorTable()
                },
                toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'quote', 'anchor', 'image', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'superscript', 'subscript', 'orderedlist', 'unorderedlist', 'pre', 'removeFormat', 'outdent', 'indent', 'h2', 'h3','table'],
                    sticky: true,
                    static: true,
                    align: 'center',
                    updateOnEmptySelection: false
                },
                buttonLabels: 'fontawesome',
                anchor: {
                    targetCheckbox: true
                },
                 paste: {
                    cleanPastedHTML: true,
                    forcePlainText: false
                },
                relativeContainer: document.getElementById('someRelativeDiv')
        });
        
        //addon insert image

        $(function () {
            $('.editable').mediumInsert({
                editor: $scope.editor,
                addons: {
                    images: {
                        fileUploadOptions: { // See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                            url: 'uploads',
                            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                        },
                        uploadScript:'' ,
                        deleteScript: 'deleteUploads',
                        captionPlaceholder: 'Escriba un titulo para la imagen',
                        styles: {
                            slideshow: {
                                label: '<span class="fa fa-play"></span>',
                                added: function ($el) {
                                    $el
                                        .data('cycle-center-vert', true)
                                        .cycle({
                                            slides: 'figure'
                                        });
                                },
                                removed: function ($el) {
                                    $el.cycle('destroy');
                                }
                            }
                        },
                        actions: null
                    }
                }
            });
        });
        
        //method
        $scope.onSave=function(){
            $scope.mobilePage.html=$scope.editor.serialize()['element-0'].value;
            
            $scope.apiMobilePages.update($scope.mobilePage,function (data) {     
                   $scope.pageDirty=false;	
            },function(err){
                toaster.pop("error","UPDATE MOBILEPAGE",angular.toJson(err));
                console.log('error:'+err);
            });
        }
        $scope.onClick=function(){
              console.log($scope.editor.serialize());
        }
        
        $scope.setContent=function(){
              $scope.editor.setContent('<h1>holA</h1>');
        }
        
        
        // listener
        $scope.editor.subscribe('editableInput', function(event,element){
             $scope.pageDirty=true;  
        })
        
        
        //---------------------------------------------------------------------
	    //  DATA
	    //---------------------------------------------------------------------	
        var getData=function(){
            console.log("He entrado");
          /*  var oParamsCampaigns={};
            oParamsCampaigns.id=$routeParams.id; //$location.search().id;
            $scope.apiCampaigns.get(oParamsCampaigns,function (campaign) {
                $scope.campaign=campaign;
          */    
                //if have not created mobile website homepage
                if(_.isNull($rootScope.campaign.id_page)){
                    oParamsMobilePages={};
                    oParamsMobilePages.name="Página principal";
                    // inserts the home page
                    $scope.apiMobilePages.insert(oParamsMobilePages,function (insertedMobilePage) {
                        if(insertedMobilePage.success){
                            $scope.mobilePage=oParamsMobilePages;
                            $scope.mobilePage.id=insertedMobilePage.data.id;
                            
                            $scope.mobilePages.push($scope.mobilePage);
                            
                            var oParamsCampaign={};
                            oParamsCampaign.id=$rootScope.campaign.id;
                            oParamsCampaign.id_page=insertedMobilePage.data.id;
                            //update campaing with id_page
                            $scope.apiCampaigns.update(oParamsCampaign,function (updatedCampaign) { 
                                if(updatedCampaign.success){
                                   $scope.campaign.id_page=insertedMobilePage.data.id;
                                 }else{
                                    toaster.pop("error","UPDATE CAMPAIGN","No ha sido posible modificar la campaña con el id de la pagina");
                                 }               
                            },function(err){
                                toaster.pop("error","UPDATE CAMPAIGN",angular.toJson(err));
                                console.log('error:'+err);
                            });
                        }else{
                            toaster.pop("error","INSERT MOBILEPAGE","No ha sido posible crear la pagina");
                        }
                        
                    },function(err){
                        toaster.pop("error","INSERT MOBILEPAGE",angular.toJson(err));
                        console.log('error:'+err);
                    }); 
                    
                    
                }else{
                    var oParamsMobilePages={};
                    oParamsMobilePages.id=$rootScope.campaign.id_page; //$location.search().id;
                    $scope.apiMobilePagesChildren.getAll(oParamsMobilePages,function (mobilePages) {
                            
                            $scope.mobilePages=mobilePages;
                            
                            $scope.mobilePage={id:$rootScope.campaign.id_page,name:'Página principal',id_page:null};
                                
                            $scope.mobilePages.splice(0,0,$scope.mobilePage);
                        
                            
                            $scope.editor.setContent($scope.mobilePage.html);	
                    },function(err){
                        toaster.pop("error","GET MOBILEPAGE",angular.toJson(err));
                        console.log('error:'+err);
                    });    
                }
        
            /*},function(err){
                toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                console.log('error:'+err);
            });*/
            
        }
      
        getData();
});
 
