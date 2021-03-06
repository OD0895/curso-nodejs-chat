const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'chats'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  message: { 
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

const model = mongoose.model('messages', mySchema);

module.exports = model;