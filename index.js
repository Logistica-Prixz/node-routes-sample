var http = require('http')
// Router es el módulo de Node para generar rutas de servidor
// No es nativo porque lo extrajeron de un proyecto llamado express.js
// Pero es parte del core de node mantenido por NPM, no es de terceros
var Router = require('router')

// Crea la ruta y el servidor
var router = new Router()
// Aquí se crea el servidor
var server = http.createServer(function onRequest(req, res) {
  router(req, res, err=>{
    console.log(err)
  })
})

//----------- Aquí hacemos que el servidor emita al puerto 8080 (O el que querramos) -----------//
server.listen(8080)
