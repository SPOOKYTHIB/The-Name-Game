const { Router } = require("express");

var names
var points
var response

function get_names() {
    var request = new XMLHttpRequest();
    var requestURL = '/get_names';
    request.open('GET', requestURL);
    request.responseType  = 'json';
    request.send();
    request.onload = function() {
        names = request.response;
        ///printNames(names);
    }
}

function printNames(names) {
    var name_space = document.getElementById("displayRawNames")
    var value = Math.floor((Math.random() * names.length))
    name_space.innerText = (JSON.stringify(names[value].name)).trim('"')
  }

function startGame() {
  get_names()
  var divToFill = document.getElementById("name")
  divToFill.hidden = false
  var value = Math.floor((Math.random() * names.length))
  divToFill.innerText = (JSON.stringify(names[value].name)).trim('"')

  points = 10
  refreshPoints()

  document.getElementById("startButton").hidden = true
  document.getElementById("male").hidden = false
  document.getElementById("female").hidden = false
}

function refreshPoints() {
  var pointsDiv = document.getElementById("points")
  pointsDiv.innerText = points
}

function fetchGender() {
  const request = new XMLHttpRequest();
  var requestURL = 'https://gender-api.com/get?name=thibaut&key=jfdhwlgZZwUFWgBXZY';
    request.open('GET', requestURL);
    request.responseType  = 'json';
    request.send();
    request.onload = function() {
        response = request.response;
        document.getElementById("name").innerText = JSON.stringify(response.gender)
        ///printNames(names);
    }
}

module.exports = get_names()
  