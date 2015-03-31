'use strict';

/**
 * @ngdoc function
 * @name mapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapApp
 */
var app = angular.module('mapAppApp')
  app.controller('MainCtrl', function ($scope) {

	$scope.map = { 
		center: { 
			latitude: 51.7113963, 
			longitude: -5.0372308 
		}, 
		zoom: 8 
	}
	$scope.markers = [{
    		id: '5WnUJbhPEg',
    		coords: { 
				latitude: 51.7113963, 
				longitude: -5.0372308 }
	}];

$scope.$watch(function() {
        return $scope.markers;
    		}, function(newValue, oldValue) {
        		console.log('markers changed in $watch');
        	console.log($scope.markers);
   		}, 
    	true
	);
	  
	  

  });

