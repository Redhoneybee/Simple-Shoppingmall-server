const app = require('../index');
const { createServer } = require('http');

// config 
const config = require('../config');
const startServer = () => {
    const port = config.port;
    const server = createServer(app);

    server.listen(port, () => {
        console.log(`server start...(${port})`);
    })
}

startServer();