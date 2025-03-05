const express = require('express')
const { getWorkOrders } = require('../controller/core/core1Controller')

const router = express.Router()

// RECEIVE FINISH PRODUCT TO LOGSITIC 2
router.post('/api/finished-product-transfer', sendFinishProduct)


module.exports = router