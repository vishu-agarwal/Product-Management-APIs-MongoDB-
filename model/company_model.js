const mongose = require('mongoose');
const CompanySchema = mongose.Schema({
    c_id: String,
    c_name: String,
    p_id: [{ type: String }]
});
const comp_model = mongose.model("company", CompanySchema, "company")
module.exports = comp_model;