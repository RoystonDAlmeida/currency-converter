import { currencies } from "../currencies.js";

angular.module('currencyConverterApp')
.controller('CurrencyConverterController', ['$scope', 'CurrencyService', function($scope, CurrencyService) {
    const vm = this;

    vm.amount = 1; // Default amount
    vm.fromCurrency = currencies[0].code; // Default source currency (first in the list)
    vm.toCurrency = currencies[1].code; // Default target currency (second in the list)
    vm.convertedAmount = 0;

    // List of currencies with abbreviations, full names, and flags
    vm.currencies = currencies;

    // Convert function
    vm.convert = function() {
        CurrencyService.getExchangeRate(vm.fromCurrency, vm.toCurrency, vm.amount).then(function(response) {
            vm.convertedAmount = response.data.convertedAmount;
        }, function(error) {
            console.error("Error fetching exchange rate:", error);
        });
    };
}]);