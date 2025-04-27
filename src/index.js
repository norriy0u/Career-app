const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // To parse JSON bodies

// Sample API endpoint
app.get('/your-endpoint', (req, res) => {
    res.json({ message: 'GET request received!' });
});

app.post('/your-endpoint', (req, res) => {
    console.log(req.body); // Check data in the backend
    res.json({ message: 'POST request received!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

