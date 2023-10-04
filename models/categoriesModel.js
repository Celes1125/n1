const mongoose = require('../bin/mongodb')


const categoriesSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        controlNumber: Number
    }
)

module.exports = mongoose.model("categories", categoriesSchema);