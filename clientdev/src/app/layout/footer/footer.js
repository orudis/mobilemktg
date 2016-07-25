angular.module('app.layout.footer', []);

angular.module('app.layout.footer')
.directive('eduFooter', function () {
                        return {
                            restrict: 'A',
                            replace: true,
                            scope: true,  
                            templateUrl: 'app/layout/footer/footer.tpl.html',
                            controller:  function ($rootScope,$scope, $element, $attrs) {
                            	    $scope.copyR=$rootScope.appConfig.copyright;
                            }
                        };
                    });