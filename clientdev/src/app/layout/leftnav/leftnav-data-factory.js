angular.module('leftnav.service', ['ngResource'])
.factory('leftnavDataFactory', [ '$resource', function ( $resource) {
	return function (urlBaseMenu) {
		return $resource(urlBaseMenu+'/:sub/:action', {}, {
			get: {method:'GET', params:{sub:'lineas'}, headers:{'Access-Control-Allow-Credentials': true}, isArray:true},
			getApps: {method:'GET', params:{sub:'aplicaciones'}, headers:{'Access-Control-Allow-Credentials': true}, isArray:true}
		});
		
		//return appConfig.menu2;
	}
}]);




