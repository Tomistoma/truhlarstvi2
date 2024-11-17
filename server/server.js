const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// Handle fallback to serve "public/index.html" for all other routes
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`A Server running at http://127.0.0.1:${PORT}/`);
});
