forum_app.controller('HomeController', function ($scope, user) {
    
    $scope.user = user.getEmail();
});