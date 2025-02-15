const express = require('express')
const { adminGetAccounts } = require('../controller/admin/adminController')

const router = express.Router()

//GET ACCOUNTS
router.post('/get-accounts', adminGetAccounts)

module.exports = router