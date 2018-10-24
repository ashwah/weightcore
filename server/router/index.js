'use strict'

const routes = [
  require('./routes/weights'),
];

// Add access to the app and db objects to each route.
module.exports = function router(app, db, wss) {
  return routes.forEach((route) => {
    route(app, db, wss);
  });
};
