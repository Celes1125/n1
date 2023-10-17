var express = require('express');
var router = express.Router();

const productsController = require("../controllers/productsController.js")

router.get('/', productsController.getAll);
router.get('/pag', productsController.getAllPaginate);
router.get('/:id', productsController.getById);
router.post('/', (req,res,next) => { req.app.validateUser (req, res, next) } , productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

module.exports = router;
