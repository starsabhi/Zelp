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


router.post("/", asyncHandler(async(req,res) => {
    console.log("ROUTER COMPLETED OR NOT   *********************")
    const {
        userId,
        businessId,
        rating,
        answer
    } = req.body;
    console.log("ROUTER COMPLETED OR NOT   *********************")

    const newReview = await db.Review.create({
        userId,
        businessId,
        rating,
        answer
    })

    console.log("ROUTER COMPLETED OR NOT   *********************")
    // const review = await db.Review.findByPk(newReview.id,{
    //     include:[
    //         {model: db.User}
    //     ]
    // })
    console.log("ROUTER COMPLETED OR NOT   *********************")
    res.json(newReview)
}))

module.exports = router
