import Peer from 'https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js';

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
conn = peer.connect(public_code);
error = peer.connect(public_code+'-console-log')
error = peer.connect(public_code+'-console-error')
conn.on('open', () => {
console.log('Connected to peer:', peerId);
})
conn.on('data', (data) => {
    const data = data
    let run = new Function(data)
    run()
    if (conn && conn.open) {
        conn.send('complete')//data);
    } else {
        alert('Not connected to any peer');
    }
    
    
    //document.innerHTML = `<script>${data}</script>`
});}

//return new Function(`return async () => { ${code} }`)()

        // Custom function to append messages to the terminal
        // Override console.log
        console.log = function(message) {
            appendToTerminal(message, 'log');
        };

        // Override console.error
        console.error = function(message) {
            appendToTerminal(message, 'error');
        };

        // Optionally, handle uncaught errors (e.g., from try-catch)
        window.onerror = function(message, source, lineno, colno, error) {
            //appendToTerminal(`Error: ${message} at ${source}:${lineno}:${colno}`, 'error');
            return true;  // Prevent default browser handling (optional)
        };

        // Test logs and errors
        console.log('Welcome to the custom terminal!');
        console.log('This is a normal log message.');
        console.error('Oops, something went wrong!');
        throw new Error('This is an uncaught error example.');
