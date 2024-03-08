const TheUser = require('../models/UserModel')

const registerController = async(req,res)=>{
    const {name,email,password} = req.body;

    // check if any fields are empty
    if(!name || !email || !password){
        res.send(400)
        throw Error("All Field are required")
    }

    // check for user already exist
    const userExist = await TheUser.findOne({email})
    if()
}