angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

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
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })



  .controller('MapaCtrl', function ($scope, Posiciones) {
    //     $scope.puntero = 1;
    var objMarkers = {};
    var pos = Posiciones.all();

    for (var i = 0; i < pos.length; i++) {
      var p = pos[i];
      objMarkers[p.name] = p;//
    }

    angular.extend($scope, {
      center: {
        lat: -33.30222020000,
        lng: -66.33679760000,
        zoom: 16
      },
      markers: objMarkers,

      default: {
        scrollWheelZoom: false
      }
    });
  })//fin MapaCtrl

  

  .controller('DenunciasCtrl', function ($scope, $http) {
    var posiciones = {};
    $scope.markers = posiciones;
    $scope.center = {
      lat: 18.486057499999998,
      lng: -69.9312117,
      zoom: 12
    };
    $scope.default = {
      scrollWheelZoom: false
    }

    $http.post('http://demo2.avec.com.do/denuncia').success(function (data) {
      //console.log(data);
      for (var i = 0; i < data.length; i++) {

        if (!isNaN(parseFloat(data[i].pos.split(',')[0])) && !isNaN(parseFloat(data[i].pos.split(',')[1]))) {
          posiciones["marker" + i] = {
            //name: data[i]._id,
            lat: parseFloat(data[i].pos.split(',')[0]),
            lng: parseFloat(data[i].pos.split(',')[1]),
            message: data[i].descripcion,
            focus: false,
            draggable: false
          };
        }
      }
      console.log(posiciones)
      $scope.markers = angular.copy(posiciones);
    })
    
    /* angular.extend($scope, {
         center: {
           lat: 18.486057499999998,
           lng: -69.9312117,
           zoom: 16
         },
         markers: posiciones,
         default: {
           scrollWheelZoom: false
         }
     });*/
  })

  .controller('RegistroCtrl', function ($scope, user) {

    $scope.registro = function (us, pass, pass2, em) {

      user.esString(us);
      user.passOk(pass, pass2);
      user.emailOk(em);
      console.log(us);
      console.log(pass);
      console.log(pass2);
      console.log(em);

    }


  });


 

    