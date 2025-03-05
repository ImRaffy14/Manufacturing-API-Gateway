const express = require('express')
const { getDocument, getEmployeeViolation, updateStatus, getIncentiveEmployee } = require('../controller/hr/hr3Controller')

const router = express.Router()


// GET DOCUMENTS
router.get('/get-documents', getDocument)

// EMPLOYEE VIOLATION
router.get('/get-employee-violation', getEmployeeViolation)

// TO UPDATE STATUS FROM FINANCE
router.post('/update-status-purchase-order', updateStatus)

// GET EMPLOYEE INCENTIVES
router.get('/get-incentive-employee', getIncentiveEmployee)


module.exports = router