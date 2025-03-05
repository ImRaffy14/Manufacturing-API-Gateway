const express = require('express')
const { getGrievances, updateBudgetRequestStatus } = require('../controller/hr/hr4Controller')


const router = express.Router()

// GET GRIEVANCES
router.get('/EmComplaint', getGrievances)

// UPDATE BUDGET REQUEST STATUS
router.put('/api/budget-requests/updateStatusFinance', updateBudgetRequestStatus)

module.exports = router