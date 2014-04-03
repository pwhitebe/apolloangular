'use strict';

/* Filters */

angular.module('apolloAppFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
