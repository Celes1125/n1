var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

router.get('/', usersController.getAll);

router.get('/:id', usersController.getById);

router.post('/', usersController.create)

router.put('/:id', usersController.update);

router.delete('/:id', usersController.delete);

module.exports = router;
