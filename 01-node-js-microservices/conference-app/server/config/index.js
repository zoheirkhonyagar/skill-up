const path = require("path");

module.exports = {
  development: {
    serviceRegistryUrl: "http://localhost:3000",
    serviceVersionIdentifier: "1.x.x",
    sitename: "Roux Meetups [Development]",
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json"),
    },
  },
  production: {
    serviceRegistryUrl: "http://localhost:3000",
    serviceVersionIdentifier: "1.x.x",
    sitename: "Roux Meetups",
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json"),
    },
  },
};
