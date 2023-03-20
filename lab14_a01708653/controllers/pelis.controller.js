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

    request.session.ultima_pelicula = pelicula.nombre;

    response.redirect('/pelis/');
};

exports.catalogar = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    console.log(cookies);

    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    console.log(consultas);
    
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('catalogo', { 
        generos: Pelicula.fetchAll(),
        ultima_pelicula: request.session.ultima_pelicula || '',
    });
};
