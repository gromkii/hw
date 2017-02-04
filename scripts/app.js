angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource'])
    .controller('DemoCtrl', function($scope, $http, $resource, $mdDialog) {
        $scope.beers = []; // If empty, show loading status.


        // Do we want to refactor this for the sake of separation of concerns?
        // For scaleability, we might want to put this in a service/facotry

        $http.get('https://api.punkapi.com/v2/beers').then(res => {
          console.log(res.data);
          $scope.beers = res.data;
        });

        $scope.showDialog = function(e, beer) {
          $mdDialog.show({
            locals: {
              beer: beer
            },
            controller: DialogController,
            controllerAs:'dialog',
            templateUrl:'/lib/templates/dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: e,
            clickOutsideToClose:true,
          })
        }

        function DialogController($scope, $mdDialog, beer) {
          $scope.beer = beer;

          $scope.closeDialog = function() {
            $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }

    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    })
