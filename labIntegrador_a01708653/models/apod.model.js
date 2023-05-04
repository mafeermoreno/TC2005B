const request = require('request');

module.exports = {
  getAPOD: function(api_key, callback) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
    request(url, function(err, response, body) {
      if (err) {
        callback(err, null);
      } else {
        const apod = JSON.parse(body);
        callback(null, apod);
      }
    });
  }
}
