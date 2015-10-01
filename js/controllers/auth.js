(function() {

angular
  .module('bookmark')
  .controller('authController', function($firebaseAuth) {
    var vm = this;
    vm.showForm = false;

    var ref = new Firebase(firebaseURL);
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authData) {
      if (authData) {
        firebaseURL = "https://bookmark-it.firebaseio.com/" + authData.uid
        console.log(firebaseURL)
        console.log(authData);
      } else {
        console.log("Logged out")
      }
    })

    vm.showLogin = function() {
      if (!(vm.showForm))
        vm.title = "Log In"
      vm.showForm = true;
    }
    vm.showSignup = function() {
      vm.title = "Sign Up!"
      vm.showForm = true;
    }

    vm.auth = function(user) {
      if (vm.title == "Log In") {
        vm.login(user);
      } else {
        vm.signup(user);
      }
    }

    vm.signup = function(user) {
      ref.createUser({
        email: user.email,
        password: user.password
      }, function(error, userData) {
        if (error) {
          console.log("Signup failed:", error)
        } else {
          console.log("logged in", userData.uid)
          vm.login(user)
        }
      })
    }

    vm.login = function(user) {
      ref.authWithPassword({
            email: user.email,
            password: user.password
          }, function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Logged in a-ok:", authData)
            }
          }
    )}


    vm.cancel = function() {
      vm.showForm = false;
      vm.user.email = ""
      vm.user.password = ""
    }

  })

})()