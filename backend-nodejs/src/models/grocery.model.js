// contact-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const grocery = new mongooseClient.Schema({
    name : {
      first: {
        type: String,
        required: [true, 'First Name is required']
      },
    },
    shopName : {
      type: String,
      required: [true, 'Shop Name is required']
    },
    status : {
      type: String,
      required: [true, 'Status is required']
    },

    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('grocery', grocery);
};
