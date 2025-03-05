const express = require('express')
const { getWorkOrders } = require('../controller/core/core1Controller')

const router = express.Router()

// GET WORK ORDERS
router.get('/api/workOrders', getWorkOrders)

// TO RECEIVE ORDER INFORMATION
router.post('/api/order', receiveOrderInformation)

module.exports = router