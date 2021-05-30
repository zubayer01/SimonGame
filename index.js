var pcPlay = [];
var playerPlay = [];
var level = 1;
var game = 1;
color = ["green", "red", "yellow", "blue"];

function colorToValue(idName) {
  if(idName == "green") {
    return 0;
  }
  else if (idName == "red") {
    return 1;
  }
  else if (idName == "yellow") {
    return 2;
  }
  else if (idName == "blue") {
    return 3;
  }
}

function pressButton(value) {
  var toPress = $(".btn");
  toPress[value].classList.add("pressed");
  setTimeout(function() {
    toPress[value].classList.remove("pressed");
  }, 200);
}

function sound(value) {
  switch (value) {
    case 0:
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case 1:
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case 2:
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case 3:
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    default: console.log(value);
  }
}

function conditionCheck(val1,val2) {
  if (val1 !== val2) {
    game = 0;
    level = 1;
    playerPlay = [];
    pcPlay = [];
    $("#level-title").text("You made a Mistake");
  } else {
    game = 1;
    level++;
    $("#level-title").text("Level" + level);
  }
}

function pcgame () {
  var pc = Math.floor(Math.random()*4);
  pressButton(pc);
  sound(pc);
  pcPlay.push(pc);
  console.log(pcPlay);
}

function playergame() {
  var input;
  $(".btn").on("click", function() {
    input = colorToValue(this.id);
    console.log(input);
  });
    pressButton(input);
    sound(input);
    playerPlay.push(input);
    console.log(playerPlay);
  }

function GameStart() {
  game = 1;
  while (game === 1) {
    pcgame();
    playerPlay = [];
    for (var i=0; i<pcPlay.length; i++) {
      playergame();
      conditionCheck(pcPlay[i], playerPlay[i]);
      if (game === 0) {
        break;
      }
    }
  }
}

$(document).on("keydown", GameStart);
