const { JsonWebTokenError } = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
const bcrypt =  require("bcrypt");
const jwt = require("jsonwebtoken");

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
      if(!user){
        res.json({message: "email incorrecto"})
        return
      }

    } catch (e) {
      next(e)
    }
  },

  create: async function (req, res, next) {
    try {
      const user = new usersModel(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        }
      )
      const document = await user.save()
      res.json(document)
    } catch (e) {
      next(e)
    }

  },

  login: async function (req, res, next) {
    try {
      const user = await usersModel.findOne({email: req.body.email})
      if(!user){
        res.json({message:"email incorrecto"})
        return
      }
      if(bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id}, req.app.get('secretKey'), { expiresIn: "1h"})
        res.json( { token: token})
      }else{
        res.json( { message: "contraseña incorrecta"})
        return
      }
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
