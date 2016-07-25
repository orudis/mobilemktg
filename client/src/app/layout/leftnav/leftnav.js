angular.module('app.layout.leftnav', ['leftnav.service']);

angular.module('app.layout.leftnav')
.directive('eduLeftnav', function () {
                        return {
                            restrict: 'A',
                            replace: true,
                            scope: true,
                            transclude:true,
                            templateUrl: 'app/layout/leftnav/leftnav.tpl.html',
                            controller:function ($rootScope,$scope, $element, $attrs,Session,leftnavDataFactory,$location) { 
                                
								
								$scope.onClickNavigation=function(option){
							//para pruebas-----------------------------
							    $location.path(option.url);	
							//-----------------------------------------	
									if(!_.isUndefined($rootScope.autorizaciones)){
										$rootScope.optionSelected=option;	
										var index_proceso=_.findIndex($rootScope.autorizaciones.autorizaciones,{proceso:option.proceso} );
										  //if($rootScope.autorizaciones.autorizaciones[index_proceso-1].autorizado=='S' || ($rootScope.autorizaciones.autorizaciones[index_proceso-1].autorizado=='N'  &&  $rootScope.autorizaciones.autorizaciones[index_proceso-1].bloqueado)){
										  if(1==1){	
											var optionMenuLeft=_.where($rootScope.autorizaciones.autorizaciones,{proceso:option.proceso})[0];
											if(optionMenuLeft.autorizado=='S'  && !optionMenuLeft.bloqueado){
												  //activamos el item en el menu de la izquierda
												  option.estado="activo";
												 
												 //activamos el item en la barra de progreso  de la configuracion
												 try{
												 _.where($rootScope.appConfig.progressBarConfig,{proceso:option.proceso})[0].estado="activo";
												 }catch(e){};
												 //activamos el item en la barra de progreso de las notas
												 try{
												 _.where($rootScope.appConfig.progressBarNotas,{proceso:option.proceso})[0].estado="activo";
												 }catch(e){}
												 
												 //activamos el item en la barra de progreso 
												 optionMenuLeft.estado="activo";
												
												$location.path(option.url);	
											}
                                         }											
										 
									}
								}
								$scope.disabledItem=function(option){
									
									if(!_.isUndefined($rootScope.autorizaciones)){
									    
		
									    var optionMenuLeft=_.where($rootScope.autorizaciones.autorizaciones,{proceso:option.proceso});
										if(optionMenuLeft[0].autorizado=='S'  && !optionMenuLeft[0].bloqueado){
											return false;
										}else{
											return true;
										}	
								    } 
								
								}
								
                            },link: function($scope, elem, attrs) {
                            	
                            }
                        };
                    });