angular.module('common.directives.resize', [])
.directive('resize', function ($window) {
	return function (scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function () {
			return { 'h': w.height(), 'w': w.width() };
		};
		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
			scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            scope.style = function (h,w,l) {
				return { 
                    'height': (newValue.h - h) + 'px' ,'left': l+ 'px'  ,'width': (newValue.w - w) + 'px'
                };
			};
			scope.styleHW = function (h,w) {
				return { 
                    'height': (newValue.h - h) + 'px' ,'width': (newValue.w - w) + 'px'
                };
			};
			scope.styleTopLeft = function (t,l) {
				return { 'top': (newValue.h - t) + 'px','left':l +'px'    }	
            };
			scope.styleMidTopMidLeft = function (t,l) {
				return { 'top': (newValue.h/2 - t) + 'px','left':(newValue.w/2 - l) +'px'    }	
            };
			scope.styleTopWidth = function (t,w) {
				return { 'top': t+'px','width':w +'px'    }	
            };
            scope.styleTop = function (t) {
				return { 'top': t + 'px'   }	
            };
			scope.styleHeight = function (h) {
				return { 'height': (newValue.h - h) + 'px'   }	
            };
		}, true);
	
		w.bind('resize', function () {
			scope.$apply();
		});
	}
})


