const { Router } = require('express');
require('express-async-errors')
const AdModel = require('../models/AdModel')
const adsRouter = Router();
const multer  = require("multer");

//get all 
adsRouter.get('/', async (req,res) => {
  const ads = await AdModel.find({});
  // ads.sort({date: -1})
  res.json(ads)
})

// add new User
adsRouter.post('/', async(req,res) => {
  const newAd = new AdModel(req.body);
  const { _id } = await newAd.save();
  res.status(201).send(newAd);
})

// getStudentById
adsRouter.get('/:adId', async (req,res) => {
  const selectedAd = await AdModel.findById(req.params.userId);

  if(!selectedAd) {
    res.status(400).send({ error: 'User not found' });
    return
  } else {
    res.status(200).send(selectedAd);
  }
})

//changeUserById
adsRouter.put('/:adId', async (req,res) => {
  const updateAd = await AdModel.findByIdAndUpdate(req.params.adId, req.body)
  res.status(200).send(updateAd)
})

//deleteUserById
adsRouter.delete('/:adId', async (req,res) => {
  const deletedUser = await AdModel.findByIdAndDelete(req.params.userId)
  res.status(200).send(deletedUser)
})


module.exports = adsRouter;