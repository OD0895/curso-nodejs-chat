const store = require('./store');

function addUser(name) {
  if(!name) {
    return Promise.reject('Name is required');
  }

  const user = {
    name,
  };
  return store.addUser(user);
}

function listUsers() {
  return store.listUsers();
}
module.exports = {
  addUser,
  listUsers,
};