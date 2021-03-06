const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addUser)
router.post('/addadmin', actions.addAdmin)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticateuser', actions.authenticateUser)

router.post('/authenticateadmin', actions.authenticateAdmin)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)



module.exports = router