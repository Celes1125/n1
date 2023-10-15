
const productsModel = require('../models/productsModel')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const products = await productsModel.find().populate("category")
      res.send(products)
    } catch (e) {
      next(e)
    }
  },
  //en el find() puedo agregar como parámetro un query string como filtro. Por ejemplo 
  // find(name: req.query.name), para que el find me filtre por nombre. Puedo usar esto tb en el primer parámetro del .paginate()

  getAllPaginate: async function (req, res, next) {
    try {
      let queryFind = {};
      if (req.query.find) {
        queryFind = {
          name: { $regex: ".*" + req.query.find + ".*", $options:"i"}
        }
      }
      const products = await productsModel.paginate(
        queryFind,
        { 
          sort: { name: 1, price: 1}, 
          populate: "category",
          limit: req.query.limit || 2, 
          page: req.query.page || 1 
        })
      res.send(products)
    } catch (e) {
      next(e)
    }
    //el query string es lo que va después del ? en la url como: ...?limit=3&page=1
    // en sort:  1 es orden ascendente, -1 descendente
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
          sku: req.body.sku,
          category: req.body.categoryId

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
      console.log(req.body.id)      
      const product = await productsModel.deleteOne({ _id: req.params.id })
      res.json(product)
    } catch (e) {
      next(e)
    }

  }
}