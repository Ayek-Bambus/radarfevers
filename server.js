const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(express.static('public'));

let gameData = {
    entities: [],
    localPlayer: {}
};

// Endpoint dla C# Clienta
app.post('/update', (req, res) => {
    gameData = req.body;
    
    // Rozsyłamy dane do wszystkich przeglądarek
    io.emit('radarUpdate', gameData);
    
    res.status(200).send({ status: 'ok' });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Radar server running on http://localhost:${PORT}`);
});
