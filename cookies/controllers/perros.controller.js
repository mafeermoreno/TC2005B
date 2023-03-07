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

    request.session.ultimo_perro = perro.nombre;

    response.redirect('/perros/');
};

exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('lista', { 
        razas: Perro.fetchAll(),
        ultimo_perro: request.session.ultimo_perro || '', 
    });
};
