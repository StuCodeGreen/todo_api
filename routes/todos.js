var express = require('express'),
  router = express.Router(),
  db = require('../models/index'),
  helpers = require('../helpers/todos');

// TODO ROOT ROUTE
router
  .route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router
  .route('/:todoId')
  .get(helpers.showTodo)
  .put(helpers.updateTodo)
  .delete(helpers.destroyTodo);

module.exports = router;
