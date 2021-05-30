var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
  level++;
  $("h1").html("level " + level.toString());
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  tap(randomChosenColour);
  tapSound(randomChosenColour);
  console.log(gamePattern);
}

function playerPlay(userChosenColor) {
  userClickedPattern.push(userChosenColor);
  tap(userChosenColor);
  tapSound(userChosenColor);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
}

function tap(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function tapSound(color) {
  var soundFile = "sounds/" + color + ".mp3";
  var sound = new Audio(soundFile);
  sound.play();
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
    console.log("wrong");
    gamePattern = [];
    userClickedPattern = [];
    $("h1").html("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
      tapSound("wrong");
    }, 500);
    level = 0;
  }
  else if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("right");
  }
}

$(document).on("keydown", nextSequence);

$(".btn").off().click(function() {
  var userChosenColor = this.id;
  playerPlay(userChosenColor);
  if ((userClickedPattern.length === gamePattern.length) && gamePattern.length >= 1) {
    setTimeout(function () {
      nextSequence();
      userClickedPattern = [];
    }, 1000);
  }
});
