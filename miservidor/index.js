/* Reto-1-Backend-CU2016 
 * 
 * Enero 2016 - HackSpace.la
 * Brayan Cruces Castillo
 */

var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


// Seleccionar localidad al Faker (Spanish)
faker.locale = "es_MX";

/* Usuarios */
var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }

}


/* Posts */
var generarPosts = function(){
  var randomid = faker.random.uuid(); // ID UUID
  var randomName = faker.name.findName(); // Nombre random
  var randomContenido = faker.lorem.sentence(); // Lorem
  var randomFecha = faker.date.past(); // Fechas
  var randomImage = faker.image.image(); // Imagenes
  return {
  	id: randomid,
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomFecha,
    imagen: randomImage
  }

}



app.get('/', function (req, res) {
  res.send('Bienvenido al API hecha en Node.js. Puedes acceder a <b>/amigos</b> o <b>/posts</b> para probar.');
})

app.get('/amigos', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var posts = _.times(cantidad, generarPosts)
  res.json(posts);
})



// Escucha en localhost:3000
app.listen(3000);