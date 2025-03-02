const express = require('express')
const { requestRawMaterial, updateStatus, qcInspection } = require('../controller/logistic/logistic1Controller')

const router = express.Router()

// REQUEST RAW MATERIAL
router.post('/request-raw-material', requestRawMaterial)

// TRACK BUDGET REQUEST STATUS
router.post('/update-budget-req-status', updateStatus)

// QUALITY CONTROL FROM LOGISTIC 2
router.post('/qc-inspection', qcInspection)

module.exports = router