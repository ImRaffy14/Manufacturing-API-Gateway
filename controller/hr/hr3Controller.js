const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}


// GET DOCUMENTS
const getDocument = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR3_SERVICE_URL}/api/benefit/get-uploaded-documents`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 3 Service (Get Documents)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 3: Server:${server} ${error.message}`)
    }
}

// EMPLOYEE VIOLATION
const getEmployeeViolation = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR3_SERVICE_URL}/api/violation/get-all-employee-violations`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 3 Service (Get Employee Violation)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 3: Server:${server} ${error.message}`)
    }
}

// TO UPDATE STATUS FROM FINANCE
const updateStatus = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.HR3_SERVICE_URL}/api/integration/updateStatusFinance`, req.body,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 3 Service (Updates the status of Budget Request)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 3: Server:${server} ${error.message}`)
    }
}


// GET INCENTIVE EMPLOYEE
const getIncentiveEmployee = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR3_SERVICE_URL}/api/incentive/get-all-employee-incentive-details`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 3 Service (Get Incentive Employee)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 3: Server:${server} ${error.message}`)
    }
}

module.exports = {
    getDocument,
    getEmployeeViolation,
    updateStatus,
    getIncentiveEmployee
}