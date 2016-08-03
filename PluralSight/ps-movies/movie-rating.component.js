(function() {
  'use strict';

  var module = angular.module("psMovies");

  module.component("movieRating", {
    templateUrl: "/ps-movies/movie-rating.component.html",
    controllerAs: "model",
    bindings: {
      value: "<"
    },
    transclude: true,
    controller: function() {
      var model = this;

      model.$onInit = function() {
        model.entries = new Array(model.value);
      };

      model.$onChanges = function() {
        model.entries = new Array(model.value);
      };
    }

  });
}());
