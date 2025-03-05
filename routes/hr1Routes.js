const express = require('express')
const { getEmployeeRecords, timeTracking, getApprovedLeaves } = require('../controller/hr/hr1Controller')


const router = express.Router()

// GET EMPLOYEE RECORDS
router.get('/get-employee-records', getEmployeeRecords)

// GET TIME TRACKI
router.get('/get-time-tracking', timeTracking)

// GET APPROVED LEAVES
router.get('/get-approved-leaves', getApprovedLeaves)

module.exports = router