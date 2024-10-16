// Sample contacts

const contacts = ["Contact 1", "Contact 2", "Contact 3"];

// Stores chat history for each contact

const chatHistory = {

    "Contact 1": [],

    "Contact 2": [],

    "Contact 3": []

};

let currentContact = "Contact 1"; // Default contact

// Function to update the chat window with selected contact's chat history

function loadChatHistory(contact) {

    const chatBody = document.getElementById("chat-body");

    chatBody.innerHTML = ""; // Clear existing messages

    chatHistory[contact].forEach((message) => {

        const messageDiv = document.createElement("div");

        messageDiv.classList.add("message", message.type);

        messageDiv.textContent = message.text;

        chatBody.appendChild(messageDiv);

    });

    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom

}

// Switch between contacts when clicked in the sidebar

document.querySelectorAll(".sidebar ul li").forEach((contactItem, index) => {

    contactItem.addEventListener("click", function () {

        currentContact = contacts[index]; // Set current contact

        document.querySelector(".chat-header h3").textContent = `Chat with ${currentContact}`;

        loadChatHistory(currentContact); // Load the selected contact's chat history

    });

});

// Send message function (updated)

document.getElementById("send-button").addEventListener("click", sendMessage);

function sendMessage() {

    const messageInput = document.getElementById("message-input");

    const message = messageInput.value.trim();

    if (message === "") return;

    // Save message to the chat history of the current contact

    chatHistory[currentContact].push({ text: message, type: "sent-message" });

    loadChatHistory(currentContact); // Reload the chat window with updated messages

    // Clear the input field

    messageInput.value = "";

}