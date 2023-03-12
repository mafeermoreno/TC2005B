const peliculas = [
    { 
        pelicula: 'Duquesa',
        genero: "Beagle", 
        imagen: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0009_beagle_0.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    {
        pelicula: 'Wilson',
        genero: "Golden",
        imagen: "https://cdn.pixabay.com/photo/2018/01/03/13/54/golden-retiver-3058383_640.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    }, 
    { 
        pelicula: 'Spike',
        genero: "Husky",
        imagen: "https://m.media-amazon.com/images/I/51+z8sSyAuL.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        pelicula: "Chilakil",
        genero: 'Chihuahua',
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        pelicula: 'Pugberto',
        genero: "Pug",
        imagen: "https://bulma.io/images/placeholders/1280x960.png", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    } 
];

module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.pelicula = nueva_pelicula.pelicula || 'Firulais';
        this.genero = nueva_pelicula.genero || 'Delmer';
        this.imagen = nueva_pelicula.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.descripcion = nueva_pelicula.descripcion || 'Un perro muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        peliculas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return peliculas;
    }

}