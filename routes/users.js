const express = require('express')
const router = express.Router()
const {getAllUsers, createUser, updateInfo, getInfo} = require('../controllers/users')


router.post('/create', createUser)
router.get('/get', getAllUsers)
router.patch('/update', updateInfo)
router.get('/info', getInfo)

module.exports = router