// establishes a connection with the game server

const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Client successfully connected");
    console.log("Name: RAM");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
const conn = connect(); // Assign the connection object to a variable

module.exports = conn; // Export the connection object



  //REFACTOR

/*  conn.on("connect", () => {
    console.log("Client successfully connected");
    console.log("Name: RAM");
    const movements = ["up", "down", "left", "right", "up"];
    let delay = 1000;

    movements.forEach((movement) => {
      setTimeout(() => {
        conn.write(`Move: ${movement}`);
      }, delay);
      delay += 1000;
    });
  });
};
*/
