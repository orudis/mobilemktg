angular.module('app.layout.header', []);

angular.module('app.layout.header')
.directive('eduHeader', function () {
                        return {
                            restrict: 'A',
                            replace: true,
                            scope: true,
                            templateUrl: 'app/layout/header/header.tpl.html',
                            controller: function ($scope, $element, $attrs) {
                                  $scope.nameC="Consejería de Educación, Universidades y Empleo";
                            }
                        };
                    });