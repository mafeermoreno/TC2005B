const db = require('../util/database');

module.exports = class Registro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_registro) {
        this.fecha = nuevo_registro.fecha || null;
        this.cierre = nuevo_registro.cierre || 0;
        this.apertura = nuevo_registro.apertura || 0;
        this.maximo = nuevo_registro.maximo || 0;
        this.minimo = nuevo_registro.minimo || 0;
        this.vol = nuevo_registro.vol || 0;
        this.variacion = nuevo_registro.variacion || 0;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute(`
            INSERT INTO registro (fecha, cierre, apertura, maximo, minimo, vol, variacion)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [this.fecha, this.cierre, this.apertura, this.maximo, this.minimo, this.vol, this.variacion]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static obtenerRegistros() {
        return db.execute('SELECT * FROM registro');
    }

    static async fetchAll() {
        const [rows, fields] = await db.execute('SELECT * FROM registro');
        return rows.map(row => new Registro(row));
    }
      
};
