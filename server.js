const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require("fs");

dotenv.config();

// IMPORT ROUTERS
const adminRoutes = require('./routes/adminRoutes')
const financeRoutes = require('./routes/financeRoutes')
const hr1Routes = require('./routes/hr1Routes')
const hr2Routes = require('./routes/hr2Routes')
const hr3Routes = require('./routes/hr3Routes')
const logistic2Routes = require('./routes/logistic2Routes')
const logistic1Routes = require('./routes/logistic1Routes')
const core1Routes = require('./routes/core1Routes')
const core2Routes = require('./routes/core2Routes')
const hr4Routes = require('./routes/hr4Routes')


// EXPRESS APP
const app = express();

// Enable trust proxy to handle X-Forwarded-For header
app.set('trust proxy', 1);

// SECURITY MIDDLEWARES
app.use(helmet());
app.use(cors({
    origin: '',
    methods: ['GET', 'POST',],
    }
));
app.use(express.json());

// LOGGING IPS
const blockedIPs = new Set(process.env.BLOCKED_IPS ? process.env.BLOCKED_IPS.split(",") : []);

app.use((req, res, next) => {
    let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    if (ip.includes(",")) {
        ip = ip.split(",")[0].trim();
    }

    console.log(`Client IP: ${ip} - ${new Date().toISOString()}`);

    if (blockedIPs.has(ip)) {
        console.warn(`❌ BLOCKED REQUEST from IP: ${ip}`);
        return res.status(403).json({ message: "Access Denied: Your IP is blocked." });
    }

    next();
});


const logSpammerIP = (ip) => {
    const logMessage = `SPAM DETECTED: ${ip} - ${new Date().toISOString()}\n`;
    
    fs.appendFileSync("spammer.log", logMessage);

    console.warn(`⚠️ IP Logged as Spammer: ${ip}`);
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

// RATE LIMITER
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 30,
    handler: (req, res) => {
        let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        if (ip.includes(",")) {
            ip = ip.split(",")[0].trim();
        }

        logSpammerIP(ip);
        return res.status(429).json({ message: "Too many requests, slow down!" });
    },
});

app.use(limiter);

// SERVER RESPONSE 
app.get('/', (req, res) => {
    res.send('MANUFACTURING API GATEWAY IS RUNNING!!');
});

// GET TIME
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}


// ENDPOINTS 
app.use('/admin', authenticateGatewayRequest, adminRoutes);
app.use('/finance', authenticateGatewayRequest, financeRoutes)
app.use('/hr1', authenticateGatewayRequest, hr1Routes)
app.use('/hr3', authenticateGatewayRequest, hr3Routes)
app.use('/logistic2', authenticateGatewayRequest, logistic2Routes)
app.use('/logistic1', authenticateGatewayRequest, logistic1Routes)
app.use('/hr2', authenticateGatewayRequest, hr2Routes)
app.use('/core1', authenticateGatewayRequest, core1Routes)
app.use('/core2', authenticateGatewayRequest, core2Routes)
app.use('/hr4', authenticateGatewayRequest, hr4Routes)



// SERVER
app.listen(process.env.PORT, () => {
    console.log(`[${getCurrentDateTime()}] listening to the port`, process.env.PORT);
});
