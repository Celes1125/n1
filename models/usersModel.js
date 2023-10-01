const mongoose = require('../bin/mongodb')

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : true
        },               
        email: String
    }
)

module.exports = mongoose.model("users", usersSchema);