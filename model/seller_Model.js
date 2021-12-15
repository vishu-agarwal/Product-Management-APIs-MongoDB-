const mongose = require('mongoose');
const SellerSchema = mongose.Schema({
    s_id: String,
    s_name: String,
    p_id: [{ type: String }]
});
const sell_model = mongose.model("seller", SellerSchema, "seller")
module.exports = sell_model;