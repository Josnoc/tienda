'use strict'
const Products = require('../Models/Products');
const { Error } = require('mongoose');

//AgregarProducto
exports.add = async(req, res, next) => {

    const product = new Products(req.body);

    try {

        await product.save();
        res.json({ message: 'Nuevo Producto Agregado' });

    } catch (error) {
        console.error(error);
        res.send(error);
        next();
    }
}

//ActualizarProducto
exports.update = async(req, res) => {
    try {
        const products = await Products.findOneAndUpdate({ _id: req.params.id },
            req.body

        );
        res.json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la peticion' });

    }
}

//MostrarProductos
exports.list = async(req, res, next) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.send(error);
        next();


    }
}

//EliminarProducto
exports.delete = async(req, res) => {
    try {
        await Products.findOneAndDelete({ _id: req.params.id });
        res.json({ message: 'Producto Eliminado' });
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la petición' });
    }
}

//Mostrar producto por id
exports.show = async(req, res) => {
    try {
        const products = await Products.findById(req.params.id);
        if (!products) {
            res.status(400).json({ message: 'el producto no existe' });
        }
        res.json(products);
    } catch (error) {
        res.status(400).json({ message: 'Erro al procesar la peticion' });
    }
}