// Main file like index
const express = require("express");
//express is frsmework so initialize object
const exp = express();
// include router to make separate files
const router = express.Router();
// for use json apis
router.use(express.json());

// import company and product model files
const comp_model = require("../model/company_model");
const pro_model = require("../model/product_model");

// home page or url
/* 
router.post('/',(req,res)=>{
    return res.json({data:'Company Page ...'})
});*/
router.get('/', (req, res) => res.send('Welcome Company Page !!'))
    // insert product data
router.post("/add", (req, res) => {

    const { c_list } = req.body;
    const crt = comp_model.create(c_list)
    console.log(c_list);
    return res.json({ data: "success" });
});
router.get("/fetch/:name", async(req, res) => {

    const name = req.params.name;
    console.log(name);
    const dt = await comp_model.find({ c_name: name });
    console.log(dt[0].p_id);
    const list = await pro_model.find({ p_id: dt[0].p_id });
    console.log(list);
    return res.json({ data: list })

    /* const pnm = await pro.findOne({ p_title: name });
     const comp_id = pnm.c_id;
     const list = await comp_model.findOne({ c_id: comp_id });

     res.json({ data: list });*/
});
router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    const dltdata = await comp_model.findOneAndDelete({ c_id: id });
    /*, (e) => {
            if (e) {
                console.log(e);
            }
        });*/
    return res.json({ data: dltdata });
});
router.put("/update/:id", async(req, res) => {
    const id = req.params.id;
    const c_list = req.body;
    const updt = await comp_model.findOneAndUpdate({ c_id: id }, c_list, { new: true })
    return res.json({ data: updt });
});
module.exports = router;