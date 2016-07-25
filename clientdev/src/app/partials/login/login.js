angular.module('app.login', [
 'eduCrud',
 'ngRoute'
]);

angular.module('app').requires.push('app.login');

angular.module('app.login')
.config(function config($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'app/partials/login/login.tpl.html',
		controller:'LoginCtrl'
	});
}).controller('LoginCtrl', function($rootScope,$scope,$location,Browser,Session,$filter,$http,dataFactoryApp,$route, $window) {

	//for partial login hide header, topnav, leftnav and footer
	
	$rootScope.appConfig.showTopnav=false;
	$rootScope.appConfig.showLeftnav=false;
	$rootScope.appConfig.showBreadcrums=false;
	angular.element("#main-content").width="100%";

    $scope.onLogin=function(){
        console.log('user:'+$scope.email + '    password:'+$scope.password);
        $location.path('/home');
    }
	
});
