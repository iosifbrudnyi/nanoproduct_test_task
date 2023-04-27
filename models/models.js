require('dotenv').config()
const uuid = require('uuid')
const mongoose = require("mongoose")

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)


const database = mongoose.connection

database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('--Database Connected--'))


const userSchema = new mongoose.Schema({
    phone:{
        type: String,
    },
    name:{
        type: String
    }
})

const doctorSchema = new mongoose.Schema({
    name:{
        type: String
    },
    spec:{
        type: String
    },
    slots: [
        {type: Date, unique: true}
    ]
  
})

appointmentSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    doctor_id: {
        type: String
    },
    slot: {
        type: Date
    },
    isNotified: {
        type: Boolean,
        default: false
    }
})

module.exports = {
    User : mongoose.model("User", userSchema),
    Doctor : mongoose.model("Doctor", doctorSchema),
    Appointment: mongoose.model("Appointment", appointmentSchema)
}
