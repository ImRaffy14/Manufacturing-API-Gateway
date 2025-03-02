const { generateServiceToken } = require('../../middleware/tokenServiceGenerator')
const axios = require('axios');

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// GET ACCOUNTS
const adminGetAccounts = async (req, res) => {
    const server = req.decoded.service
    try {
        if(server === "Finance"){
            const token = generateServiceToken(server);
            const response = await axios.get(`${process.env.ADMIN_SERVICE_URL}/api/finance/get`,{
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(`[${getCurrentDateTime()}] ${server} Requested to Admin Service (Get Accounts)`);
            res.status(response.status).json(response.data);
        }
        else if(server === "Logistic 1" || server === "Logistic 2"){
            const token = generateServiceToken(server);
            const response = await axios.get(`${process.env.ADMIN_SERVICE_URL}/api/logisticusers/get`,{
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(`[${getCurrentDateTime()}] ${server} Requested to Admin Service (Get Accounts)`);
            res.status(response.status).json(response.data);
        }
        else if(server === "Core 1" || server === "Core 2"){
            const token = generateServiceToken(server);
            const response = await axios.get(`${process.env.ADMIN_SERVICE_URL}/api/coreusers/get`,{
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(`[${getCurrentDateTime()}] ${server} Requested to Admin Service (Get Accounts)`);
            res.status(response.status).json(response.data);
        }
        else if(server === "Hr 1" || server === "Hr 2" || server === "Hr 3" || server === "Hr 4" ){
            const token = generateServiceToken(server);
            const response = await axios.get(`${process.env.ADMIN_SERVICE_URL}/api/hrusers/get`,{
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(`[${getCurrentDateTime()}] ${server} Requested to Admin Service (Get Accounts)`);
            res.status(response.status).json(response.data);
        }
        else{
            res.status(401).json({ msg: "Unauthorized Server" })
        }
        
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
        console.error(`Error Admin: Server:${server} ${error.message}`)
    }
}

module.exports = {
    adminGetAccounts
}