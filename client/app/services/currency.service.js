angular.module('currencyConverterApp')
.service('CurrencyService', ['$http', function($http) {
    this.getExchangeRate = function(from, to, amount) {
        return $http.get(`/api/convert`, {
            params: {
                from: from,
                to: to,
                amount: amount
            }
        });
    };
}]);
