const { PhotoGallery } = require('../database/photosModel');

var getPhotosForRestaurant = function(id, callback) {
  PhotoGallery.find({ id: id}).then(photos => {
    console.log('results: ', photos)
    callback(null, photos);
  }).catch(err => {
    console.log('err in getPhotosForRestId', err);
    callback(err);
  })
}


var updatePhotoCollectionForRestaurant = function(id, callback) {

}

var deletePhotoForRestaurant = function(id, callback) {
  
}

module.exports = {
  getPhotosForRestaurant,
  updatePhotoCollectionForRestaurant,
  deletePhotoForRestaurant
}