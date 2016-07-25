angular.module('common.directives.inlineEdit', []);

angular.module('app').requires.push('common.directives.inlineEdit');

angular.module('common.directives.inlineEdit', [])
.directive("slInline", function($timeout) {
    return {
      transclude: "element",
      priority: 2,
      scope: {
        model: "=ngModel",
        altModel: "=slInline"
      },
      template:	'<span class="InlineEditWidget">' + 
				'	<span ng:show="editing" class="InlineEditing">'+
				'		<span class="transclude-root" ng:transclude></span>'+
				'	</span>'+
				'	<span class="InlineEditable" ng:hide="editing"  ng:click="enter()">{{altModel || model}}&nbsp;</span>'+
				'</span>',
      replace: true,
      link: function(scope, elm, attr) {
        var originalValue, transcluded;
        originalValue = scope.model;
        transcluded = elm.find(".transclude-root").children().first();
        transcluded.bind("keydown", function(e) {
          if (e.keyCode === 27) {
            return scope.$apply(scope.cancel);
          }
        });
        transcluded.bind("blur", function() {
          return scope.$apply(scope.leave);
        });
        scope.enter = function() {
          scope.editing = true;
          originalValue = scope.model;
          return $timeout((function() {
            var input;
            input = elm.find("input");
            if (input.size() > 0) {
              input[0].focus();
              return input[0].select();
            }
          }), 0, false);
        };
        scope.leave = function() {
          return scope.editing = false;
        };
        return scope.cancel = function() {
          scope.editing = false;
          return scope.model = originalValue;
        };
      }
    };
  });

