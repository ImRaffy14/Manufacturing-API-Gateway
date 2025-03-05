const express = require('express')
const { sendFinishProduct } = require('../controller/core/core2Controller')

const router = express.Router()

// RECEIVE FINISH PRODUCT TO LOGSITIC 2
router.post('/api/finished-product-transfer', sendFinishProduct)


module.exports = router