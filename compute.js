/*
        function showSystemInfo() {
            // Get RAM information
            const ram = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "unknown";

            // Get CPU cores information
            const cpuCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown";

            alert(`This browser has access to approximately ${ram} of RAM and ${cpuCores} CPU cores.`);
        }
*/
//'complete'
const peer = new Peer();
if(document.cookie){const peer = new Peer(document.cookie);}else{const peer = new Peer();}
let conn;

peer.on('open', (id) => {
    document.cookie=id
    console.log('My peer ID is: ' + id);
    alert('Your peer ID is: ' + id);
    document.getElementById('id').innerText=id
});

peer.on('connection', (connection) => {
    conn = connection;
    /*conn.on('data', (data) => {
        document.getElementById('output').innerText = data;
    });*/
});

function connectPeer() {
    //const peerId = prompt('Enter peer ID:');
    conn = peer.connect(peerId);
    conn.on('open', () => {
        console.log(peerId+' connected');
    });
    conn.on('data', (data) => {
        console.log(data)//document.getElementById('output').innerText = data;
    });
}

function sendData() {
    const data = document.getElementById('codearea').value;
    if (conn && conn.open) {
        conn.send(data);
    } else {
        alert('Not connected to any peer');
    }
}



// to run code in chunks

function createAsyncFunction(code) {
    return new Function(`return async () => { ${code} }`)();
}

async function runChunks(code, chunkSize) {
    const lines = code.split(';').map(line => line.trim()).filter(Boolean);
    
    for (let i = 0; i < lines.length; i += chunkSize) {
        const chunk = lines.slice(i, i + chunkSize).join(';');
        const asyncFunc = createAsyncFunction(chunk);
        try {
            await asyncFunc();
        } catch (error) {
            console.error('Error executing chunk:', error);
        }
    }
}

//////////// Example usage ///////////////////
const longCode = `
    console.log('Start');
    let a = 1;
    let b = 2;
    console.log(a + b);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Halfway through...');
    let c = a + b;
    console.log('c:', c);
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('End');
`;

//runChunks(longCode, 3); // Change chunk size as needed

//////////////////////////////////////////////
