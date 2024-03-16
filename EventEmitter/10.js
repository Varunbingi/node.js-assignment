const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter()

eventEmitter.on('subscribe', text => {
    console.log(`Thanks for subscribing to ${text}`);
  });
  eventEmitter.emit('subscribe', 'college wallah');
  
  console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  
  eventEmitter.setMaxListeners(5);
  
  console.log(
    `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
  