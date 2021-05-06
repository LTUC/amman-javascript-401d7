const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
let currentRoom;
const queue = {
  tickets: [],
  staff: [],
};
io.listen(server);
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ data: 'all is good' });
});
io.on('connection', (socket) => {
  //1 when client connect
  console.log('a user Connected', socket.id);
  // socket.emit('hello', { class: '401d7' });
  socket.on('join', (payload) => {
    currentRoom = payload.room;
    // join will change the socket place to a room => all the messages will be in that room no one outside will see
    socket.join(currentRoom);
    const data = { name: payload.name, id: socket.id };
    queue.staff.push(data);
    socket.in(currentRoom).emit('onlineStaff', data);
  });
  socket.on('createTicket', (payload) => {
    //2s
    // console.log(payload);
    // when a student send a ticket
    // we need to send the ticket to all the TA's in the staff room
    // currentRoom = staffRoom
    const data = { id: uuidv4(), ...payload };
    queue.tickets.push(data);
    socket.in(currentRoom).emit('newTicket', { ...data, socketId: socket.id }); // 3s
  });
  socket.on('claim', (payload) => {
    // when a TA claim the ticket
    // 1 notify the student who sent the ticket
    socket.to(payload.studentId).emit('claimed', { staffName: payload.name });
    // 2 send to all the TAs except the one who claimed it in the staffRoom except the one who claimed it
    socket.to(currentRoom).emit('claimed', { id: payload.id, name: payload.name });
  });
  socket.on('getall', () => {
    // console.log(queue);
    queue.staff.forEach((staff) => {
      socket.emit('onlineStaff', { name: staff.name });
    });
    queue.tickets.forEach((ticket) => {
      socket.emit('newTicket', ticket);
    });
  });
  socket.on('disconnect', () => {
    socket.to(currentRoom).emit('offlineStaff', { id: socket.id });
    queue.staff = queue.staff.filter((s) => s.id !== socket.id);
  });
});
server.listen(PORT, () => console.log('Listening on PORT ' + PORT));
