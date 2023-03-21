const db = require('../util/database');

module.exports = class Genero {

    constructor() {

    }

    save() {

    }

    static fetchAll() {
        return db.execute(`
            SELECT id, nombre
            FROM generos
        `);
    }
}