const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// REQUEST RAW MATERIAL
const requestRawMaterial = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.LOGISTIC1_SERVICE_URL}/api/rawmaterial/request`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Logistic 1 Service (Request raw material)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Logistic 1: Server:${server} ${error.message}`)
    }
}

// TRACK BUDGET REQUEST STATUS
const updateStatus = async (req,res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.LOGISTIC1_SERVICE_URL}/api/purchase-order/updateStatusFinance`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Logistic 1 Service (Updates Status)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Logistic 1: Server:${server} ${error.message}`)
    }
}

// QUALITY CONTROL FROM LOGISTIC 2
const qcInspection = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.LOGISTIC1_SERVICE_URL}/api/qualityControl/qc-inspections`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Logistic 1 Service (Sent Quality Control)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Logistic 1: Server:${server} ${error.message}`)
    }
}


module.exports = {
    requestRawMaterial,
    updateStatus,
    qcInspection
}