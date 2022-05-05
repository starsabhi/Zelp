const express = require("express");
const {asyncHandler,csrfProtection} = require("../utils");
const {requireAuth} = require("../../utils/auth")
const router = express.Router();
const db = require("../../db/models")

router.get("/:businessId", asyncHandler(async(req,res)=>{

    const {businessId} = req.params;
    // const business = await db.Business.findByPk(businessId);
    const reviews = await db.Review.findAll({
        where:{
            businessId
        },
        include:[
            {model: db.User}
        ]
    })
    return res.json(reviews);
}))
