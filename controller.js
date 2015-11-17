var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: "country-list.html",
		controller: 'countryController'
	}).
	when('/:countryName',{
		templateUrl: "country-detail.html",
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
	$scope.name = $routeParams.countryName;
});