var app = angular.module("weetrack.services.feed", []);

app.factory("FeedService", function ($http, $q) {
  return {
    getFeedInfo: function () {
      var deferred = $q.defer();

      $http
        .get("http://weetrack.herokuapp.com/api/feed")
        .success(function (releases) {
          deferred.resolve(releases);
        })
        .error(function (err) {
          deferred.resolve(err);
        });

      return deferred.promise;
    }
  }
});