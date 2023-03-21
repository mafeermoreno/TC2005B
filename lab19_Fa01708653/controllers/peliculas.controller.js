const Pelicula = require('../models/peliculas.model');
const Genero= require ('../models/generos.model');

exports.get_nueva = (request, response, next) => {
    
    Genero.fetchAll()
    .then(([rows, fieldData])=>{
        response.render('nueva',{
            generos: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
        });
    }).catch(error => console.log(error));
};

exports.post_nueva = (request, response, next) => {

    const pelicula = new Pelicula({
        nombre: request.body.nombre,
        genero: request.body.genero,
        descripcion: request.body.descripcion,
    });

    pelicula.save()
    .then(([rows, fieldData])=> {
        request.session.mensaje = "La pelicula se registro exitosamente";
        request.session.ultimo_pelicula=pelicula.nombre;
        response.redirect('/pelis/')
    })
    .catch((error)=>{console.log(error)});
};

exports.catalogar = (request, response, next) => {
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
    
        Pelicula.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            
            response.render('catalogo', { 
                generos: rows,
                ultimo_pelicula: request.session.ultimo_pelicula || '', 
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
