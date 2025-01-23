const express = require('express')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

dotenv.config()

// EXPRESS APP
const app = express()


// SECURITY MIDDLEWARES
app.use(helmet())
app.use(cors())
app.use(express.json())

// GENERATE SERVICE TOKEN
const generateServiceToken = (serviceName) => {
    const payload = { service: serviceName };
    return jwt.sign(payload, process.env.SERVICE_JWT_SECRET, { expiresIn: '1h' });
  };
  

// AUTHENTICATES INCOMING REQUESTS
const authenticateGatewayRequest = (req, res, next) => {
const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
if (!token) {
    return res.status(403).json({ message: 'No token provided' });
}

jwt.verify(token, process.env.GATEWAY_JWT_SECRET, (err, decoded) => {
    if (err) {
    return res.status(403).json({ message: 'Invalid token' });
    }
    req.decoded = decoded;
    next();
});
};


//RATE LIMITER
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
});

app.use(limiter)



//SERVER RESPONSE 
app.get('/', (req, res) => {
    res.send('MANUFACTURING API GATEWAY IS RUNNING!!')
} )


//GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  }


//ROUTES
//LOGISTICS1 TO FINANCE SERVICE (BUDGET REQUEST)
app.post('/logistics/request-budget', authenticateGatewayRequest, async (req, res) => {
    try {
      const token = generateServiceToken('Finance');
      const response = await axios.post(`${process.env.FINANCE_SERVICE_URL}/API/BudgetRequests/RequestBudget`, req.body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      res.status(response.status).json(response.data);
      console.log(`[${getCurrentDateTime()}] Logistic 1 Requested to Finance Service`)
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  });


//FINANCE TO LOGISTICS1 SERVICE (UPDATE STATUS)
app.post('/finance/update-budget-status', authenticateGatewayRequest, async (req, res) => {
    try {
      const token = generateServiceToken('Logistics1');
      const response = await axios.put(`${process.env.LOGISTIC1_SERVICE_URL}/api/purchase-order/updateStatusFinance`, req.body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      res.status(response.status).json(response.data);
      console.log(`[${getCurrentDateTime()}] Finance Requested to Logistics 1 Service`)
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  });

//SERVER
app.listen(process.env.PORT, () => {
    console.log(`[${getCurrentDateTime()}] listening to the port`, process.env.PORT)
})
