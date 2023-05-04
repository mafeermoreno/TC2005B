const Registro = require('../models/registro.model');

// Controlador para obtener los registros y mostrarlos en una gráfica
exports.obtenerRegistros = async (request, response, next) => {
  try {
    // Obtener todos los registros
    const registros = await Registro.fetchAll();

    // Procesar los datos para la gráfica
    const graficaData = procesarDatos(registros);

    // Renderizar la vista con los datos de la gráfica
    response.render('graficas', graficaData);
  } catch (error) {
    next(error);
  }
};

// Función para procesar los datos y generar los datos necesarios para la gráfica
function procesarDatos(registros) {
  // Ordenar los registros por fecha
  const sortedRegistros = registros.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  
  // Crear arreglos con los valores de fecha, cierre, apertura, máximo, mínimo, volumen y variación de cada registro
  const labels = sortedRegistros.map(registro => registro.fecha.toLocaleDateString('es-MX'));
  const cierre = sortedRegistros.map(registro => registro.cierre);
  const apertura = sortedRegistros.map(registro => registro.apertura);
  const maximo = sortedRegistros.map(registro => registro.maximo);
  const minimo = sortedRegistros.map(registro => registro.minimo);
  const vol = sortedRegistros.map(registro => registro.vol);
  const variacion = sortedRegistros.map(registro => registro.variacion);

  // Devolver un objeto que contiene los arreglos procesados y los registros ordenados para que sean llamados en el método
  return {
    registros: sortedRegistros,
    labels,
    cierre,
    apertura,
    maximo,
    minimo,
    vol,
    variacion,
  };
}

