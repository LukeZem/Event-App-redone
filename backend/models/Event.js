const mongoose = require("mongoose");
const Person = require('./Person')

const eventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    organizer: {
      name: {type:String, required: true},
      role: {type:String, required: true}
    },
    attendees: [{type: mongoose.Schema.Types.ObjectId, ref: "Person"}]
},
{
    timestamps: true
})

const Event = mongoose.model('Event',eventSchema)
module.exports= Event;