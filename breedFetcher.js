const request = require("request");

const getCatData = (catToFind, callback) => {
  const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${catToFind}`;
  request(catURL, function (error, response, body) {
    if (response.statusCode !== 200) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length !== 0) {
      return callback(null, data[0].description);
    } else {
      return callback('We have no data for this', null);
    }
  });
};

module.exports = getCatData;
