function addMessage(user, message){
  console.log(user);
  console.log(message);
  const fullMessage = {
    user: user,
    message: message
  }
}

module.exports = {
  addMessage,
};