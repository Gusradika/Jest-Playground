const crypto = require("crypto");

async function getData() {
  console.log(crypto.randomBytes(20));
  return crypto.randomBytes(20);
}

getData();

module.exports = {
  getData,
};
