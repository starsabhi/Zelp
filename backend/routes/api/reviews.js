const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');

const validateReview = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Review cannot be empty')
    // .isLength({ min: 5 })
    // .withMessage('Review should have at least 5 characters')
    .isLength({ max: 200 })
    .withMessage('Review should have max 200 characters')
    .matches(/.*\S.*/)
    .withMessage('Review must not be only white spaces')
    .custom((value) => {
      const newStr = value.replace(/\s+/g, '');
      return newStr.length >= 5;
    })
    .withMessage(
      'Review should have at least 5 characters (excluding white spaces)'
    ),
  handleValidationErrors,
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reviews = await db.Review.findAll();
    return res.json(reviews);
  })
);

router.get(
  '/:businessId',
  asyncHandler(async (req, res) => {
    const { businessId } = req.params;
    // const business = await db.Business.findByPk(productId);
    const reviews = await db.Review.findAll({
      where: {
        businessId: businessId,
      },
    });
    return res.json(reviews);
  })
);

router.get(
  '/:businessId/:reviewId',
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    // console.log(reviewId, '*********************');
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    const review = await db.Review.findByPk(reviewId);
    // console.log(review, '*********************');
    // console.log(review)
    return res.json(review);
  })
);

router.post(
  '/',
  requireAuth,
  validateReview,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const { userId, businessId, rating, content, username } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newReview = await db.Review.create({
      userId,
      businessId,
      rating,
      content,
      username,
    });
    res.json(newReview);
  })
);

router.patch(
  '/:reviewId',
  validateReview,
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log(req.body);

    const { userId, businessId, rating, content, username } = req.body;

    const { reviewId } = req.params;
    // console.log('THIS IS ID', { reviewId });

    const review = await db.Review.findByPk(reviewId);
    // console.log(review, 'THIS IS UPDATED REVIEW');

    await review.update({
      userId,
      businessId,
      rating,
      content,
      username,
    });
    res.json(review);
  })
);

router.delete(
  '/:reviewId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    const review = await db.Review.findByPk(reviewId);
    await review.destroy();
    res.json(review.id);
  })
);

module.exports = router;
