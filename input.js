const { connect } = require('./client');

let connection; 


const handleUserInput = function(data) {
  if ( data === 'w') {
    connection.write('Move: up'); 
  }
  if ( data === 'a') {
    connection.write('Move: left'); 
  }
  if ( data === 'd') {
    connection.write('Move: right'); 
  }
  if ( data === 's') {
    connection.write('Move: down'); 
  }

  if (data === '\\q\n') {
    connection.end();
    process.exit();
  } 

  connection.write(data);
}




const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

setupInput(connection);

module.exports = { setupInput };