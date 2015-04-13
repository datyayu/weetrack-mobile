angular.module("weetrack.controllers.series", [])


.controller("SeriesCtrl", function ($scope, $stateParams, SeriesService) {
  $scope.series = {};  

  var seriesId = $stateParams.seriesID;

  SeriesService
    .getSeriesInfo(seriesId)
    .then(function (data) {
      $scope.series = data;
    });
});