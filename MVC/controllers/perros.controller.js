const Perro = require('../models/perros.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
    });

    perro.save();

    response.redirect('/perros/');
};

exports.listar = (request, response, next) => {
    response.render('lista', { razas: Perro.fetchAll() });
};
