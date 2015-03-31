'use strict';

/**
 * @ngdoc overview
 * @name mapAppApp
 * @description
 * # mapAppApp
 *
 * Main module of the application.
 */
var app = angular.module('mapAppApp', [
    						'ngAnimate',
							'ngCookies',
							'ngResource',
							'ngRoute',
							'ngSanitize',
							'ngTouch',
							'uiGmapgoogle-maps',
							

							])

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//.config(function(uiGmapGoogleMapApiProvider) {
//    uiGmapGoogleMapApiProvider.configure({
//        key: 'AIzaSyDfpzaKzPEPrLmDzxMhDycEkObRhsH12k4&sensor=true',
//        v: '3.17',
//        libraries: 'weather,geometry,visualization'
//    });
//})
