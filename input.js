const { connect } = require('./client');
let connection = connect();

const handleUserInput = (data) => {
  if ( data === 'i') {
    connection.write('Move: up'); 
  }
  if ( data === 'j') {
    connection.write('Move: left'); 
  }
  if ( data === 'l') {
    connection.write('Move: right'); 
  }
  if ( data === 'k') {
    connection.write('Move: down'); 
  }

  if (data === '\\q\n') {
    connection.end();
    process.exit();
  } 

  connection.write(data);
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

setupInput();

module.exports = { setupInput };