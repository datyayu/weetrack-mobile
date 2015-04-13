angular.module("weetrack.controllers.season", [])


.controller("SeasonCtrl", function ($scope, SeasonService) {
  $scope.sortOption = "content.title";
  $scope.sortReverse = false;
  $scope.seriesList = {};
  $scope.banner = "";

  SeasonService
    .getSeasonInfo()
    .then(function (data) {
      $scope.seriesList = data;
    });


  $scope.toggleSortOption = function (option) {
    if ($scope.sortOption !== option) {
      $scope.sortReverse = false;
      $scope.sortOption = option;
    } else {
      $scope.sortReverse = !$scope.sortReverse;
    }
  };

});