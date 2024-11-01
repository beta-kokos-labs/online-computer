/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Stats</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .stats {
            margin: 20px;
        }
    </style>
</head>
<body>
    <div class="stats">
        <h1>Performance Stats</h1>
        <div id="memory"></div>
        <div id="cpu"></div>
    </div>

    <script>
        function updateStats() {
            // Memory Stats
            const memoryInfo = performance.memory;
            const totalJSHeapSize = memoryInfo.totalJSHeapSize / (1024 ** 2); // in MB
            const usedJSHeapSize = memoryInfo.usedJSHeapSize / (1024 ** 2); // in MB
            const jsHeapSizeLimit = memoryInfo.jsHeapSizeLimit / (1024 ** 2); // in MB

            document.getElementById('memory').innerHTML = `
                <h2>Memory Stats</h2>
                <p>Total JS Heap Size: ${totalJSHeapSize.toFixed(2)} MB</p>
                <p>Used JS Heap Size: ${usedJSHeapSize.toFixed(2)} MB</p>
                <p>JS Heap Size Limit: ${jsHeapSizeLimit.toFixed(2)} MB</p>
            `;

            // CPU Stats (using simple performance.now())
            const cpuLoad = (performance.now() % 100).toFixed(2); // Simulated CPU load percentage
            document.getElementById('cpu').innerHTML = `
                <h2>CPU Stats</h2>
                <p>Simulated CPU Load: ${cpuLoad}%</p>
            `;
        }

        setInterval(updateStats, 2000); // Update every 2 seconds
        updateStats(); // Initial call
    </script>
</body>
</html>
*/
