forum_app.controller('LoginController', function ($scope, $http) {
    $scope.login  = function() {
        var nome  = $scope.nome;
        var senha = $scope.senha;
        $http({
            url: 'http://localhost/projetoForum/server.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'nome =' +nome + 'senha=' +senha
        }).then(function (response) {
            console.log(response.data);
        })
    }
    
});