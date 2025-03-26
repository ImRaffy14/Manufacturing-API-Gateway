const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}


// GET EMPLOYEE RECORDS FOR HR 1
const getEmployeeRecords = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR2_SERVICE_URL}/api/employeedetails`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 2 Service (Get Employee Records)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 2: Server:${server} ${error.message}`)
    }
}

// GET EMPLOYEE TRAINING RECORDS FOR HR 4
const getEmployeeTrainingRecords = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.HR2_SERVICE_URL}/api/result`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to HR 2 Service (Get Employee Training Records)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Hr 2: Server:${server} ${error.message}`)
    }
}

module.exports = {
    getEmployeeRecords,
    getEmployeeTrainingRecords
}