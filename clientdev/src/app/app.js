window.app = window.app || {};

app.bootstrap = function() {
	angular.bootstrap(document, ['app']);      
};

app.init = function() {
	app.bootstrap();
};

angular.element(document).ready(function() {
	app.init();
});

angular.module('app',appConfig.modules)
.config(function myAppConfig($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);
	$routeProvider.otherwise({
		redirectTo: '/campaigns'
	});
})
.config(function (minicolorsProvider) {
        angular.extend(minicolorsProvider.defaults, {
          control: 'hue',
          position: 'bottom right',
          theme: 'bootstrap'
        });
})
.config(function ($provide, $httpProvider) {
  $provide.factory('MyHttpInterceptor', function ($q,$rootScope) {
    return {
      // On request success
      request: function (config) {
         $rootScope.showOverlayLoading=true;
        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
      },
 
      // On request failure
      requestError: function (rejection) {
         $rootScope.showOverlayLoading=false;
        // Return the promise rejection.
        return $q.reject(rejection);
      },
 
      // On response success
      response: function (response) {
         $rootScope.showOverlayLoading=false;
        // Return the response or promise.
        return response || $q.when(response);
      },
 
      // On response failture
      responseError: function (rejection) {
         $rootScope.showOverlayLoading=false;
        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  });
 
  // Add the interceptor to the $httpProvider.
  $httpProvider.interceptors.push('MyHttpInterceptor');
 
})
.run(function run($rootScope,$window, $templateCache, $location,editableOptions,sTranslate) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        
    $rootScope.appConfig=appConfig;
    //for lodash access from views
    $rootScope._ = window._;
    //for Math access from views
    $rootScope.Math = window.Math;
    //for service sTranslate access from views
    $rootScope.translate = sTranslate;
        
        
        
	/*if(typeof $rootScope.centro=='undefined' || $rootScope.centro==""){
		 $location.path('/login'); 
	}
	*/
	//now redirect to appropriate path based on browser type
    /*if(bowser.chrome || bowser.firefox || (bowser.msie && parseFloat(bowser.version)>=9))
    {
	 // $location.path('/inicio');         
    }
    else
    {
       window.location.href = 'partials/utils/browsernotsupport.html'
    }
    */
	
	//for lodash access from views
	$rootScope._ = window._;
	//for Math access from views
	$rootScope.Math = window.Math;
	
	
	$rootScope.$on("$locationChangeStart", function(event, next, current) {
		/*if(typeof $rootScope.user!=="undefined" && typeof $rootScope.menu!=="undefined"){
			var bAuthorized=false;
			for(keyuser in $rootScope.user.roles){
				console.log("roles....:"+keyuser+ " " +$rootScope.appConfig.procesos_uri[$rootScope.user.roles[keyuser]]);
				var uri=$rootScope.appConfig.procesos_uri[$rootScope.user.roles[keyuser]];
				if(next.indexOf(uri)!=-1){
					bAuthorized=true;
					break;
				}		
			}
			if(!bAuthorized){
				event.preventDefault();
			}
		}*/
    });
	//$rootScope.showOverlayLoading=true;	
	
	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		//$rootScope.showOverlayLoading=true;
	});
	
	$rootScope.$on('$routeChangeSuccess', function(next, current) {
		
		$window.scrollTo(0, 0);
		//loaderModalAPI.hide();
	});
	$rootScope.$on('$viewContentLoaded', function() {
		//$rootScope.showOverlayLoading=false;
    	
	});
	
	
	
	
}).controller('AppCtrl', function AppCtrl($scope,$rootScope, $location) {
    
});
