exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login/ingresar'); //Este código se ejecuta cuando la sesión se elimina.
    });
};