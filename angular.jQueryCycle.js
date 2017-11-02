angular
	.module('ngCycle', [])
	.directive('jCyclef',[CyclePluginf])
	function CyclePluginf(){
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	       $(element).cycle({
		   fx: 'fade',
		   timeout: 5000
	       });
	    }
	  };
	}
	.directive('jCycles',[CyclePlugins])
	function CyclePlugins(){
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	       $(element).cycle({
		   fx: 'scrollHorz',
		   timeout: 5000
	       });
	    }
	  };
	}
