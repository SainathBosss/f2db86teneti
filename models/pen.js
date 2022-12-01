const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
    pen_ink: {
        type: String,
        required: [true, "Name required"]
    },
    pen_brand: String,
    pen_cost: {
        type: Number,
        min: [10, "Min value is 10"],
        max: [60, "Max value is 60"]
    }
})
module.exports = mongoose.model("pen", penSchema)