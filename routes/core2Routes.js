const express = require('express')
const { sendRawMaterials, updateRawMaterialStatus, updateFinishedProductStatus } = require('../controller/core/core2Controller')

const router = express.Router()

// SEND RAW MATERIALS
router.post('/send-raw-materials', sendRawMaterials)

// UPDATE RAW MATERIAL STATUS
router.post('/update-raw-material-status', updateRawMaterialStatus)

// FINISH PRODUCT UPDATE STATUS
router.post('/update-status-fp', updateFinishedProductStatus)

module.exports = router