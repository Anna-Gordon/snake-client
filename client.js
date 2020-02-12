const net = require('net');

const moveArr = ["Move: down", "Move: right", "Move: up", "Move: left"];
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AnG');
  });

  // let whichMovementIndex = 0;
  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * moveArr.length);
    conn.write(moveArr[randomIndex]);
    // if (whichMovementIndex === moveArr.length) {
    //   whichMovementIndex = 0;
    // }
  }, 500);
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = {connect};