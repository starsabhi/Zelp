const express = require("express");
const {asyncHandler,csrfProtection} = require("../utils");
const {requireAuth} = require("../../utils/auth")
const router = express.Router();
const db = require("../../db/models")



router.get("/", asyncHandler(async ( req, res) => {
const businessess = await db.Business.findAll();
// console.log(businessess, "**************")
res.json(businessess)
}));



router.post("/new", requireAuth, asyncHandler(async(req,res)=>{
    console.log("*************************************************");
    const {name,
        ownerId,
        category,
        description,
        address,
        city,
        state,
        zip_code,
        phone_number,
        image} = req.body;

        const newBusiness = await db.Business.create({name,
            ownerId,
            category,
            description,
            address,
            city,
            state,
            zip_code,
            phone_number,
            image});

            console.log("*************************************************");

    res.json(newBusiness);
}))






router.get("/:businessId", asyncHandler(async(req,res)=>{

    console.log("****************ROUTE************")
const {businessId} = req.params;
const business = await db.Business.findByPk(businessId);
return res.json(business);
}))




module.exports = router
