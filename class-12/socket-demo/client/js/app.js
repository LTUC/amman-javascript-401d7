const options = {
  transports: ['websocket'],
};
const socket = io('localhost:3000/', options);
const formEl = document.getElementById('questions-form');
const studentName = prompt('what is your name');
formEl.addEventListener('submit', handleSubmit);
socket.on('connect', () => {
  //1 if the client connect!!
  console.log('Connected!!');
  socket.on('hello', (payload) => {
    console.log('hello', payload.class);
  });
  socket.on('claimed', (payload) => {
    alert(`${payload.staffName} claimed your ticket!`);
  });
});
function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    studentName,
    question: e.target.question.value,
    type: e.target.type.value,
    course: e.target.course.value,
    created_at: Date.now(),
  };
  // send the createTicket to the backend **server**
  socket.emit('createTicket', payload); //2c
  document.getElementsByClassName('form-card')[0].style.display = 'none';
}
