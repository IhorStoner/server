const mongoose = require('mongoose');
const nodemon = require('nodemon');
const moment = require('moment')

const { Schema } = mongoose;

const AdSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  img: {
    type: Array,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: String,
    default: moment().format('L'),
  },
  status: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  priceAd: {
    type: String,
  },
  productPrice: {
    type: String,
  },
  region: {
    type: String,
  },
  section: {
    type: String,
  },
  services: {
    type: Array,
  },
  subsection: {
    type: String,
  },
  title: {
    type: String,
  },
  mail: {
    type: String,
  }
});


const AdModel = mongoose.model('ads', AdSchema);

module.exports = AdModel;