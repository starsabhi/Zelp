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

router.get("/:businessId/:reviewId", asyncHandler(async(req,res)=>{

    const {reviewId} = req.params;
    console.log(reviewId,"*********************")
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    const review = await db.Review.findByPk(reviewId);
    console.log(review,"*********************")
    // console.log(review)
    return res.json(review);

}))



router.post("/", asyncHandler(async(req,res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const {
        userId,
        businessId,
        rating,
        answer
    } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newReview = await db.Review.create({
        userId,
        businessId,
        rating,
        answer
    })
    res.json(newReview)
}))


router.patch("/:reviewId", asyncHandler( async(req,res) => {

    // console.log(req.body);

    const  {
        userId,
        businessId,
        rating,
        answer
    } = req.body;


    console.log("THIS IS BODY",  {
        userId,
        businessId,
        rating,
        answer
    })

    const {reviewId} = req.params;
    // console.log("THIS IS ID", {reviewId})

    const review = await db.Review.findByPk(reviewId);
    // console.log(review, "THIS IS UPDATED REVIEW")

    await review.update({
        userId,
        businessId,
        rating,
        answer
    })
    res.json(review);
}))




router.delete("/:reviewId", asyncHandler(async(req,res)=>{
    const {reviewId} = req.params;

    const review = await db.Review.findByPk(reviewId)

    await review.destroy();
    res.json(review.id)
}))


module.exports = router
