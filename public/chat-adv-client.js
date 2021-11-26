document.addEventListener("DOMContentLoaded", function () {
  const socket = io('http://localhost:7000');

  // get user name and then tell the server
  let username = prompt('What\'s your username?');  
  document.querySelector(".messages-header h3").textContent = `Chat [${username}]`;
  socket.emit("join", username);

  socket.on("new user", username => {
    alert(`user ${username} has joined`);
  });

  /* This user is sending a new chat message */
  document.querySelector("#chatForm").addEventListener('submit', e => {
    e.preventDefault();
    const entry = document.querySelector("#entry");
    
  });

  /* User has clicked the leave button */
  document.querySelector("#leave").addEventListener('click', e => {
    e.preventDefault();
	
  });  

});

