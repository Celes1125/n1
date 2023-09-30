const mongoose = require('../bin/mongodb')

const productsSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        sku: String
    }
)

module.exports = mongoose.model("products", productsSchema);