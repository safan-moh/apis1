// app_3.js

const express = require('express');
const router = express.Router(); // Create an Express router

const data = require('./data');

// Endpoint for retrieving personal debt details
router.get('/capacityPersonalDebt/:profileID', (req, res) => {
    const profileID = req.params.profileID;
    const personalDebtDetails = data.getPersonalDebtDetails(profileID);

    if (personalDebtDetails) {
        res.json(personalDebtDetails);
    } else {
        res.status(404).json({ error: 'ProfileID not found' });
    }
});

module.exports = router; // Export the router
