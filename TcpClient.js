var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
let i = 0
let count
client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5735512036');
});
client.on('data', function(data) {
console.log('DATA: ' + data);
    i++
    client.write(i.toString())
    console.log('input: ' + i.toString())
    // if(data == "OK"){
     
    // }
    if(data == "BINGO"){
        client.destroy()
    }
    else if( data == "WRONG"){
        count++
    }else if( count = 5 ){

        client.destroy()
    }

});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed')
});