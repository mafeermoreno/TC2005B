const db =require ('../util/database');
/*const  = [
    { 
        nombre: 'Barbie Cascanueces', 
        genero: 'Fantasia',
        imagen: "https://a.ltrbxd.com/resized/sm/upload/10/u6/l6/5d/vYXo0mhSoOYwotiuppm1gFtstBj-1200-1200-675-675-crop-000000.jpg?v=8bb6647aea", 
        descripcion: "La pequeña Clara despierta una noche para descubrir que su nueva muñeca cascanueces ha combrado vida y se enfrenta al Rey Ratón."
    }, 
    {
        nombre: "Barbie Rapunzel",
        genero: 'Fantasia',
        imagen: "https://play-lh.googleusercontent.com/proxy/RIBwuk-qyRdSxfsm9MlKLt8IaCCC61vdkQx81gCNRbk3Gme15VISy-8o9EIAYy6LHeoH_bH1O9Yo4YQlyMNEpMzQ6xTkeaT0mYhpcot_KXjh_C40Jw=s1920-w1920-h1080", 
        descripcion: "Barbie cuenta la historia de Rapunzel, una princesa que es raptada por una bruja y obligada a vivir encerrada en una torre por el resto de su vida."
    }, 
    { 
        nombre: "Barbie Fairytopia",
        genero: 'Fantasia',
        imagen: "https://www.dondeir.com/wp-content/uploads/2022/08/barbie-fairytopia-netflix-1024x767.jpg", 
        descripcion: "Elina emprende un viaje para buscar la cura contra un mal en Fairytopia"
    },
    { 
        nombre: "Barbie Mariposa",
        genero: 'Fantasia',
        imagen: "https://is4-ssl.mzstatic.com/image/thumb/vov5t_DJPtIXMElqeMjnkQ/1200x675.jpg", 
        descripcion: "Un hada mariposa y sus amigas deben encontrar un antídoto para salvar la vida de su reina, quien fue envenenada."
    },
    { 
        nombre: "Barbie Aventura de Sirenas",
        genero: 'Fantasia',
        imagen: "https://www.abc.es/media/peliculas/000/027/135/barbie-una-aventura-de-sirenas-2.jpg", 
        descripcion: "Merliah es una campeona de surf de Malibú y una adolescente normal hasta que un día descubre que es una sirena. La joven y su delfín deben rescatar a su madre y salvar al mundo marino. Por el camino conoce a unas sirenas con las que entabla amistad."
    } 
];
*/
module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nueva objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.nombre = nueva_pelicula.nombre || 'Barbie';
        this.genero = nueva_pelicula.genero || 'Fantasía';
        this.imagen = nueva_pelicula.imagen || 'https://es.web.img3.acsta.net/newsv7/20/04/03/12/51/2002013.jpg';
        this.descripcion = nueva_pelicula.descripcion || 'Película de Barbie';
    }

    //Este método servirá para guardar de manera persistente el nueva objeto. 
    save() {
        return db.execute(`
        INSERT INTO peliculas (nombre, imagen, descripcion, idGenero) 
        values (?, ?, ?, ?)
    `, [this.nombre, this.imagen, this.descripcion, this.genero]);
    }

    static fetchAll(){
        return db.execute(
            `SELECT p.id, p.nombre, p.imagen, p.descripcion, g.nombre as genero 
            FROM peliculas p, generos g
            WHERE p.idGenero = g.id `
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(id) {
        return db.execute(
            `SELECT p.id, p.nombre, p.imagen, p.descripcion, g.nombre as genero 
            FROM peliculas p, generos g
            WHERE p.idGeneros = g.id AND p.id = ?
            `, [id]
        );
    }
    static fetch(id){
        if(id){
            return Pelicula.fetchOne(id);
        }else{
            return Pelicula.fetchAll();
        }
    }

}