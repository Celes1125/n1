
const productsModel = require('../models/productsModel')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const products = await productsModel.find();
      res.send(products)
    } catch (e) {
      next(e)
    }
  },

  getById: async function (req, res, next) {
    try {
      const product = await productsModel.findById(req.params.id)
      res.json(product)
    } catch (e) {
      next(e)
    }
  },

  create: async function (req, res, next) {
    try {
      console.log(req.body);
      const product = new productsModel(
        {
          name: req.body.name,
          price: req.body.price,
          sku: req.body.sku

        }
      )
      const document = await product.save()
      res.json(document)
    } catch (e) {
      next(e)
    }
  },

  update: async function (req, res, next) {
    try {
      const product = await productsModel.updateOne({ _id: req.params.id }, req.body)
      res.json(product)
    } catch (e) {
      next(e)
    }

  },

  delete: async function (req, res, next) {
    try {
      const product = await productsModel.deleteOne({ _id: req.params.id })
      res.json(product)
    } catch (e) {
      next(e)
    }

  }
}