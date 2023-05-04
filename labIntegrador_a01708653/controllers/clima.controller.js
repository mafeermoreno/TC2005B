const axios = require("axios");

exports.geClimaFormulario = (request, response, next) => {
  response.render("index");
};

exports.obtenerClima = async (request, response, next) => {
  const city = request.body.city;
  const apiKey = "16f4fd90ad2072ca18c2520fcf5c401d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await axios.get(url);
    response.render("weather", { weather: response.data });
  } catch (error) {
    response.render("index", { error: "Por favor, ingrese una ciudad válida" });
  }
};

