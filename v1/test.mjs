/*import pako from 'pako';

// Sample JavaScript code as a string
const jsCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emoji Finder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        #emojiContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
        }
        .emoji {
            font-size: 2em;
            margin: 10px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .emoji:hover {
            transform: scale(1.2);
        }
        #searchInput {
            width: 100%;
            max-width: 400px;
            padding: 10px;
            margin: 20px auto;
            display: block;
            font-size: 1em;
        }
    </style>
</head>
<body>
    <h1>Emoji Finder</h1>
    <input type="text" id="searchInput" placeholder="Search for an emoji...">
    <div id="emojiContainer"></div>

    <script>
        const emojis = [
            "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆",
            "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😘",
            "😜", "😝", "😛", "🤑", "🤗", "🤔", "🤐", "🤨",
            "🤩", "🤪", "🤭", "🤓", "😎", "😕", "😟", "😮",
            "😯", "😲", "😳", "😵", "😡", "😠", "😤", "😣",
            "😖", "😫", "😩", "😨", "😰", "😱", "😳", "😵‍💫",
            "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "💀",
            "☠️", "👻", "💩", "🤖", "🎃", "😺", "😸", "😻",
            "😼", "😽", "🙀", "😿", "😾", "🐶", "🐱", "🐭",
            "🐹", "🐰", "🐸", "🐵", "🐒", "🦊", "🐻", "🐼",
            "🦁", "🐯", "🦒", "🦓", "🐘", "🦏", "🦒", "🐢",
            "🐍", "🦎", "🦖", "🐳", "🐬", "🐟", "🐠", "🐡",
            "🦈", "🐙", "🐚", "🦀", "🐋", "🐌", "🦚", "🐦",
            "🦉", "🦩", "🦢", "🦜", "🦚", "🐧", "🐦", "🐤",
            "🐣", "🐥", "🐺", "🦊", "🦝", "🐾", "🦁", "🐅",
            "🐆", "🐈", "🐕", "🐩", "🐾", "🐴", "🦄", "🐮",
            "🐗", "🐏", "🐑", "🦙", "🐐", "🦓", "🐪", "🐫",
            "🦒", "🐘", "🐍", "🦚", "🦩", "🦅", "🦉", "🦤",
            "🦢", "🐦", "🐧", "🐦", "🐤", "🐣", "🐥", "🐸"
            // Add more emojis as needed...
        ];

        const emojiContainer = document.getElementById('emojiContainer');
        const searchInput = document.getElementById('searchInput');

        function displayEmojis(filteredEmojis) {
            emojiContainer.innerHTML = '';
            filteredEmojis.forEach(emoji => {
                const emojiElement = document.createElement('div');
                emojiElement.className = 'emoji';
                emojiElement.textContent = emoji;
                emojiElement.addEventListener('click', () => {
                    alert(\`You clicked: \${emoji\}\`);
                });
                emojiContainer.appendChild(emojiElement);
            });
        }

        function filterEmojis() {
            const query = searchInput.value.toLowerCase();
            const filteredEmojis = emojis.filter(emoji => emoji.toLowerCase().includes(query));
            displayEmojis(filteredEmojis);
        }

        searchInput.addEventListener('input', filterEmojis);

        // Initially display all emojis
        displayEmojis(emojis);
    </script>
</body>
</html>
`;

// Original size
const originalSize = new Blob([jsCode]).size;
console.log('Original Size:', originalSize, 'bytes');

// Compress the JavaScript code
const compressed = pako.deflate(jsCode, { to: 'string' });
const compressedBase64 = Buffer.from(compressed).toString('base64');
const compressedSize = compressedBase64.length;

console.log('Compressed Size:', compressedSize, 'bytes');

// Calculate reduction percentage
const reductionPercentage = ((originalSize - compressedSize) / originalSize) * 100;

// Print the results
console.log('--- Compression Results ---');
console.log('Original Size:', originalSize, 'bytes');
console.log('Compressed Size:', compressedSize, 'bytes');
console.log('Reduction Percentage:', reductionPercentage.toFixed(2), '%');
console.log('Compressed Code (Base64):', compressedBase64);


//import { per } from 'peerjs';
// importPeer.js
// test.mjs
let Peer=require('peer')

// Create a PeerJS instance
const peer = new Peer();

peer.on('open', (id) => {
    console.log('My peer ID is: ' + id);
});

peer.on('connection', (conn) => {
    conn.on('data', (data) => {
        console.log('Received:', data);
    });
});

// Example to connect to another peer
const otherPeerId = 'other-peer-id'; // Replace with the actual peer ID
const conn = peer.connect(otherPeerId);
conn.on('open', () => {
    conn.send('Hello from ' + peer.id);
});


 Create a PeerJS instance
const Peer = new peer();

Peer.on('open', (id) => {
    console.log('My peer ID is: ' + id);
    document.getElementById('peerId').value = id; // Display peer ID
});*/

//import * as Peer from 'peerjs';
//const Peer = require('peerjs')
import { Peer } from 'peerjs'
const test = new Peer()
//const peer = new Peer();

// Wait for the connection to be established
peer.on('open', (id) => {
    console.log('My peer ID is: ' + id);
});

// Receive a call
peer.on('call', (call) => {
    call.answer(); // Answer the call
    call.on('stream', (remoteStream) => {
        const remoteVideo = document.createElement('video');
        remoteVideo.srcObject = remoteStream;
        remoteVideo.play();
        document.getElementById('remoteVideo').appendChild(remoteVideo);
    });
});

// Function to make a call
function makeCall(peerId) {
    const call = peer.call(peerId, localStream);
    call.on('stream', (remoteStream) => {
        const remoteVideo = document.createElement('video');
        remoteVideo.srcObject = remoteStream;
        remoteVideo.play();
        document.getElementById('remoteVideo').appendChild(remoteVideo);
    });
}
