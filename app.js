//include express
const express = require("express")
    // create express object
const exp = express()
    // include mongoose
const mongoose = require("mongoose")
    // include env file
require("dotenv").config();
const port = 5000;
exp.use(express.json())
    // create mongoDB connection
mongoose.connect(process.env.mongourl).then(() => console.log("mongodb connection success"));
// setup server
exp.listen(port, () => {
    console.log(`server is running ${port} !`);

});
// home page or url
exp.get('/', (req, res) => res.send('Welcome Product Management APIs (MongoDB And Express Router)!!!'))

// Router
const product = require("./routes/product_route")
const company = require("./routes/company_route")
const seller = require("./routes/seller_route")
    // urls
exp.use("/pro", product);
exp.use("/comp", company);
exp.use("/sell", seller);