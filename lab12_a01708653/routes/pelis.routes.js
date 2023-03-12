const express = require('express');

const router = express.Router();

const pelis = [
    { 
        peli: "Barbie Cascanueces", 
        imagen: "https://a.ltrbxd.com/resized/sm/upload/10/u6/l6/5d/vYXo0mhSoOYwotiuppm1gFtstBj-1200-1200-675-675-crop-000000.jpg?v=8bb6647aea", 
        handle: "@bailarina",
        descripcion: "La pequeña Clara despierta una noche para descubrir que su nueva muñeca cascanueces ha combrado vida y se enfrenta al Rey Ratón."
    }, 
    {
        peli: "Barbie Rapunzel",
        imagen: "https://play-lh.googleusercontent.com/proxy/RIBwuk-qyRdSxfsm9MlKLt8IaCCC61vdkQx81gCNRbk3Gme15VISy-8o9EIAYy6LHeoH_bH1O9Yo4YQlyMNEpMzQ6xTkeaT0mYhpcot_KXjh_C40Jw=s1920-w1920-h1080", 
        handle: "@princesa",
        descripcion: "Barbie cuenta la historia de Rapunzel, una princesa que es raptada por una bruja y obligada a vivir encerrada en una torre por el resto de su vida."
    }, 
    { 
        peli: "Barbie Fairytopia",
        imagen: "https://www.dondeir.com/wp-content/uploads/2022/08/barbie-fairytopia-netflix-1024x767.jpg", 
        handle: "@hadas",
        descripcion: "Elina emprende un viaje para buscar la cura contra un mal en Fairytopia"
    },
    { 
        peli: "Barbie Mariposa",
        imagen: "https://is4-ssl.mzstatic.com/image/thumb/vov5t_DJPtIXMElqeMjnkQ/1200x675.jpg", 
        handle: "@hadamariposa",
        descripcion: "Un hada mariposa y sus amigas deben encontrar un antídoto para salvar la vida de su reina, quien fue envenenada."
    },
    { 
        peli: "Barbie Aventura de Sirenas",
        imagen: "https://www.abc.es/media/peliculas/000/027/135/barbie-una-aventura-de-sirenas-2.jpg", 
        handle: "@sirenas",
        descripcion: "Merliah es una campeona de surf de Malibú y una adolescente normal hasta que un día descubre que es una sirena. La joven y su delfín deben rescatar a su madre y salvar al mundo marino. Por el camino conoce a unas sirenas con las que entabla amistad."
    } 
];

router.get('/', (request, response, next) => {
    response.render('lista', {pelis: pelis});
});

module.exports = router;