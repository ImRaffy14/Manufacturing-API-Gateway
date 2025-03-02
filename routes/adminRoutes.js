const express = require('express')
const { hrAnnouncement, adminGetAccounts } = require('../controller/admin/adminController')

const router = express.Router()

//GET ACCOUNTS
router.get('/get-accounts', adminGetAccounts)

// GET HR4 ANNOUNCEMENT
router.get('/hr4-announcement', hrAnnouncement)

module.exports = router