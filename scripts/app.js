angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource'])
    .controller('DemoCtrl', function($scope, $http, $resource) {
        var vm = this;
        
        // Do we want to refactor this for the sake of separation of concerns?
        // For scaleability, we might want to put this in a service/facotry

        $http.get('https://api.punkapi.com/v2/beers').then(res => {
          var vm.beers = res.data;
        });

    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });
