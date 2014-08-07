'use strict';

angular.module('showcolorsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/emissions', {
        templateUrl: 'app/emission/emission.html',
        controller: 'EmissionCtrl'
      });
  });