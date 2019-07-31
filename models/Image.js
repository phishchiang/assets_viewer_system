const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  img: {
    data: Buffer,
    contentType: String
  },
  path: {
    type: String
  },
  label: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', ImageSchema);
