// {
//     id: 'uuid',
//     phone: '+7 926 578 85 14',
//     name: 'Вася',
//     ...anything
// }

const { Doctor } = require("../models/models");



class DoctorController{
    async create(req, res){
        try{

            const data = req.body;
            const name = data.name;
            const spec = data.spec;

            if(!name || !spec){
                return res.json({
                    "Error": "Name and spec are required!"
                })
            }

            const doctor = new Doctor({name, spec})

            await doctor.save()

            return res.send(doctor)
        }catch(e){
            return res.json({
                "Error": e
            })
        }
    }

}

module.exports = new DoctorController()