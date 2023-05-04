const model = require('../models/apod.model');

module.exports = {
  getAPOD: function(req, res) {
    model.getAPOD(req.query.api_key, function(error, apod) {
      if (error) {
        console.log(error);
        res.status(500).send('Error getting APOD');
      } else {
        res.send(apod);
      }
    });
  }
};
