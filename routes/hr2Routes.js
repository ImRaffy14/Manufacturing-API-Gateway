const express = require('express')
const { getEmployeeRecords, getEmployeeTrainingRecords } = require('../controller/hr/hr2Controller')


const router = express.Router()

// GET EMPLOYEE RECORDS FOR HR 1
router.get('/api/employees', getEmployeeRecords)

// GET EMPLOYEE TRAINING RECORDS FOR HR 4
router.get('/api/trainings', getEmployeeTrainingRecords)


module.exports = router