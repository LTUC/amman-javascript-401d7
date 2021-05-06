const options = {
  transports: ['websocket'],
};
const socket = io('localhost:3000/', options);

const staffName = prompt("What's your name");

socket.on('connect', () => {
  console.log('Admin connected');
  // emitting to the server
  socket.emit('join', { room: 'staff', name: staffName });
  // listing to the newTicket event that was generated from the server
  socket.on('newTicket', (payload) => {
    //3a
    render(payload);
  });
  socket.on('claimed', handleClaimedTicket);
  socket.on('onlineStaff', (payload) => {
    renderAside(payload.name, payload.id);
  });
  socket.on('offlineStaff', (payload) => {
    const el = document.getElementById(payload.id);
    el.remove();
  });
});
function renderAside(name, id) {
  const container = document.getElementById('online-staff');
  const h2El = document.createElement('h2');
  h2El.textContent = name;
  h2El.id = id;
  container.append(h2El);
}
function render(payload) {
  const container = document.getElementById('tickets');
  const articleEl = document.createElement('article');
  container.prepend(articleEl);
  articleEl.classList.add('ticket');
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = `${payload.question}`;
  const p1El = document.createElement('p');
  articleEl.append(p1El);
  p1El.textContent = `course: ${payload.type}`;
  const p2El = document.createElement('p');
  articleEl.append(p2El);
  p2El.textContent = `course: ${payload.course}`;
  const p3El = document.createElement('p');
  articleEl.append(p3El);
  p3El.textContent = `time: ${new Date(payload.created_at).toLocaleString()}`;
  const p4El = document.createElement('p');
  articleEl.append(p4El);
  p4El.textContent = `Name: ${payload.studentName}`;
  const buttonEl = document.createElement('button');
  articleEl.append(buttonEl);
  buttonEl.textContent = `claim`;
  buttonEl.id = payload.id;
  buttonEl.addEventListener('click', () => handleClaim(payload.id, payload.socketId));
}

function handleClaim(id, socketId) {
  console.log('id', id, 'studentID', socketId);
  socket.emit('claim', { id, name: staffName, studentId: socketId });
  handleClaimedTicket({ id, name: staffName }); // I wouldn't do this we should have different thing for the action emitter
}

function handleClaimedTicket(payload) {
  const buttonEl = document.getElementById(payload.id);
  console.log(buttonEl, payload);
  buttonEl.disabled = true;
  buttonEl.textContent = `Claimed by ${payload.name}`;
  buttonEl.style.backgroundColor = '#a9a9a9';
}
