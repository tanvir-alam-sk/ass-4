const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Endpoint to send multiple files
app.get('/download-multiple', (req, res) => {
    const files = [
        path.join(__dirname, 'files', 'file1.txt'),
        path.join(__dirname, 'files', 'file2.txt'),
    ];

    const fileStreams = files.map((file) => {
        return { name: path.basename(file), stream: file };
    });

    res.json(fileStreams);
});

// Serve static files (make them accessible via HTTP)
app.use('/files', express.static(path.join(__dirname, 'files')));

// Start the server
app.listen(PORT, () => {
    console.log('Successfully started serverhttp.');
})