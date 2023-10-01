const usersModel = require('../models/usersModel')


module.exports = {

  getAll: async function (req, res, next) {
    try {
      const users = await usersModel.find();
      res.send(users)
    } catch (error) {
      console.log("error: ", error)
    }
  },

  getById: async function (req, res, next) {
    try {
      const user = await usersModel.findById(req.params.id)
      res.json(user);
    } catch (error) {
      console.log("error: ", error)
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
    } catch (error) { console.log("error: ", error) }

  },

  update: async function (req, res, next) {
    try {
      const user = await usersModel.updateOne({ _id: req.params.id }, req.body)
      res.json(user)
    } catch (error) { console.log("error: ", error) }
  },

  delete: async function (req, res, next) {
    try {
      const user = await usersModel.deleteOne({ _id: req.params.id })
      res.json(user)
    } catch (error) { console.log("error: ", error) }
  }
}
