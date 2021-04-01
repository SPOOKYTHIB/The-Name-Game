var names
var points
var response
var current_name
var name_display
var api_key = "Enter your API key here"

// Cette fonction est liée à celle de router.js et permet d'établir une connexion à la base de données, et de récupérer son contenu

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

// Cette fonction est appelée lorsque les boutons "Play" ou "Retry" sont pressés

function startGame() {
  document.getElementById("start").hidden = true
  get_names()
  name_display = document.getElementById("name")
  name_display.hidden = false
  
  points = 10
  
  // L'affichage des noms et des points est initié ici
  refreshName()
  refreshPoints()

  // Les boutons nécessaires au fonctionnement du jeu apparaissent ici. Les boutons Play et Retry sont cachés
  
  document.getElementById("retry").hidden = true
  document.getElementById("male").hidden = false
  document.getElementById("female").hidden = false
  document.getElementById("mixed").hidden = false
  document.getElementById("points").hidden = false
}

// Cette fonction sélectionne un nombre aléatoire entre 0 et 300. L'identifiant issu de cette sélection aléatoire est sélectionné depuis la base de données, puis le nom correspondant est affiché

function refreshName() {
  var value = Math.floor((Math.random() * names.length+1))
  current_name = (JSON.stringify(names[value].name)).replace(/['"]+/g, '')
  name_display.innerText = current_name
}

// Cette fonction est appelée à chaque appui sur un bouton afin d'actualiser l'affichage des points

function refreshPoints() {
  var pointsDiv = document.getElementById("points")
  pointsDiv.innerText = "Your points: " + points
  if (points == 0) {
    pointsDiv.innerText = "You lost."
    // Lorsque le joueur perd, les boutons sont masqués pour laisser place à un bouton Retry
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
        // Si le prénom est considéré comme mixte et que le joueur appuie sur un autre bouton, sa réponse est refusée.
        if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') <= 85 && gender != "mixed") {
          points --
        } 
        // Si le prénom est considéré comme mixte et que le joueur appuie sur le bouton "mixte", sa réponse est acceptée.
        else if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') <= 85 && gender == "mixed") {
          points ++
        }
        // Si le prénom n'est pas considéré comme mixte et que le joueur appuie sur le bouton correspondant au genre indiqué dans la réponse de l'API, sa réponse est acceptée.
        else if ((JSON.stringify(response.accuracy)).replace(/['"]+/g, '') > 85 && (JSON.stringify(response.gender)).replace(/['"]+/g, '') == gender) {
          points ++
        } 
        // Si le prénom n'est pas considéré comme mixte et que le joueur n'appuie pas sur le bouton correspondant au genre indiqué dans la réponse de l'API, sa réponse est refusée.
        else {
          points --
        }
        refreshPoints()
        refreshName()
    }
}

function playAudio(file_url) {
  new Audio(file_url).play();
}