const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}


// GET EMPLOYEE RECORDS
const getEmployeeRecords = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR1_SERVICE_URL}/api/uploaded-documents/all-docs`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 1 Service (Get Employee Records)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 1: Server:${server} ${error.message}`)
    }
}

// TIME TRACKING
const timeTracking = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR1_SERVICE_URL}/api/timetrack/approveSessions`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 1 Service (Get Time Tracking)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 1: Server:${server} ${error.message}`)
    }
}

// GET APPROVED LEAVES
const getApprovedLeaves = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR1_SERVICE_URL}/api/leave/get-approved-leaves`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 1 Service (Get Approved Leaves)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 1: Server:${server} ${error.message}`)
    }
}

// GET HIRED EMPLOYEES
const getHiredEmployees = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR1_SERVICE_URL}/api/hr/all-employee`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 1 Service (Get Hired Employees)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 1: Server:${server} ${error.message}`)
    }
}

module.exports = {
    getEmployeeRecords,
    timeTracking,
    getApprovedLeaves,
    getHiredEmployees
}
