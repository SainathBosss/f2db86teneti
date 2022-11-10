const mongoose = require("mongoose")
const penSchema = mongoose.Schema({
pen_ink: String,
pen_brand: String,
pen_cost: Number
})
module.exports = mongoose.model("pens",
penSchema)