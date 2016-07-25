angular.module('app.layout.shell', ['app.layout.header','app.layout.topnav','app.layout.footer','app.layout.leftnav','shell.service']);

angular.module('app').requires.push('app.layout.shell');

angular.module('app.layout.shell')
.directive('eduShell', function () {
                        return {
                            restrict: 'A',
                            replace: true,
                            scope: true,
                            templateUrl: 'app/layout/shell/shell.tpl.html',
                            controller: function ($rootScope,$scope, $element,$timeout, $attrs,dataFactoryApp,Session,$location) {
                                
                                    //---------------------------------------------------------------------
                                    //  API REST
                                    //---------------------------------------------------------------------	
                                    var uriUser="/api/user";
                                    $scope.apiUser=dataFactoryApp(uriUser,'');
                                    
                                    $scope.session=Session;	
                                    
                                    $scope.apiUser.get({},function (user) {     
                                            $rootScope.user=user;
                                            if (_.isUndefined(user)){
                                                $scope.showView="unauthorized"
                                            }else{
                                                $scope.showView="authorized"
                                            }		
                                    },function(err){
                                        $scope.showView="authorized"
                                        toaster.pop("error","GET USER",angular.toJson(err));
                                        console.log('error:'+err);
                                    });    
                                        
								
								
								
                                    $rootScope.showMessage = function(type,text,duration) {
                                            $rootScope.optionsMessage={};
                                            $rootScope.optionsMessage.show=true;
                                            $rootScope.optionsMessage.type=type;
                                            $rootScope.optionsMessage.message=text;
                                            var closeForm=function(){
                                                    $rootScope.optionsMessage.show=false;
                                                    $rootScope.$apply() ;
                                            }
                                            $timeout(closeForm,duration);
                                    };
                                    
                                    $rootScope.showFormUser = function(options) {
                                            $rootScope.optionsFormUser=options;
                                            $rootScope.optionsFormUser.show=true;
                                    }
                                    $rootScope.hideFormUser = function() {
                                            $rootScope.optionsFormUser.show=false;
                                    }
                                    
                            	
								
                            
                            	
                            	
                            
                            }
                        };
                    });