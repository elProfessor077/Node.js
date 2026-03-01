const EventEmitter = require ('events');

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello  ${username} welcome to Node.js`);
})
//events helps in asynchronous programming without callback hell
//they do not choke your cpu

//Emit the event

eventEmitter.once('pushNotify', () => {
    console.log("This event will run only once ");
})
// const myListener = () => console.log("I am a test listener");
// eventEmitter.on("test",myListener)
// eventEmitter.emit("test")

eventEmitter.emit("greet","parth");
eventEmitter.emit("greet", "Dwivedi");
eventEmitter.emit("pushNotify");
eventEmitter.emit("pushNotify");

const myListener = () => console.log("I am a test listener");
eventEmitter.on("test",myListener)
eventEmitter.emit("test",myListener);
eventEmitter.removeListener("test",myListener);
eventEmitter.emit("test");