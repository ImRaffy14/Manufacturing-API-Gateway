const jwt = require('jsonwebtoken');

// GENERATE SERVICE TOKEN
const generateServiceToken = (serviceName) => {
    const payload = { service: serviceName };
    return jwt.sign(payload, process.env.SERVICE_JWT_SECRET, { expiresIn: '10m' });
};

module.exports = {
    generateServiceToken
}