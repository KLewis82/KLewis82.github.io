/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){console.log('hi mom');
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  //*These are magic numbers so to help understand make the code easier to understand we pushed the object to called by name.
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
   };
  // Game Item Objects
  //*Sets up the objects we are to call/use later on.
  var walker = {
    x: 0,
    y: 0, 
    xSpeed: 0,
    ySpeed: 0 
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 //*Helps with functionality
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.  (Youre on todo 2(c))
  */ 
 //* These events/ handlers were ment to call upon events wether that means when we press the key or release the key.
 //* Each of these are considered event that can only function when called upon.
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.xSpeed = -5;
      console.log("left pressed");
    } else if (event.which === KEY.UP){
      walker.ySpeed = -5
      console.log("up pressed");
    } else if (event.which === KEY.RIGHT){
      walker.xSpeed = 5;
      console.log("right pressed");
    } else if (event.which === KEY.DOWN){
      walker.ySpeed = 5;
      console.log("down pressed");
    }
    console.log(walker);
  }
  function handleKeyUp(event){
    if (event.which === KEY.LEFT){
      walker.xSpeed = 0;
      console.log("left released");
    } else if (event.which === KEY.UP){
      walker.ySpeed = 0;
      console.log("up released");
    } else if (event.which === KEY.RIGHT){
      walker.xSpeed = 0;
      console.log("right released");
    } else if (event.which === KEY.DOWN){
      walker.ySpeed = 0;
      console.log("down released");
    }
    console.log(walker);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //* These functions are where the brick of the code pieces go to that way the code only needs to use the calling of these functions.
  //*Im not very good at understanding helper functions but I try.
  function repositionGameItem() {
    walker.x += walker.xSpeed;
    walker.y += walker.ySpeed;
  }
  function wallCollision() {
    $("#board").width();
    $("#board").height();
    if (walker.x + $("#walker").width() > $("#board").width()) {  //Right
     walker.x = walker.x - walker.xSpeed;
    } 
    if (walker.x < 0){   //Left
      walker.x = walker.x - walker.xSpeed;
    }
    if (walker.y + $("#walker").width() >  $("#board").width()) {  //Down
      walker.y = walker.y - walker.ySpeed;
    }
    if (walker.y < 0){ // Up
      walker.y = walker.y - walker.ySpeed;
    }
  }
  function redrawGameItem() {
    $("#walker").css("top", walker.y);
    $("#walker").css("left", walker.x);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
