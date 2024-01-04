// app.js

const express = require('express');
const app = express();
const app1Router = require('./app_1'); // Import the router for app_1
const app2Router = require('./app_2'); // Import the router for app_2
const app3Router = require('./app_3'); // Import the router for app_3

// Use the routers for app_1, app_2, and app_3
app.use('/app1', app1Router);
app.use('/app2', app2Router);
app.use('/app3', app3Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
