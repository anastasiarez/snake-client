const conn = require("./client.js");

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') { // Ctrl+C - terminate the game
    process.exit();

  } else if (data === '\u001B\u005B\u0041') {// Arrow Up
    conn.write("Move: up");

  } else if (data === '\u001B\u005B\u0044') { // Arrow Left
    conn.write("Move: left");

  } else if (data === '\u001B\u005B\u0043') { // Arrow Right 
    conn.write("Move: right");

  } else if (data === '\u001B[B') { // Arrow Down
    conn.write("Move: down");
  }
};

setupInput();