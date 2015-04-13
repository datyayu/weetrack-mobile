var app = angular.module("weetrack.services.series", []);

app.factory("SeriesService", function ($http, $q) {
  return {
    getSeriesInfo: function (seriesId) {
      var deferred = $q.defer();

      $http
        .get("http://weetrack.herokuapp.com/api/series/" + seriesId)
        .success(function (series) {
          deferred.resolve(series);
        })
        .error(function (err) {
          deferred.resolve(err);
        });

      return deferred.promise;
    }
  }
});