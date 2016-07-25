angular.module('common.directives.blink', []);

angular.module('app').requires.push('common.directives.blink');

angular.module('common.directives.blink') 
.directive('blink', function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
		   
            function showElement() {
			   // console.log("hp"+$element[0].nextElementSibling.nextElementSibling);
			   //if(!_.isUndefined($element))
			  //     $element[0].childNodes[0].childNodes[0].css("color", "orange");
                $element.css("display", "inline");
				
				
                $timeout(hideElement, 500);
            }

            function hideElement() {
                $element.css("display", "none");
                $timeout(showElement, 500);
            }
            showElement();
        },
        template: '<span ng-transclude></span>',
        replace: true
    };
});
