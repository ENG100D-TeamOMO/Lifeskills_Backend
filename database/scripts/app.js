var app = angular.module("ngtableApp", ["firebase"]);

app.controller("ngtableCtrl", function ($scope, $http) {
  // Bind Sign in button.
  signInButton.addEventListener('click', function() {
  	var provider = new firebase.auth.GoogleAuthProvider();
  	firebase.auth().signInWithPopup(provider);
  });

  // Bind Sign out button.
  signOutButton.addEventListener('click', function() {
  	firebase.auth().signOut();
  });
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //get JSON
    $http.get("https://all-about-kids-8823d.firebaseio.com/score.json")
    .then(function(response) {
        $scope.users = response.data;
        console.log($scope.users)
    });
    
    $scope.propertyName = 'score';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
    	console.log("clicked");
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    
});