forum_app.controller('LoginController', function($scope, $http) {
    
    $scope.login = function() {
        var nome = $scope.nome;
        var senha = $scope.senha;
        $http({
            url: 'http://localhost/projetoForum/public/server/server.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'email= '+nome+'&senha= '+senha
        }).then(function(response) {
            console.log(response.data);
        })
    }
    
});