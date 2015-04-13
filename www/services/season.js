var app = angular.module("weetrack.services.season", []);

app.factory("SeasonService", function ($http, $q) {
  return {
    getSeasonInfo: function () {
      var deferred = $q.defer();

      $http
        .get("http://weetrack.herokuapp.com/api/seasons/spring-2015")
        .success(function (seasonInfo) {
          deferred.resolve(seasonInfo);
        })
        .error(function (err) {
          deferred.resolve(err);
        });

      return deferred.promise;
    }
  }
});