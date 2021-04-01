var names
var points
var response
var current_name
var name_display
var api_key = "Enter your API key here"

function get_names() {
    var request = new XMLHttpRequest();
    var requestURL = '/get_names';
    request.open('GET', requestURL);
    request.responseType  = 'json';
    request.send();
    request.onload = function() {
        names = request.response;
    }
}

function startGame() {
  document.getElementById("start").hidden = true
  get_names()
  name_display = document.getElementById("name")
  name_display.hidden = false
  
  points = 10
  
  refreshName()
  refreshPoints()
  
  document.getElementById("retry").hidden = true
  document.getElementById("male").hidden = false
  document.getElementById("female").hidden = false
  document.getElementById("mixed").hidden = false
  document.getElementById("points").hidden = false
}

function refreshName() {
  var value = Math.floor((Math.random() * names.length))
  current_name = (JSON.stringify(names[value].name)).replace(/['"]+/g, '')
  name_display.innerText = current_name
}

function refreshPoints() {
  var pointsDiv = document.getElementById("points")
  pointsDiv.innerText = "Your points: " + points
  if (points == 0) {
    pointsDiv.innerText = "You lost."
    document.getElementById("male").hidden = true
    document.getElementById("female").hidden = true
    document.getElementById("mixed").hidden = true
    document.getElementById("retry").hidden = false
  }
  if (points == 20) {
    pointsDiv.innerText = "You won! Wanna keep on going?"
    playAudio("./ding.mp3")
  }
}

function fetchGender(gender) {
  const request = new XMLHttpRequest();
  var requestURL = `https://gender-api.com/get?name=${current_name}&key=${api_key}`;
    request.open('GET', requestURL);
    request.responseType  = 'json';
    request.send();
    request.onload = function() {
        response = request.response;
        console.log(response)
        if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') <= 85 && gender != "mixed") {
          points --
        } else if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') <= 85 && gender == "mixed") {
          points ++
        } else if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') > 85 && (JSON.stringify(response.gender)).replace(/['"]+/g, '') == gender) {
          points ++
        } else {
          points --
        }
        refreshPoints()
        refreshName()
    }
}

function playAudio(file_url) {
  new Audio(file_url).play();
}