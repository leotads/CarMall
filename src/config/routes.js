'use strict';

module.exports = app => {

  app.route('/')
    .get((req, res) => {
      res.status(200).json({hello: 'World'});
    });

  app.route('/user')
    .post(app.api.controllers.userController.create)
}