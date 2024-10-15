
        function showSystemInfo() {
            // Get RAM information
            const ram = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "unknown";

            // Get CPU cores information
            const cpuCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown";

            alert(`This browser has access to approximately ${ram} of RAM and ${cpuCores} CPU cores.`);
        }
