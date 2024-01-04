// app_2.js

const express = require('express');
const router = express.Router(); // Create an Express router

const data = require('./data');

// Endpoint for retrieving business cashflow details
router.get('/businessCashflow/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const businessCashflowDetails = data.getBusinessCashflowDetails(profileID);

    if (businessCashflowDetails) {
        res.json(businessCashflowDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

module.exports = router; // Export the router
