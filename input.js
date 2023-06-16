const { log } = require("console");
let connection;

const setupInput = function(conn) {
  connection = conn;
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

  } else if (data === '\u001B\u005B\u0041') { // Arrow Up
    connection.write("Move: up");
    connection.write("Say: Faster!");
    //console.log('Move Up');

  } else if (data === '\u001B\u005B\u0044') { // Arrow Left
    connection.write("Move: left");
    connection.write("Say: Cookies!");
    //console.log('Move Left');

  } else if (data === '\u001B\u005B\u0043') { // Arrow Right 
    connection.write("Move: right");
    //connection.write("Say: My pressures!");
    //console.log('Move Right');

  } else if (data === '\u001B[B') { // Arrow Down
    connection.write("Move: down");
    //connection.write("Say: Got it!");
    //console.log('Move Down');
  }
};

module.exports = { setupInput };