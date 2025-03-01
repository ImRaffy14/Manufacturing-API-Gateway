const express = require('express')
const { budgetRequest, orderInformation, updatePurchaseOrder } = require('../controller/finance/financeController')

const router = express.Router()

// BUDGET REQUEST
router.post('/budget-request', budgetRequest)

// ORDER INFORMATION FROM CORE 1
router.post('/order-information', orderInformation)

// UPDATE PURCHASE ORDER STATUS
router.post('/update-purchase-order', updatePurchaseOrder)

module.exports = router