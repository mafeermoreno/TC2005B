const axios = require("axios");

exports.get_paisFormulario = (request, response, next) => {
  response.render("index");
};

exports.post_pais = async (request, response, next) => {
  const countryName = request.body.country;
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  try {
    const responseApi = await axios.get(url);
    response.render("pais", { country: responseApi.data[0] });
  } catch (error) {
    response.render("index", { error: "Por favor, ingrese un nombre de país válido" });
  }
};
