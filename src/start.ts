import { Server } from './server';

(async () => {
    const server = new Server();

    try {
        console.log('App Started');
        await server.init();
    } catch (e) {
        console.log(`Execution Error: ${e.message}`);
    }
})()