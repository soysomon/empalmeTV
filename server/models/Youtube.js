const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  category: { type: String, required: true },
  duration: { type: String, default: '' },
  publishDate: { type: Date, required: true },
  thumbnail: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

module.exports = mongoose.model('Youtube', youtubeSchema);