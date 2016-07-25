angular.module('common.directives.appVersion', [])
	.directive('appVersion', function() {
		return {
			restrict: "A",
			template: "v{{config.version}}"
		};
	}).directive('ngEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });
	 
	                event.preventDefault();
	            }
	        });
	    };
	});

