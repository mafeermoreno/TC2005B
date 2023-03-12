const Pelicula = require('../models/pelis.model');

exports.get_nueva = (request, response, next) => {
    response.render('nueva');
};

exports.post_nueva = (request, response, next) => {

    const pelicula = new Pelicula({
        peli: request.body.peli,
        genero: request.body.genero,
        descripcion: request.body.descripcion,
    });

    pelicula.save();

    response.redirect('/peli/');
};

exports.catalogar = (request, response, next) => {
    response.render('catalogo', { razas: Pelicula.fetchAll() });
};
