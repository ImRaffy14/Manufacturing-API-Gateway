const express = require('express')
const { updatePurchaseOrder, transferProducts } = require('../controller/logistic/logistic2Controller')

const router = express.Router()

// UPDATE PURCHASE ORDER FOR FINANCE
router.post('/purchase-order-update', updatePurchaseOrder)

// TRANSFER PRODUCTS
router.post('/transfer-products', transferProducts)


module.exports = router