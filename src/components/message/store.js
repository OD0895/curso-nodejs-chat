const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb://db_user_platzivideos:odas0314@cluster0-shard-00-00.aokru.mongodb.net:27017,cluster0-shard-00-01.aokru.mongodb.net:27017,cluster0-shard-00-02.aokru.mongodb.net:27017/chatnodejs?ssl=true&replicaSet=atlas-x8y95n-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('[db] MongoDB connected');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if(filterUser) 
    filter = { user: filterUser };

  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function deleteMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: deleteMessage
};