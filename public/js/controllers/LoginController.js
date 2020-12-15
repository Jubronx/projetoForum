forum_app.controller('LoginController', function ($scope, $http, $location, user) {
    $scope.login = function () {
        var request = $http({
            url: 'http://localhost/projetoForum/public/server/server.php',
            method: "post",
            data: {
                email: $scope.email,
                senha: $scope.senha
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.then(function (response) {
            if (response.data.status == 'loggedin') {
                user.userLoggedIn();
                user.setEmail(response.data.user);
                $location.path('/home');
            } else {
                alert('invalid login');
            }
        })
    }
   
});
