const express = require('express')
const { updatePurchaseOrder, inventoryRecords } = require('../controller/logistic/logistic2Controller')

const router = express.Router()

// UPDATE PURCHASE ORDER FOR FINANCE
router.post('/purchase-order-update', updatePurchaseOrder)

// RECEIVE INVENTORY RECORDS
router.post('/receive-inventory-records', inventoryRecords)


module.exports = router