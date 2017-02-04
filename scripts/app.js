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
            // templateUrl (XHR stuff)! Otherwise, that would be my go-to option over this. -🐰

            template:`
              <md-dialog aria-label="More Info for {{beer.name}}">
                <md-dialog-content layout="row">
                    <div flex>
                      <h2>{{beer.name}}</h2>
                      <p>
                       {{beer.description}}
                      </p>

                      <p>Brewer's Tips: {{beer.brewers_tips}}
                    </div>
                    <div flex>
                      <h2>Ingredients</h2>
                      <md-list>
                        <md-list-item>
                        <div>
                          <h4>Malt</h4>
                          <ul>
                            <li ng-repeat="malt in beer.ingredients.malt track by $index">
                              {{malt.name}}
                            </li>
                          </ul>
                        </div>

                        </md-list-item>

                        <md-list-item>
                        <div>
                          <h4>Hops</h4>
                          <ul>
                            <li ng-repeat="hop in beer.ingredients.hops track by $index">
                              {{hop.name}}
                            </li>
                          </ul>
                        </div>

                        </md-list-item>
                        <md-list-item>
                        <div>
                          <h4>Yeast</h4>
                          <ul>
                            <li ng-repeat="yeast in beer.ingredients.yeast track by $index">
                              {{yeast.name}}
                            </li>
                          </ul>
                        </div>

                        </md-list-item>
                      </md-list>
                    </div>
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
    });
