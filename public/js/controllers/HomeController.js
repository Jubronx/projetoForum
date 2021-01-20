forum_app.controller('HomeController', function ($scope, $http, UserModel, $location) {

    $scope.loggedUser = UserModel.isUserLoggedIn();
    $scope.userID = UserModel.getID();

    $scope.callPosts = function() {
        var request = $http({
            url: 'http://localhost/projetoForum/public/server/home.php',
            method: "post",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        request.then(function (response) {
            if (response.data != 'error') {
                console.log(response.data);
                $scope.publicacoes = response.data;
                $scope.myperguntas = $scope.publicacoes;
                for (var pergunta in $scope.myperguntas) {
                    return $scope.myperguntas[pergunta].fk_usuario === $scope.userID;
                }
            } else {
                console.log('deu erro');
            }
        })
    }
    $scope.callPosts();

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

    $scope.meuPerfil = function () {
        $location.path('/profile');
    }

    $scope.openPost = function (post) {
        $scope.postOpened = true;
        $scope.actualPost = post;
    };

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    $scope.menu = [
        {
            text: 'Inicial',
            opened: false,
            link: 'inicial',
        },
        {
            text: 'Minhas perguntas',
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
});
