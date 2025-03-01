const express = require('express')
const { adminGetAccounts } = require('../controller/admin/adminController')

const router = express.Router()

//GET ACCOUNTS
router.get('/get-accounts', adminGetAccounts)

module.exports = router