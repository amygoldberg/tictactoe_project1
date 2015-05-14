# TicTacToe

## Objectives
- Create and use index.html, style.css and tictactoe2.js files to create a working tictactoe game
- User stories and how users play
- Create git repo, commit project at various times to repo

## Instructions

1. Open app using link: ***Github repo URL?
2. Start the game by first player choosing a spot on the board - first player becomes 'X'
3. Take turns playing until one user wins or until there is a tie game (will be alerted in either case)
4. Restart game at any time (mid-game, after a tie, or when one player has won) by pressing the 'New Game' button

## Overview

I was tasked with creating a two player Tic Tac Toe functional game, which allows users to switch turns, restart the game at any point, and keep track of when a user wins in any scenario.

## Step 1: Create User Stories

See userstories.txt
Wireframes (drawn on whiteboards)

## Step 2: Create Project folder and open index.html, README.md, userstories.txt, style.css and tictactoe2.js files within the folder

## Step 3: Create index.html file

- Link the stylesheet to my style.css file
<link rel="stylesheet" href="style.css">

- Add jQuery source
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

- Add my javascript file source and type
<script src="js/tictactoe2.js" type="text/javascript"></script>

- Create boardgame using div classes and div id's - 3 rows with 3 squares in each row

## Step 4: Create style.css

- Render the gameboard on my webpage using css styling

## Step 5: Create tictactoe2.js javascript file with jQuery and javascript code

- Enable $(document).ready(function() {} and place code within {} so the whole document will be read before anything is executed

- Declare variables
  var player = 0;
  var players = ['X', 'O'];
  var squareArray = [];
  var count = 0;
  var gameOver = false;

- Create a jQuery function that is called when a user clicks on a square on the gameboard, if the square is empty the function will put the current players variable into the square ('X' or 'O')
  - Increase the count (keep track of how many squares have been filled in on the gameboard)

  $('.square').click(function() {
    squareArray=[];
    if ($(this).html() === '') {
      $(this).html(players[player]);

      count++;

      $('.square').each(function() {
        squareArray.push($(this).html());
      });

      console.log(squareArray);

- Create a getWinner function which takes two arguments and will evaluate each scenario either player could win the game. Call the getWinner function to display a message when a player wins (or when there is a tie game)


  var getWinner = function(square, player) {
    var win;

    if (square[0] === player && square[1] === player && square[2] === player) {
      win = true;
    }

    return win;
  };


    if (getWinner(squareArray, players[player])) {

        $('#winner').html(players[player] + ' wins!');
        $('#winner').show();

- Switch players if there hasn't been a winner or a draw yet and loop through the click function again on the current player
  player = 1 - player;

- Create and call a restart game button function. When a player wins a game or there is a tie game (or at any point throughout a game) you can clear the board (and the gameboard array) to start a new game.

  var restart = function() {
    $('.square').text("");
    count = 0;
    $('#tie').hide();
    $('#winner').hide();
  };

  $('#new-game').on('click', function() {
    restart();
  });




