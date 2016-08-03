(function() {
  'use strict';

    var module = angular.module("psMovies");

    module.component("accordion", {
      transclude: true,
      template: "<div class='panel-group' ng-transclude></div>",
      controller: function() {
        var model = this;
        var panels = [];

        model.selectPanel = function(panel) {
          for (var i in  panels) {
            if (panel === panels[i])  {
              panels[i].turnOn();
            } else {
              panels[i].turnOff();
            }
          }
        };

        model.addPanel = function(panel) {
          panels.push(panel);
          if(panels.length > 0) {
            panels[0].turnOn();
          }
        };
      }
    });

    module.component("accordionPanel", {
      bindings: {
        "heading": "@"
      },
      require: {
        "parent": "^accordion"
      },
      controllerAs: "model",
      controller: function() {
        var model = this;
        model.selected = false;

        model.$onInit = function() {
          model.parent.addPanel(model);
        };

        model.turnOn = function() {
          model.selected = true;
        };

        model.turnOff = function() {
          model.selected = false;
        };

        model.select = function () {
          model.parent.selectPanel(model);
        };
      },
      transclude: true,
      templateUrl: "ps-movies/accordion.component.html"
    });
}());
