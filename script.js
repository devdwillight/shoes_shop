function toggleChatbot() {
  var chatbotContainer = document.getElementById("chatbotContainer");
  if (chatbotContainer.style.display === "none") {
    chatbotContainer.style.display = "block";
  } else {
    chatbotContainer.style.display = "none";
  }
}
function sendMessage() {
  var messageInput = document.getElementById("message");
  var message = messageInput.value;

  if (message !== "") {
    var chatbox = document.getElementById("admin");
    var newMessage = document.createElement("div");
    newMessage.classList.add("message");

    var sender = document.createElement("span");
    sender.classList.add("sender");
    sender.textContent = "Bạn:";
    newMessage.appendChild(sender);

    var messageContent = document.createElement("span");
    messageContent.textContent = message;
    newMessage.appendChild(messageContent);

    var timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    var date = new Date();
    var time = date.toLocaleTimeString();
    timestamp.textContent = time;
    newMessage.appendChild(timestamp);

    chatbox.appendChild(newMessage);

    // Gọi chat bot
    var botResponse = getBotResponse(message);
    displayBotResponse(botResponse);

    messageInput.value = "";
  }
}
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Kiểm tra nút nhấn là phím Enter
    sendMessage();
  }
}

// Gắn sự kiện handleKeyPress vào ô input tin nhắn
var messageInput = document.getElementById("message");
messageInput.addEventListener("keypress", handleKeyPress);
function getBotResponse(message) {
  // Xử lý tin nhắn của người dùng và trả về phản hồi của chat bot
  // Tùy chỉnh logic xử lý phản hồi của chat bot theo nhu cầu của bạn
  if (message.toLowerCase().includes("xin chào")) {
    return "Chào bạn! Rất vui được gặp bạn.";
  } else {
    return "HI!. How I can help you ?";
  }
}

function displayBotResponse(response) {
  var chatbox = document.getElementById("admin");
  var newMessage = document.createElement("div");
  newMessage.classList.add("message");

  var sender = document.createElement("span");
  sender.classList.add("sender");
  sender.textContent = "admin:";
  newMessage.appendChild(sender);

  var messageContent = document.createElement("span");
  messageContent.textContent = response;
  newMessage.appendChild(messageContent);

  var timestamp = document.createElement("span");
  timestamp.classList.add("timestamp");
  var date = new Date();
  var time = date.toLocaleTimeString();
  timestamp.textContent = time;
  newMessage.appendChild(timestamp);

  chatbox.appendChild(newMessage);
}
