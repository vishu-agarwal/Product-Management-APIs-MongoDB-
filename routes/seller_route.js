// Main file like index

const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();
// for use json apis
router.use(express.json());
// import product and seller model files
const pro_model = require("../model/product_model");
const sell_model = require("../model/seller_model");
// home page or url
router.get('/', (req, res) => res.send('Welcome Seller Page !!'))
    // insert product data
router.post("/add", (req, res) => {

    const { s_list } = req.body;
    const crt = sell_model.create(s_list)
    console.log(s_list);
    return res.json({ data: "success" });
});
router.get("/fetch/:name", async(req, res) => {
    const name = req.params.name;
    const dt = await sell_model.find({ s_name: name });
    const list = await pro_model.find({ p_id: dt[0].p_id });
    return res.json({ data: list })
});
router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    const dltdata = await sell_model.findOneAndDelete({ s_id: id });
    /*, (e) => {
            if (e) {
                console.log(e);
            }
        });*/
    return res.json({ data: dltdata });
});
router.put("/update/:id", async(req, res) => {
    const id = req.params.id;
    const s_list = req.body;
    const updt = await sell_model.findOneAndUpdate({ s_id: id }, s_list, { new: true })
    return res.json({ data: updt });
});
module.exports = router;