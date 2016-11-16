/**
 * Created by User on 11/14/2016.
 */

//Standard account class
//uses a unique userName tag generated off an account, a user name which is the first name and last name
//of the dev, and then

var mongoose = require ('mongoose');
var plm = require ('passport-local-mongoose'); //whut? (Didn't show up with passport local in code help... whut?

//schema model is really simplified
var AccountSchema = new mongoose.schema({
    userName: {
        type: String,
        Required: 'user name is required'
    },
    password: {
        type: string,
        Required: 'password is required'
    },
    ouathID: {
        type: String //alternative account information, oautID is password during a github signin.
    }


    }
);

module.exports = mongoose.model('Account', AccountSchema);