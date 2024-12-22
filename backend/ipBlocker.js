const blockedIPs = ['192.168.0.1'];  // Example: Add suspicious IPs to this array

// Middleware to block specific IPs
const ipBlocker = (req, res, next) => {
    if (blockedIPs.includes(req.ip)) {
        return res.status(403).send("Access denied. Your IP is blocked.");
    }
    next();
};

module.exports = ipBlocker;
