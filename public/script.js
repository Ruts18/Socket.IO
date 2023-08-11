const socket = io();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});


socket.on('chat message', (msg) => {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});
