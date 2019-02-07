var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8889;
var server = net.createServer();
var i = 1
var c = 1
let answer = Math.floor(Math.random() * 21)
server.listen(PORT, HOST);
server.on('connection', (sock) => {

  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
  console.log('ANSWER IS: ' + answer.toString())
  sock.on('data', (data) => {
    console.log('data' + '[' + i + ']' + sock.remoteAddress + ' data: ' + data)
    if (i == 1) {
      sock.write('OK')
    } else if (i >= 2) {
      if (data == answer) {
        sock.write('BINGO')
      } else {
        sock.write('FAIL')
      }
    }
    i++
    c++
  })
  sock.on('close', (data) => {
    console.log('connection is CLOSED: ');
  });


});
// }else if(i == 2){
//    sock.on('data', (data) => {
//       // num = data.parseInt()
//       console.log(num)
//       console.log('Your THB is' + sock.remoteAddress + ' : ' + data)
//       if( num > 0 ){
//          data = data / 31.23
//          sock.write('Your Dollar is' + data.toString())
//       }

//    })
// }