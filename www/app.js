angular.module('weetrack', [
  'ionic', 
  'weetrack.controllers.main',
  'weetrack.services.feed',
  'weetrack.services.season',
  'weetrack.services.series',
  'weetrack.controllers.feed',
  'weetrack.controllers.season',
  'weetrack.controllers.series'
])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $sceDelegateProvider, $urlRouterProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    "self",
    "*://www.youtube.com/**"
  ]);



  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "components/menu/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.feed', {
    url: "/feed",
    views: {
      'menuContent': {
        templateUrl: "components/feed/feed.html",
        controller: 'FeedCtrl'
      }
    }
  })

  .state('app.season', {
    url: "/current-season",
    views: {
      'menuContent': {
        templateUrl: "components/season/season.html",
        controller: 'SeasonCtrl'
      }
    }
  })

  .state('app.series', {
    url: "/series/:seriesID",
    views: {
      'menuContent': {
        templateUrl: "components/series/series.html",
        controller: 'SeriesCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/feed');
});
