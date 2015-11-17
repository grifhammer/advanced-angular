var countryApp = angular.module('countryApp', []);

countryApp.controller('countryController', function($scope, $http){
	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
		
	});
})