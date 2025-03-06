const express = require('express')
const { sendRawMaterials } = require('../controller/core/core2Controller')

const router = express.Router()

// SEND RAW MATERIALS
router.post('/send-raw-materials', sendRawMaterials)

module.exports = router