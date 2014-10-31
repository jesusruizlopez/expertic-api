'use strict';

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

var courseSchema = new Schema({
    folio: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    partner: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    }
},
{
    versionKey: false
});

module.exports = mongoose.model('Course', courseSchema);
