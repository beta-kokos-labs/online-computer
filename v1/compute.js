importScripts('https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.3.1/peerjs.min.js')

const peer = new Peer();
peer.on('connection', (connection) => {
    conn = connection;
    conn.on('open', () => {
        console.log('Connected to peer:', connection.peer);
    });
});
/*
conn = peer.connect(peerId);
conn.on('open', () => {
    console.log('Connected to peer:', peerId);
}*/

conn.on('data', (data) => {
    const data = data
});

peer.on('error', (err) => {
    console.error(err);
});