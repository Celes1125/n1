var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

router.get('/', usersController.getAll);

router.get('/:id', usersController.getById);

router.post('/', usersController.create)

router.post('/login', usersController.login)

router.put('/:id', usersController.update);

router.delete('/:id', (req,res,next) => { req.app.validateUser (req, res, next) },usersController.delete);

module.exports = router;
