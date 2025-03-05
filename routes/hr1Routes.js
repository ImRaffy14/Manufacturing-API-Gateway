const express = require('express')
const { getEmployeeRecords, timeTracking, getApprovedLeaves, getHiredEmployees } = require('../controller/hr/hr1Controller')


const router = express.Router()

// GET EMPLOYEE RECORDS
router.get('/get-employee-records', getEmployeeRecords)

// GET TIME TRACKING
router.get('/get-time-tracking', timeTracking)

// GET APPROVED LEAVES
router.get('/get-approved-leaves', getApprovedLeaves)

// GET HIRED EMPLOYEE
router.get('/get-hired-employees', getHiredEmployees)

module.exports = router