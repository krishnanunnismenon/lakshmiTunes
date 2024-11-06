
import User from '../models/user.model'

export const registerUser = async(req,res)=>{
    const {name,email,password,phoneNumber}={

    }

    const user = await User.create({
        name,
        email,
        password
    })
    res.send({
        
        message:'You are registered',
        data:user
    })
}