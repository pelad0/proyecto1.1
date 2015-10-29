angular.module('starter.services',[])


.factory('Posiciones', function () {//inicio services posiciones
    var posiciones = [{
      name: 'p1',
      lat: -33.30222020000,
      lng: -66.33679760000,
      message: 'Usted esta aquí.',
      focus: true,
      draggable: true
    }];
    
    
    return {
      all: function () {
        return posiciones;
      },
      remove: function (mark) {
        posiciones.splice(posiciones.indexOf(mark), 1);
      },
      get: function (markId) {
        for (var i = 0; i < posiciones.length; i++) {
          if (posiciones[i].id === parseInt(markId)) {
            return posiciones[i];
          }
        }
        return null;
      }
    };
  });
  
  
  //fin services posiciones
