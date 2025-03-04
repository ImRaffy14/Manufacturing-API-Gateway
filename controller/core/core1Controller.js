const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// GET WORK ORDERS
const getWorkOrders = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.CORE1_SERVICE_URL}/api/workOrders/list`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Core 1 Service (Get Work Orders)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Core 1: Server:${server} ${error.message}`)
    }
}

module.exports = {
    getWorkOrders
}
