const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter()

eventEmitter.on('subscribe', text => {
    console.log(`Thanks for subscribing to ${text}`);
  });
  eventEmitter.emit('subscribe', 'college wallah');