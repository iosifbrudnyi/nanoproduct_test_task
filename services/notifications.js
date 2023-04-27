require('dotenv').config()
const { Appointment, Doctor, User } = require('../models/models')
const writeLog = require('./writeLog')

const delay = process.env.DB_CHECK_DELAY


const startNotify = async () => {
    try{

        setInterval( () => {
            const appointments = Appointment.find({})
            appointments.then((items) => {
                items.forEach(async (item) => {
                    const currentDate = Date.now()
                    const day = process.env.NOTIFY_1
                    const hours2 = process.env.NOTIFY_2
                    const diff = item.slot.getTime() - currentDate

                    if ( (diff < day || diff < hours2) && !item.isNotified){
                        await Appointment.findOneAndUpdate({_id: item._id}, {isNotified: true})

                        const doctor = await Doctor.findById(item.doctor_id);
                        const user = await User.findById(item.user_id);

                        writeLog(`${user.name} has appointment to doctor ${doctor.name} on ${item.slot}`)
            
                    }
                })
            })
        }, delay)

        
    }
    catch(e){
        console.log(e)
        startNotify()
    }

}

startNotify()

module.exports = startNotify