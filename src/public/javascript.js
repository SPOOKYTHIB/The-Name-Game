var names
var points
var response
var current_name
var name_display

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
  document.getElementById("startButton").hidden = true
  get_names()
  name_display = document.getElementById("name")
  name_display.hidden = false
  
  points = 10
  
  refreshName()
  refreshPoints()
  

  document.getElementById("male").hidden = false

  document.getElementById("female").hidden = false

  document.getElementById("mixed").hidden =

  document.getElementById("points").hidden = false
}

function refreshName() {
  var value = Math.floor((Math.random() * names.length))
  current_name = (JSON.stringify(names[value].name)).replace(/['"]+/g, '')
  name_display.innerText = current_name
}

function refreshPoints() {
  var pointsDiv = document.getElementById("points")
  pointsDiv.innerText = "Your points:" + points
  if (points == 0) {
    alert('You lost.')
  }
  if (points == 20) {
    alert('You won!')
  }
}

function fetchGender(gender) {
  const request = new XMLHttpRequest();
  var requestURL = `https://gender-api.com/get?name=${current_name}&key=jfdhwlgZZwUFWgBXZY`;
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
  