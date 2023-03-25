var http = require('http'),
fs = require('fs');

var html = fs.readFileSync('./index.html');

http.createServer(function(solicitud, respuesta){
    var enlace = solicitud.url;

    if (enlace == '/contacto.html'){
        html = fs.readFileSync('./contacto.html');
    } else if (enlace == '/nosotros.html'){
        html = fs.readFileSync('./nosotros.html');
    } else if (enlace == '/index.html'){
        html = fs.readFileSync('./index.html');
    }
    respuesta.write(html);
    respuesta.end();

}).listen(8081);