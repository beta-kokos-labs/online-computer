importScripts('https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js')

const peer = new Peer();
peer.on('connection', (connection) => {
    conn = connection;
    conn.on('open', () => {
        console.log('Connected to peer:', connection.peer);
    });
});
peer.on('error', (err) => {
    console.error(err);
});

function open(public_code){
conn = peer.connect(peerId);
conn.on('open', () => {
console.log('Connected to peer:', peerId);
}
conn.on('data', (data) => {
    const data = data
    document.innerHTML = `<script>${data}</script>`
});}
