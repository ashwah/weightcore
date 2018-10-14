'use strict';

module.exports = (app, db) => {
  // GET all weights.
  app.get('/weights', (req, res) => {
    db.weights.findAll()
      .then(weights => {
        res.json(weights);
      });
  });

  // POST weight reading.
  app.post('/weights', (req, res) => {
    const reading = req.body.reading;
    const device_id = req.body.device_id;
    const hub_id = req.body.hub_id;
    db.weights.create({
      reading: reading,
      device_id: device_id,
      hub_id: hub_id
    })
      .then(newWeight => {
        res.json(newWeight);
      })
  });
};
