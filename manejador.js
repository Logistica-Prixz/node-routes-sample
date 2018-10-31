//La notación (p1,p2)=>{} es lo mismo que function(p1,p2)=>{}
//También se puede utilizar sin parétesis cuando es un sólo parámetro
//ej p1=>{}
var matriz = {}
matriz['index.js'] = 'Estás en la página principal'
matriz['robots.txt'] = 'User-agent: *\n\rDisallow: /'
matriz['humans.txt'] = 'Este es un ejemplo de humans en html'
exports.filtrar = (req,res)=>{
  var page = req.params.page
  console.log("Llamando a",page);
  if(matriz[page] != null){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(matriz[page])
  }
  else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>No existe esta página</h1>'+
    '<p>Intenta con cualquiera de las siguientes:'+
    '<ul><li><a href="/index.js" alt="index">index</a></li>'+
    '<li><a href="/robots.txt" alt="robots">robots</a></li>'+
    '<li><a href="/humans.txt" alt="humans">humans</a></li>')
  }
}
