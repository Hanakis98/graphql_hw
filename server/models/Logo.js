var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  fontSize: { type: Number, min: 2, max: 144 },
  background: {type: String, default: "#FFFFFF"},
  borderRadius: {type: Number, default: 1},
  borderColor: {type: String, default: "#000000"},
  borderWidth: {type: Number, default: 1},
  padding: {type: Number, default: 1},
  margin: {type: Number, default: 1},
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);