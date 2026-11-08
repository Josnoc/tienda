'use Strict'
const Users = require('../Models/Users');
const { Error } = require('mongoose');
const { request } = require('express');
//Agregar Usuario
exports.add = async(req, res, next) => {
    const user = new Users(req.body);
    user.role = 'USER';
    user.image = 'null';
    try {
        await user.save();
        res.json({ message: 'Se creo nuevo usuario' })

    } catch (error) {
        console.error(error);
        res.send(error);
        next();


    }
};

//Actualizar Usuario
exports.update = async(req, res, next) => {
    try {
        const user = await Users.findOneAndUpdate({ _id: req.params.id },
            req.body

        );
        res.json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al procesar la peticion' });
        next();
    }
}



//Mostrar Usuarios
exports.list = async(req, res, next) => {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.send(error);
        next();

    }
};

//Mostrar usuario por Id
exports.show = async(req, res, next) => {
    try {
        const users = await Users.findById(req.params.id);
        if (!users) {
            res.status(400).json({ message: 'el usuario no existe' });
        }
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro al procesar la peticion' });
    }
}



//Eliminar Usuario
exports.delete = async(req, res, next) => {
        try {
            await Users.findOneAndDelete({ _id: req.params.id });
            res.json({ message: 'El Usuario ha sido eliminado' });
        } catch (error) {
            res.status(400).json({ message: 'Error al procesar la petición' });
        }
    }
    //Subir imgen