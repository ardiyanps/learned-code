// // const { request } = require('http');

// // mengimport modul http
// const http = require('http');

// // event-handler
// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write('<h2>Hello Node.js</h2>');
//     response.end();
// }

// // membuat web server (objek dari kelas http.Server)
// const server = http.createServer()

// // setiap terjadi event 'request', fungsi onRequest() akan dijalankan
// server.on('request', onRequest);

// // mendengarkan/ menunggu terjadinya event pada port 3000
// server.listen(8080);

// #kelas EventEmitter
let event = require('events');
const { EventEmitter } = require('stream');

let obj = new event.EventEmitter();

obj.addListener('mulai', function () {
    console.log('Terjadi event \'mulai\'');
});

obj.addListener('selesai', function () {
    console.log('\nTerjadi event \'selesai\'');
});

obj.emit('mulai');
for (let i = 0; i < 20; i++) {
    process.stdout.write((i+1).toString() + ' ');
}
obj.emit('selesai');


