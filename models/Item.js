const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    img: { data: Buffer, contentType: String, filename: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Item', ItemSchema);
