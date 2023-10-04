const mongoose = require('../bin/mongodb')
const errorMessage = require('../utils/errorMessages')
const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, errorMessage.general.required],
            minlength: [1, errorMessage.general.minlength],
            get: function (value) {
                return value.toUpperCase()
            }
        },
        price: {
            type: Number,
            required: [true, errorMessage.general.required],
            set: function (value) {
                return value * 1.21
            }
        },
        sku: {
            type: Number,
            required: [true, errorMessage.general.required],
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: "categories"
        }

    }
)

productsSchema.virtual("priceCurrency").get(function () { return "$" + this.price })
productsSchema.set("toJSON", { getters: true, setters: true, virtuals: true })
module.exports = mongoose.model("products", productsSchema);