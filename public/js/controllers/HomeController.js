forum_app.controller('HomeController', function ($scope, UserModel, $location) {

    $scope.loggedUser = UserModel.isUserLoggedIn();

    $scope.login = function () {
        $location.path('/login');  
    }
    
    $scope.cadastro = function () {
        $location.path('/register');  
    }

    $scope.logout = function () {
        UserModel.clearData();
        location.reload();
    }
});
