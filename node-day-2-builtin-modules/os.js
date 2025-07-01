// Operating System
const os = require("os");

// System architecture
console.log("System architecture", os.arch());

// Operating system platform
console.log("OS Platform", os.platform());

// Stroage accessing
console.log("Total memory", (os.totalmem() / (1024 ** 3)).toFixed(2));

// System uptime
console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

// CPU details
console.log("CPU Details", os.cpus());

// Hostname
console.log("Hostname", os.hostname());

