angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MapaCtrl', function($scope, Posiciones) {
  $scope.puntero=1;
  var objMarkers={};
  var pos = Posiciones.all();
  
  for(var i = 0; i < pos.length; i++){
    var p=pos[i];
    objMarkers[p.name]=p;//
  }
  $scope.anterior=function(){
    if($scope.puntero > 1){
      $scope.puntero--;
    }
  };
  $scope.sgte=function(){
    if($scope.puntero < 3){
      $scope.puntero++;
    }
  };
  angular.extend($scope,{
    center:{
      lat:-33.30222020000,
      lng: -66.33679760000,
      zoom:16
    },
    markers: objMarkers,
    
    default:{
      scrollWheelZoom: false
    }
  });
})//fin MapaCtrl

.factory('Posiciones', function () {//inicio services posiciones
  var posiciones=[{
    name:'p1',
    lat: -33.30222020000,
    lng: -66.33679760000,
    message: 'Usted esta aquí.',
    focus:true,
    draggable:true
  }];
  return{
    all: function(){
      return posiciones;
    },
    remove: function(mark){
      posiciones.splice(posiciones.indexOf(mark), 1);
    },
    get: function(markId){
      for(var i = 0; i< posiciones.length; i++){
        if(posiciones[i].id === parseInt(markId)){
          return posiciones[i];
        }
      }
      return null;
    }
  };
})//fin services posiciones

.controller('PlaylistCtrl', function($scope, $stateParams) {
});


 