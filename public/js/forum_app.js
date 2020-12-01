angular.module('forum', ['ngRoute', 'ngResource']);

angular.module('forum').config(function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/profile', {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController'
    })
    .otherwise({ redirectTo: '/404.html' });

});