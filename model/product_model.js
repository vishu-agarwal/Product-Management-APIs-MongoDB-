const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    p_id: String,
    p_title: String,
    p_price: String,
    p_category: [{ type: String }],
    c_id: String,
    s_id: [{ type: String }]
});
const product_model = mongoose.model("product", ProductSchema, "product");
module.exports = product_model;