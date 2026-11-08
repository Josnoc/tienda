'use strict'
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/users' });
const { model } = require('mongoose');
module.exports = function() {
    //USERS
    //Agregar USuario
    router.post('/users', usersController.add);
    //Mostar Usuarios
    router.get('/users', usersController.list);
    //Mostrar usuario  a través de su id
    router.get('/users/:id', usersController.show);
    //Actualizar usuario
    router.put('/users/:id', usersController.update);
    //Eliminar usuario
    router.delete('/users/:id', usersController.delete);
    //SUbir imagen



    //Añadir producto
    router.post('/products', productsController.add);
    //Actualizar Producto
    router.put('/products/:id', productsController.update);
    //MostrarProductos
    router.get('/products', productsController.list);
    //EliminarProducto
    router.delete('/products/:id', productsController.delete);
    //Mostrar producto por id
    router.get('/products/:id', productsController.show);

    return router;

};