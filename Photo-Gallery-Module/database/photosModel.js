const mongoose = require('mongoose');
const db = require('./index');

var Schema = mongoose.Schema;

const photoGallerySchema = Schema({
  id: String,
  restaurantName: String, 
  heroImage: String,
  photos: Array
});

var PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);


module.exports = {
  PhotoGallery,
  photoGallerySchema
}