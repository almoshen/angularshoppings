(function () {
    'use strict';
angular
    .module('tmallApp',['ngRoute','ngAnimate','ngMaterial','ngCookies'])
    .config(function ($routeProvider,$locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'components/pages/home.html',
            controller:'tmallController'
        })
        .when('/home',{
            templateUrl:'components/pages/homelogin.html',
            controller:'tmallController'
        })
        .when('/products/:productId',{
            templateUrl:'components/pages/details.html',
            controller:'detailsController'
        })
        .when('/login',{
            templateUrl:'login/login.html',
            controller:'loginController',
            controllerAs:'vm'
        })
        .when('/register',{
          templateUrl:'register/register.html',
          controller:'registerController',
          controllerAs:'vm'
        })
        .otherwise({
          redirectTo:'/'
        });
      })
.run(function ($rootScope, $location, $cookies, $http) {
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;

        });
    })


})();
/*angular
.module('tmallApp')
.directive('mallHeader',function(){
  return {
    restrict: 'E',
    templateUrl: 'components/pages/mallHeader.html',
    replace: true
  }
});*/
