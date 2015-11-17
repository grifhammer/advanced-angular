var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider){
	$routeProvider.when('/', {
		template: '<ul><li ng-repeat="country in countries">{{country.name}}</li></ul>',
		controller: 'countryController'
	}).
	when('/:countryName',{
		template: '<h1>Country detail will go here.</h1>',
		controller: 'countryDetailController'
	}).
	otherwise({
		redirectTo: '/'
	})
});

countryApp.controller('countryController', function($scope, $http){
	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
		console.log($scope.countries)

	});
});

countryApp.controller('countryDetailController', function($scope, $routeParams){
	console.log($routeParams);
});