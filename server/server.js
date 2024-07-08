const express = require('express');
const path = require('path');

var cors = require('cors')


const PORT = process.env.PORT || 3000;

const app = express()
app.use(cors())
app.use(express.static('public'));

// Middleware to serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
