angular.module('shell.service', ['ngResource'])
.factory('shellDataFactory', function($resource){
	return function (urlBaseAut) {
		return $resource(urlBaseAut+'/:action', {}, {
			get: {method:'GET', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false},
			logout: {method:'GET', params:{action:'logout'}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false}
		});
	}
});





