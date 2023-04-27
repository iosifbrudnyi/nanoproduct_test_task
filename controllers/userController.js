const { User } = require("../models/models");

// {
//     id: 'uuid',
//     phone: '+7 926 578 85 14',
//     name: 'Вася',
//     ...anything
// }



class UserController{
    async create(req, res){
        try{
            const data = req.body;

            const name = data.name;
            const phone = data.phone;

            if(!name || !phone){
                return res.json({"Error": "name and phone are required!"})
            }

            const user = new User({phone, name})
            await user.save()

            return res.json(user);
        }catch(e){
            return res.json({"Error":e})
        }
    }

    get(req, res){
        res.json({"test" : "test"})
    }
}

module.exports = new UserController()