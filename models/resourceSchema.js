// holds an image or resource file.

var mongoose = require ('mongoose');
var plm = require ('passport-local-mongoose'); //whut? (Didn't show up with passport local in code help... whut?

//schema model is really simplified
var ImageSchema = new mongoose.schema({
        Name: {
            type: String,
        },
        imageDate: {
            type: Data,
        }


    }
);

module.exports = mongoose.model('Image', ImageSchema);