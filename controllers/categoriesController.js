
const categoriesModel = require('../models/categoriesModel')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const categories = await categoriesModel.find();
      res.send(categories)
    } catch (e) {
      next(e)
    }
  },

  getById: async function (req, res, next) {
    try {
      const categories = await categoriesModel.findById(req.params.id)
      res.json(categories)
    } catch (e) {
      next(e)
    }
  },

  create: async function (req, res, next) {
    try {
      console.log(req.body);
      const category = new categoriesModel(
        {
          name: req.body.name,
          color: req.body.color,
          controlNumber: req.body.controlNumber

        }
      )
      const document = await category.save()
      res.json(document)
    } catch (e) {
      next(e)
    }
  },

  update: async function (req, res, next) {
    try {
      const category = await categoriesModel.updateOne({ _id: req.params.id }, req.body)
      res.json(category)
    } catch (e) {
      next(e)
    }

  },

  delete: async function (req, res, next) {
    try {
      console.log(req.body.id)      
      const category = await categoriesModel.deleteOne({ _id: req.params.id })
      res.json(category)
    } catch (e) {
      next(e)
    }

  }
}