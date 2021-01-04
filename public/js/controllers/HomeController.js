forum_app.controller('HomeController', function ($scope, $http, UserModel, $location) {

    $scope.loggedUser = UserModel.isUserLoggedIn();

    $scope.teste = function() {
        var request = $http({
            url: 'http://localhost/projetoForum/public/server/home.php',
            method: "post",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.then(function (response) {
            if (response.data != 'error') {
                console.log(response.data);
                $scope.publicacoes = response.data;
            } else {
                console.log('deu erro');
            }
        })
    }

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

    $scope.menu = [
        {
            text: 'Inicial',
            opened: false,
            link: 'inicial',
        },
        {
            text: 'Perguntas',
            opened: true,
            link: 'perguntas',
        },
        {
            text: 'Tags',
            opened: false,
            link: 'tags',
        },
        {
            text: 'Usuários',
            opened: false,
            link: 'usuarios',
        },
        {
            text: 'Sem Respostas',
            opened: false,
            link: 'semRespostas',
        }
    ];

    $scope.teste();
});
