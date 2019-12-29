const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// id: '1',
// name: 'Kogutowicz Manó',
// nick: 'Manó',
// birth: '1988-08-08',
// birthPlace: 'Budapest',
// email: 'mano@mano.com',
  
const PeopleSchema = new Schema({
  id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false
  },
  nick: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  birth: {
    type: String,
    required: false
  },
  birthPlace: {
    type: String,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const People =  mongoose.model('people', PeopleSchema);
export default People;
// module.exports = People = mongoose.model('people', PeopleSchema);
