forum_app.controller('RegisterController', function ($scope, $http) {
    $scope.register = function () {
       var request =  $http({
            method: "POST",
            url: "http://localhost/projetoForum/public/server/register.php",
            data: { 
                nome : $scope.nome,  
                email: $scope.email,
                senha: $scope.senha
            
            },
             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        request.then(function (result) {
            console.log(result);
        })
        
    };
});