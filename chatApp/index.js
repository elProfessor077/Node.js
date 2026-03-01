const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom()

chat.on('join', (user)=>{
  console.log(`${user} has joined the chat room`);
});

chat.on('message', (user,message)=>{
  console.log(`${user} : ${message}`);
});

chat.on('leave', (user)=>{
  console.log(`${user} has left the chat room`);
});

//Simulating the chat 

chat.join('Alice')
chat.join('Bob')

chat.sendMessage("Alice","hey Bob,Hello to everyone");
chat.sendMessage("Bob","hey Alice,Hello to everyone");

chat.leave('Alice')
chat.sendMessage('ALice','this message wont be sent')
chat.leave('Bob');