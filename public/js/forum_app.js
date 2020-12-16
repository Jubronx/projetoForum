var forum_app = angular.module('forum', ['ngRoute', 'ngResource']);

forum_app.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    }).when('/logout', {
        resolve: {
            deadResolve: function ($location, user) {
                user.clearData();
                location.path('/home');

            }
            
        }
    })
    .when('/home', {
        resolve: {
            check: function ($location, user) {
                if (!user.isUserLoggedIn()) {
                    $location.path('/login');
                }
            },
        },
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
    .otherwise({ 
        templateUrl: 'templates/404.html',
    });
});
