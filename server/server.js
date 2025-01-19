const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the client directory
app.use(express.static('client'));

// Define an endpoint for currency conversion
app.get('/api/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    try {
        const response = await axios.get(process.env.CURRENCY_API_URL, {
            params: {
                apikey: process.env.CURRENCY_API_KEY,
                base_currency: from,
                currencies: to
            }
        });

        const rate = response.data.data[to].value; // Adjust based on actual API response structure
        const convertedAmount = (amount * rate).toFixed(2);
        
        res.json({ convertedAmount });
        
    } catch (error) {
        console.error("API call error:", error);
        res.status(500).send("Error fetching exchange rate");
    }
});

// Catch-all route for handling 404 errors
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/index.html'); // Serve index.html for any other routes
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});