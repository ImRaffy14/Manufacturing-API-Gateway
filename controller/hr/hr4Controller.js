const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// GET GRIEVANCES
const getGrievances = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR4_SERVICE_URL}/EmComplaint`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 4 Service (Get Grievances)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 4: Server:${server} ${error.message}`)
    }
}

// UPDATE BUDGET REQUEST STATUS
const updateBudgetRequestStatus = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.HR4_SERVICE_URL}/api/budget-requests/updateStatusFinance`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 4 Service (Update Budget Request Status)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 4: Server:${server} ${error.message}`)
    }
}

module.exports = {
    getGrievances,
    updateBudgetRequestStatus
}