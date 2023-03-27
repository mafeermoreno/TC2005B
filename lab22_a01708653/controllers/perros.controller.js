const Perro = require('../models/perros.model');
const Raza = require('../models/razas.model');

exports.get_editar = (request, response, next) => {

    Perro.fetchOne(request.params.id)
    .then(([perros_consulta, fieldData]) => {
        if (perros_consulta.length == 1) {

            const perro = new Perro({
                id: perros_consulta[0].id,
                nombre: perros_consulta[0].nombre,
                raza: perros_consulta[0].idRaza,
                imagen: perros_consulta[0].imagen,
                descripcion: perros_consulta[0].descripcion
            });

            Raza.fetchAll()
            .then(([rows, fieldData]) => {
                response.render('nuevo', {
                    razas: rows,
                    isLoggedIn: request.session.isLoggedIn || false,
                    nombre: request.session.nombre || '',
                    perro: perro || false,
                });
            }).catch(error => console.log(error));

        } else {
            return response.redirect('/perros/nuevo');
        }
    })
    .catch(error => console.log(error));

};

exports.post_editar = (request, response, next) => {
    console.log("Datos para editar");
    console.log(request.body);

};

exports.get_nuevo = (request, response, next) => {

    Raza.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('nuevo', {
            razas: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            perro: false,
        });
    }).catch(error => console.log(error));
    
};

exports.post_nuevo = (request, response, next) => {

    console.log(request.file);

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
        imagen: request.file.filename,
    });

    perro.save()
    .then(([rows, fieldData]) => {

        request.session.mensaje = "El perro fue registrado exitosamente.";

        request.session.ultimo_perro = perro.nombre;

        response.redirect('/perros/');
    })
    .catch((error) => {console.log(error)});

};

exports.listar = (request, response, next) => {

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';

    let consultas = cookies.split(';')[0].split('=')[1] || 0;

    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje = '';

    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    Perro.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('lista', { 
            razas: rows,
            ultimo_perro: request.session.ultimo_perro || '', 
            mensaje: mensaje,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {
        console.log(err);
    });

    
};