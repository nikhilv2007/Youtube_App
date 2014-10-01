
var angMain = angular.module('myApp', []);
	

angMain.controller('MainCtrl', function($scope, $http){
		
	$scope.getAngular = function(videoId){
		var webview=document.querySelector("webview");
  		webview.src="http://www.youtube.com/embed/" +$scope.videoId+ "?autoplay=1&rel=1";
  
	};
			
});
