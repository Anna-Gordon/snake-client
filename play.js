const net = require('net');

const { connect } = require('./client');

console.log('Connecting ... ');
let connection = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
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
