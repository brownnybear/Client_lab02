import express from 'express'
import bodyParser from 'body-parser'

const server = express()
const port = 3000;
const cors = require('cors')
const fs = require("fs");

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))


const app = server.listen(port, function (err, result) {
    console.log('running in port http://localhost:' + port)
})


server.get('/2-1', function (req, res) {
    const data = fs.readFileSync('./text.txt', 'utf8');
    console.log(data);
    console.log("Finished");
    res.send('<h1>Hello Node.js</h1>');
});


server.get('/2-2', function (req, res) {
    fs.readFile('text.txt', (err, data) => {
        if (err)
            return console.error(err);
        console.log(data.toString());
    });
    console.log("Finished");
    res.send('<h1>Hello Node.js</h1>');
});

server.get('/3-1', function (req, res) {
    console.log('a: ')
let stdin = process.openStdin()
stdin.addListener("data",  (a) => {
   // console.log(a.toString().trim())
   console.log('b: ')
   stdin.addListener("data", (b) => {
       console.log(a*b)
       stdin.destroy()
   })
})

});

server.post('/newpatient', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var data = req.body;
    console.log(data)
    res.send(data)
});

export default server