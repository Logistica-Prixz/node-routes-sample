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
    console.log(req.params.id);
    //Agregamos un header, se pueden agregar los headers que se quieran utilizando key,value en la función
    res.setHeader('Content-Type', 'application/json')
    //Devolmemos el json con el método y el id que solicitamos en la url
    res.end(JSON.stringify({ method: 'GET', id: req.params.id }))
  })
  // Esto es lo mismo pero usando POST
  .post(function (req, res) {
    //... en este caso POST
    console.log('POST')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ method: 'POST', id: req.params.id }))
  })
  // Esto es lo mismo pero usando cualquier método (DELETE, PUT, HEAD, OPTIONS, etc)
  // es sobreescrito si se agregan métodos como los de arriba
  .all(function (req,res){
    //... en este caso ALL (Es decir que se llamó la ruta con un método que no está definido y lo hace por default)
    console.log('ALL')
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ method: 'ALL', id: req.params.id }))
  })

//----------- Aquí vamos a registrar otra ruta, pero esta vez utilizando el módulo manejador.js -----------//
var manejador = require('./manejador.js')
var page = router.route('/:page')
//Sólo vamos a utilizar el método get
page.get(function (req,res){
  //Llamamos la función filtrar() de manejador
  manejador.filtrar(req,res)
})

//----------- Aquí hacemos que el servidor emita al puerto 8080 (O el que querramos) -----------//
server.listen(8080)
