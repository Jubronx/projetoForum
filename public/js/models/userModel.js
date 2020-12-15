forum_app.service('user', function () {
    var useremail;
    var loggedin = false;
    var id;

    this.setEmail = function (email) {
        useremail = email;
    };
    this.getEmail = function () {
        return useremail;
    };

    this.setID = function (userID) {
        id = userID;
    };
    this.getID = function () {
        return id;
    };

    this.isUserLoggedIn = function () {
        return loggedin;
    };
    this.userLoggedIn = function () {
        loggedin = true;
    };
})