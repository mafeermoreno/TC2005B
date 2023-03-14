const Pelicula = require('../models/pelis.model');

exports.get_nueva = (request, response, next) => {
    response.render('nueva');
};

exports.post_nueva = (request, response, next) => {

    const pelicula = new Pelicula({
        nombre: request.body.nombre,
        genero: request.body.genero,
        descripcion: request.body.descripcion,
    });

    pelicula.save();

    response.redirect('/pelis/');
};

exports.catalogar = (request, response, next) => {
    response.render('catalogo', { generos: Pelicula.fetchAll() });
};
