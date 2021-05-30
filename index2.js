var player = [];
var pc = [];
var pressed;
var game = 1;
var level = 1;
var color = ["green", "red", "yellow", "blue"];

function colorToValue(id) {
  if (id == "green") {
    return 0;
  }
  else if (id == "red") {
    return 1;
  }
  else if (id == "yellow") {
    return 2;
  }
  else if(id == "blue") {
    return 3;
  }
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

function pressButton(value) {
  var toPress = $(".btn");
  toPress[value].classList.add("pressed");
  setTimeout(function() {
    toPress[value].classList.remove("pressed");
  }, 200);
}

function pcGame() {
  var pcPlay = Math.floor(Math.random()*4);
  pc.push(pcPlay);
  pressButton(pcPlay);
  sound(pcPlay);
  console.log(pc);
}

function playerGame() {
  $("button").off().on("click", function() {
    pressed = colorToValue(this.id);
    pressButton(pressed);
    sound(pressed);
    player.push(pressed);
  });
    console.log(player);
}

$(document).on("keydown", function() {
  j=0;

    if(pc[j] === player[j]) {
      console.log("good");
      j++;
    }
    else {
      console.log("bad");
      game = 0;
    }
});
