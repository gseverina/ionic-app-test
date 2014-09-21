angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Family', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var family = [
    { id: 0, name: 'Dad', age: 40},
    { id: 1, name: 'Mom', age: 30},
    { id: 2, name: 'Jane M.', age: 20},
    { id: 3, name: 'John M.', age: 10}
  ];

  return {
    all: function() {
      return family;
    },
    get: function(memberId) {
      // Simple index lookup
      return family[memberId];
    }
  }
});
