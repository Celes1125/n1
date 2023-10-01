const mongoose = require('../bin/mongodb')

const usersSchema = new mongoose.Schema(
    {
        name: String,               
        email: String
    }
)

module.exports = mongoose.model("users", usersSchema);