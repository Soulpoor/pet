import http from 'http';
import { AddressInfo } from 'net';
import app from './main';

const server = http.createServer(app);

const port = '8000';

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
}

function onListening() {
    const addr: AddressInfo = server.address() as AddressInfo;
    console.log('Listening on ' + addr?.port);
}