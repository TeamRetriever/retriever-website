const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for other HTML pages
app.get('/get-started', (req, res) => {
    res.sendFile(path.join(__dirname, 'get-started.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'team.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Retriever website is running at http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});
