const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// SEND RAW MATERIALS
const sendRawMaterials = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.CORE2_SERVICE_URL}/api/auditLogistic1`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Core 2 Service (Sent Raw Materials)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Core 2: Server:${server} ${error.message}`)
    }
}

// UPDATE RAW MATERIAL STATUS
const updateRawMaterialStatus = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.CORE2_SERVICE_URL}/api/rawMaterialRequest/update`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Core 2  Service (Update Raw Material Status)`);
        res.status(response.status).json(response.data); 
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Core 2: Server:${server} ${error.message}`)
    }
}

// FINISH PRODUCT UPDATE STATUS
const updateFinishedProductStatus = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.CORE2_SERVICE_URL}/finished-product-transfer/updateStatus`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Core 2  Service (Update Status of Finish product)`);
        res.status(response.status).json(response.data); 
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Core 2: Server:${server} ${error.message}`)
    }
}

module.exports = {
    sendRawMaterials,
    updateRawMaterialStatus,
    updateFinishedProductStatus
}