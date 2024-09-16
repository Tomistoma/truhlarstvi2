const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

// Serve static files from the React app's "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// All requests for static assets like JS/CSS/images will automatically be served from the "build" directory

// For all other routes (that are not static files), serve the index.html file

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
