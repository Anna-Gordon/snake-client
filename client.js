const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    IP: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AnG');
  });
  
  setInterval( () => {
    conn.write('\r Say: GO!');
  }, 5000)

  setTimeout( () => {
    conn.write('\r Say: YEE!');
  }, 8000)
  
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

/**  ARRAY OF MOVEMENTS
const moveArr = ["Move: down", "Move: right", "Move: up", "Move: left"];
// let whichMovementIndex = 0;
setInterval(() => {
  let randomIndex = Math.floor(Math.random() * moveArr.length);
  conn.write(moveArr[randomIndex]);
  // if (whichMovementIndex === moveArr.length) {
  //   whichMovementIndex = 0;
  // }
}, 500);
*/
module.exports = {connect};