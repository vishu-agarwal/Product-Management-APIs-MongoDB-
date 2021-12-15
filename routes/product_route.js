// Main file like index

const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();
router.use(express.json());
// import product,company and seller model files
const company_model = require("../model/company_model");
const product_model = require("../model/product_model");
const seller_model = require("../model/seller_model");
// home page or url
router.get('/', (req, res) => res.send('Welcome Product Page !!'))
    // insert product data
router.post("/add", (req, res) => {
    const { p_list } = req.body;
    const crt = product_model.create(p_list);
    console.log(p_list);
    return res.json({ data: "Success" });

});
router.get("/fetchComp/:name", async(req, res) => {
    const name = req.params.name;
    const dt = await product_model.find({ p_title: name });
    console.log(dt[0].c_id);
    const list = await company_model.find({ c_id: dt[0].c_id });
    console.log(list);
    return res.json({ data: list })
});
router.get("/fetchSell/:name", async(req, res) => {
    const name = req.params.name;
    const dt = await product_model.find({ p_title: name });
    console.log(dt[0].s_id);
    const list = await seller_model.find({ s_id: dt[0].s_id });
    console.log(list);
    return res.json({ data: list })
});
router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    //console.log(id);
    const dltdata = await product_model.findOneAndDelete({ p_id: id });
    /*, (e) => {
            if (e) {
                console.log(e);
            }
        });*/
    console.log(dltdata);
    return res.json({ data: dltdata });
});
router.put("/update/:id", async(req, res) => {
    const id = req.params.id;
    const p_list = req.body;
    //console.log(p_list);
    const updt = await product_model.findOneAndUpdate({ p_id: id }, p_list, { new: true })
        // console.log(updt);
    return res.json({ data: updt });
});
module.exports = router;