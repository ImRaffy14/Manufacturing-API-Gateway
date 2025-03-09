const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}


// UPDATE PURCHASE ORDER FINANCE
const updatePurchaseOrder = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.LOGISTIC2_SERVICE_URL}/api/invoices`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Logistic 2 Service (Update Purchase Order)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Logistic 2: Server:${server} ${error.message}`)
    }
}

// TRANSFER PRODUCTS
const transferProducts = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.LOGISTIC2_SERVICE_URL}/api/finishedproducttransfers`, req.body, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Logistic 2 Service (Transfer Products)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Logistic 2: Server:${server} ${error.message}`)
    }
}

module.exports = {
    updatePurchaseOrder,
    transferProducts
}