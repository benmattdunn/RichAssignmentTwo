

// link to mongoose
var mongoose = require('mongoose');


var businessSchema = new mongoose.Schema({
    poster: {
        type: String,
        Required: 'ERROR, a valid user was not currently active for this submission' //should never happen, but you know
    },
    nusinessName: {
        type: String,
        Required: 'Business Name Cannot Be Blank'
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },

    layout: {
        type: int,
        required: 'requires a layout type',
    },
    DivOne: {
        type: String,
        required: 'Requires at least the first information panel'
    },
    DivTwo: {
        type: String,
    },
    DivThree: {
        type: String,
    },
    Image: {
        type: String, //references the id of the image, are uploaded to seperate schemas.
    }


});

// make this schema public using the schema defined above
// note the public class name is singular and starts with a Capital
module.exports = mongoose.model('Business', businessSchema);