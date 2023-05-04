const User = require('../models/User')
const Item = require('../models/Item')

const getAllUsers = async (req,res)=>{
    const user = await User.find({})
    res.status(200).json({ user })
}

const createUser = async (req,res)=>{
    const user = await User.create(req.body)
    res.status(201).json({ user })
}

const updateInfo = async (req,res)=>{
    const item = await Item.findOneAndUpdate({name: "item"},req.body,{new:true,runValidators:true})
    res.status(200).json({ item })
}

const getInfo = async (req,res)=>{
    const item = await Item.find({})
    res.status(200).json({ item })
}

module.exports = {getAllUsers, createUser, updateInfo, getInfo}