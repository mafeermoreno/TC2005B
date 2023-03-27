module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_peliculas') >= 0)) {
        return response.redirect('/pelis/');
    }
    next();
}