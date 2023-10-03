const mongoose = require('../bin/mongodb')
const errorMessages = require ('../utils/errorMessages')

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : [ true, errorMessages.general.required ],
            minlength: [ 5 , errorMessages.general.minlength ]
        },               
        email: String
    }
)

module.exports = mongoose.model("users", usersSchema);