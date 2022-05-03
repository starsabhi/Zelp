const express = require("express");
const {asyncHandler,csrfProtection} = require("../utils");

const router = express.Router();
const db = require("../../db/models")



router.get("/", asyncHandler(async ( req, res) => {
const businessess = await db.Business.findAll();
// console.log(businessess, "**************")
res.json(businessess)
}));


router.get("/:businessId", asyncHandler(async(req,res)=>{
const {businessId} = req.params;
const business = await db.Business.findByPk(businessId);
return res.json(business);
}))

router.get("/new", asyncHandler(async(req,res)=>{
const business = await db.Business.create(req.body);
res.json(business);
}))

module.exports = router
