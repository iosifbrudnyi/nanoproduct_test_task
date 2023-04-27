const {Appointment, Doctor, User} = require('../models/models')

// {
//     user_id: 'askd90pajsdpojas',
//     doctor_id: 'a987astgydioaushd9a0sdhy',
//     slot: 'date_time',
//     ...anything
// }


class AppointmentController{
    async create(req, res){
        try{
            const data = req.body
            
            const user = await User.findOne({_id: data.user_id});
            const doctor = await Doctor.findOne({_id : data.doctor_id});
            const slot = new Date(parseInt(data.slot));
            const slots = doctor ? doctor.slots : null
            
        
            if( user && doctor){
                
                    
                    if(slots.find(el => el.getTime() === slot.getTime())){
                        return res.json({
                            "Error": "slot is busy!"
                        })
                    }
                
            
                if(!slot){
                    const errMsg = {
                        error: "Date must be specified!"
                    }
    
                    res.json(errMsg)
                }

                const appointment = new Appointment({
                    user_id: data.user_id,
                    doctor_id: data.doctor_id,
                    slot: slot
                }) 
                await appointment.save()

                const doctor = await Doctor.findOne({_id: data.doctor_id})
                doctor.slots.push(slot)
                await doctor.save()
               
               
                res.json(appointment)

            }else {

                const errMsg = {
                    error: "User or Doctor doesn't exist!"
                }

                res.json(errMsg)
            }
        }catch(e){
            res.json({
                "Error" : e
            })
        }
        
    }
}

module.exports = new AppointmentController()