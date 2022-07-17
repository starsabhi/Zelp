const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validatorBusniess = [handleValidationErrors];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const businessess = await db.Business.findAll();
    res.json(businessess);
  })
);

router.post(
  '/new',
  requireAuth,
  validatorBusniess,
  singleMulterUpload('image'),
  asyncHandler(async (req, res) => {
    const {
      name,
      ownerId,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
    } = req.body;

    console.log(
      req.body,
      '____________________________________________________________________'
    );

    const image = await singlePublicFileUpload(req.file);

    const newBusiness = await db.Business.create({
      name,
      ownerId,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
      image,
    });

    res.json(newBusiness);
  })
);

router.get(
  '/:businessId',
  asyncHandler(async (req, res) => {
    const { businessId } = req.params;
    const business = await db.Business.findByPk(businessId);
    return res.json(business);
  })
);

router.patch(
  '/:businessId/edit',
  validatorBusniess,
  singleMulterUpload('image'),
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("****************ROUTE************")
    const { businessId } = req.params;
    const {
      name,
      ownerId,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
      image,
    } = req.body;
    const business = await db.Business.findByPk(businessId);

    let editedPic;
    if (req.file.fieldname === 'image') {
      editedPic = await singlePublicFileUpload(req.file);
    } else {
      editedPic = image;
    }

    await business.update({
      name,
      ownerId,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
      image: editedPic,
    });

    res.json(business);
  })
);

router.delete(
  '/:businessId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { businessId } = req.params;
    const business = await db.Business.findByPk(businessId);
    await business.destroy();
    res.json(business.id);
  })
);

module.exports = router;
