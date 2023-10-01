const usersModel = require('../models/usersModel')


module.exports = {

  getAll: async function (req, res, next) {
    try {
      const users = await usersModel.find();
      res.send(users)
    } catch (e) {
      next(e)
    }
  },

  getById: async function (req, res, next) {
    try {
      const user = await usersModel.findById(req.params.id)
      res.json(user);
    } catch (e) {
      next(e)
    }
  },

  create: async function (req, res, next) {
    try {

      const user = new usersModel(
        {
          name: req.body.name,
          email: req.body.email
        }
      )
      const document = await user.save()
      res.json(document)
    } catch (e) {
      next(e)
    }

  },

  update: async function (req, res, next) {
    try {
      const user = await usersModel.updateOne({ _id: req.params.id }, req.body)
      res.json(user)
    } catch (e) {
      next(e)
    }
  },

  delete: async function (req, res, next) {
    try {
      const user = await usersModel.deleteOne({ _id: req.params.id })
      res.json(user)
    } catch (e) {
      next(e)
    }
  }
}
