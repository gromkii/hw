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

        $scope.showDialog = function(e, index) {
          console.log('clicked', index, $scope.beers[index]);
          $mdDialog.show({
            locals: {
              beer: $scope.beers[index]
            },
            controller: DialogController,
            controllerAs:'dialog',
            // Important note, since I'm not serving these files, I can't use
            // templateUrl! Otherwise, that would be my go-to option over this. -🐰
            template:`
              <md-dialog aria-label="Beer Info">
                <md-dialog-content>
                  Testing, {{beer.name}}
                </md-dialog-content>
                <md-dialog-actions>
                  <md-button ng-click="closeDialog()" class="md-primary">Close Dialog</md-button>
                </md-dialog-actions>
              </md-dialog>

            ` ,
            parent: angular.element(document.body),
            targetEvent: e,
            clickOutsideToClose:true,
          })
        }

        function DialogController($scope, $mdDialog, beer) {
          $scope.beer = beer;

          $scope.hide = function() {
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
    });
