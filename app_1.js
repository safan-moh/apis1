// app_1.js

const express = require('express');
const router = express.Router(); // Create an Express router

const data = require('./data');

// Endpoint for retrieving business debt details
router.get('/capacityBusinessDebt/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const businessDebtDetails = data.getBusinessDebtDetails(profileID);

    if (businessDebtDetails) {
        res.json(businessDebtDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

module.exports = router; 
