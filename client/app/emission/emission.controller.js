'use strict';

angular.module('showcolorsApp')
  .controller('EmissionCtrl', function ($scope, EmissionApi,DistanceApi) {
    $scope.getEmitters = function() {        
        EmissionApi.showEmissions().success(function (response) {
            $scope.emissions = response;
        });
        DistanceApi.getDistance().success(function (response) {
            //console.log(JSON.stringify(response));
        });
    };
  });
