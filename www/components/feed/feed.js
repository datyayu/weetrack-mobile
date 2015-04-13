angular.module("weetrack.controllers.feed", [])


.controller("FeedCtrl", function ($scope, FeedService) {
  $scope.releases = {};

  FeedService
    .getFeedInfo()
    .then(function (data) {
      $scope.releases = data;
    });
});