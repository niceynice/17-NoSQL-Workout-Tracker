const mongoose = require("mongoose")
var Schema = mongoose.Schema
var workoutSchema = new Schema ({
    day:
    {  type: Date,
       default:     new Date().setDate(new Date().getDate())
    },


        exercises: Array
})

var Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout