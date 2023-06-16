# Snake Client Project

# 🐍 Snek.js [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![snekjs on NPM](https://img.shields.io/npm/v/snekjs.svg?color=green&label=snekjs)](https://www.npmjs.com/package/snekjs)

A terminal-based Snake implementation written in JavaScript (Node.js).

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

![snek.gif](https://raw.githubusercontent.com/taniarascia/snek/master/snek.gif)

![Screenshot of the game](https://github.com/anastasiarez/snake-client/blob/main/Screenshot.jpg)


Before you can run this client, you will need to be running the server side which you can download and install from here:


## Installation - Server Side

### Clone from repository 

```bash
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer

# install and run via npm
npm install
npm run play
```

## Instructions - Client Side

To play the game, one needs to implement a game client. An example solution code for the client can be [https://github.com/anastasiarez/snake-client].


## Getting Started

- Run the development snake client using the `node play.js` command.
- Use arrow up, down, left, right to control the snake
- If you idle you are dead
- To leave the game press Ctrl+C

## Acknowledgements

This project was not built from scratch. It was inspired and started from [snek](https://github.com/taniarascia/snek) ([blog post](https://www.taniarascia.com/snake-game-in-javascript/)). [Tania Rascia](https://www.taniarascia.com) is the original author.

## License

This project is open source and available under the [MIT License](LICENSE).
