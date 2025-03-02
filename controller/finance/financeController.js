const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// REQUEST BUDGET SERVICE
const budgetRequest = async (req, res) => {
    try {
        const server = req.decoded.service
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.FINANCE_SERVICE_URL}/API/BudgetRequests/RequestBudget`, req.body,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Finance Service (Budget Request)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Finance: Server:${server} ${error.message}`)
    }
}

// RECEIVE ORDER INFORMATION FROM CORE 2
const orderInformation = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.FINANCE_SERVICE_URL}/API/ORDER/post`, req.body,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Finance Service (Sent Order Information)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Finance: Server:${server} ${error.message}`)
    }
}

// UPDATE PURCHASE ORDER STATUS
const updatePurchaseOrder = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.post(`${process.env.FINANCE_SERVICE_URL}/API/PURCHASE-ORDER/update`, req.body,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Finance Service (Updates Purchase Order)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Finance: Server:${server} ${error.message}`)
    }
}

// GET FINANCIAL REPORTS
const getFinancialReports = async (req, res) => {
    const server = req.decoded.service
    try {
        const token = generateServiceToken(server);
        const response = await axios.get(`${process.env.FINANCE_SERVICE_URL}/integrate/get-financial-reports`,{
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log(`[${getCurrentDateTime()}] ${server} Requested to Finance Service (Get Financial Report)`);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Finance: Server:${server} ${error.message}`)
    }
}


module.exports = {
    budgetRequest,
    orderInformation,
    updatePurchaseOrder,
    getFinancialReports
}