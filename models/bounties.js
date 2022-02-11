const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bounty Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        requiredl: false
    },
    type: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model("Bounty", bountySchema)
