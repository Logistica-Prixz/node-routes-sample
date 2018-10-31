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

//----------- Aquí se registran las rutas y todos sus métodos -----------//
// Con la función route creamos un nuevo router para cada llamda
// Tambien se puede utilizar las funciones específicas para cada método
// get y post básicamente
router.route('/landing/:id')
  .get(function (req, res) {
    //Ponemos en la consola el método que estamos llamando, en este caso GET
    console.log('GET')
    //Agregamos un header, se pueden agregar los headers que se quieran utilizando key,value en la función
    res.setHeader('Content-Type', 'application/json')
    //Devolmemos el json con el método y el id que solicitamos en la url
    res.end(JSON.stringify({ method: 'GET', id: req.params.id }))
  })

//----------- Aquí hacemos que el servidor emita al puerto 8080 (O el que querramos) -----------//
server.listen(8080)
