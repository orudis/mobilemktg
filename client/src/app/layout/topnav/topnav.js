angular.module('app.layout.topnav', ['topnav.service']);

angular.module('app.layout.topnav')
.directive('eduTopnav', function () {
                        return {
                            restrict: 'A',
                            replace: true,
                            scope: true,
                            transclude:true,
                            templateUrl: 'app/layout/topnav/topnav.tpl.html',
                            controller:function ($rootScope,$scope, $element,$window, $attrs,Session,dataFactoryApp) {
                                //---------------------------------------------------------------------
                                //  API REST
                                //---------------------------------------------------------------------	
                                var uriConfig="/api/config";
                                $scope.apiConfig=dataFactoryApp(uriConfig,'');
                                
                                $scope.session=Session;	
                                
                                $scope.apiConfig.get({},function (config) {     
                                        $scope.host=config.host;		
                                },function(err){
                                    toaster.pop("error","GET CONFIG",angular.toJson(err));
                                    console.log('error:'+err);
                                });
                                                                                
                                                                                                                                						
                                $scope.closeSession=function(){
                                        Session.destroy();
                                        console.log("$scope.host:"+$scope.host);
                                        window.location= $scope.host+'/logout';
                                }
                                        
                                
                                //$rootScope.showNavBar=false;
                                
                            	
	                                  
                            	$scope.changeState=function(itemmenu){
	                                	  angular.forEach($scope.menu, function(item){
	                                		  if(item.nombre===itemmenu.nombre){
	                                			  item.state="active";
	                                		  }else{
	                                			  item.state="";
	                                		  }
	                                	  });
                                }	 
                            },
                            link: function($scope, elem, attrs) {
                            	
                            }
                        };
                    });