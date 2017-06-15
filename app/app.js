/**
 * Created by steven on 6/14/17.
 */
var app = angular.module('app', []);

app.controller('candiesController', candiesController);

function candiesController(){

    this.input = {
        name: '',
        candy: ''
    };

    this.list = [];

    this.add = function() {
      this.list.push(angular.copy(this.input));
    };

    this.remove = function (index) {
        this.list.splice(index, 1);
    };
};

