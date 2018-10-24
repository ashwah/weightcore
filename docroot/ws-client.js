var ws = new WebSocket("ws://localhost:8081");

ws.onopen = function() {
  setValue('Online');
}

ws.onmessage = function(payload) {
  setValue(payload.data);
};

ws.onclose = function() {
  setValue('Offline');
}

function setValue(value) {
  document.getElementById('message').innerText = value.toString();
}
