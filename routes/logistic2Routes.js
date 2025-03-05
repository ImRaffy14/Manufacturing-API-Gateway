const express = require('express')
const { updatePurchaseOrder } = require('../controller/logistic/logistic2Controller')

const router = express.Router()

// UPDATE PURCHASE ORDER FOR FINANCE
router.post('/purchase-order-update', updatePurchaseOrder)


module.exports = router