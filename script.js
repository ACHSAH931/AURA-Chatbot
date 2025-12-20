function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.toLowerCase();
    const chatBox = document.getElementById("chat-box");

    if (message === "") return;

    chatBox.innerHTML += `<div class="message user-message">${input.value}</div>`;

    const typingIndicator = document.getElementById("typing-indicator");
typingIndicator.style.display = "block";

setTimeout(() => {
    let response = getBotResponse(message);
    typingIndicator.style.display = "none";
    chatBox.innerHTML += `<div class="message bot-message">${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}, 800);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! I'm Aura, your health information assistant. How can I help you today?";
    } 
    else if (message.includes("fever")) {
        return "For fever, rest well, stay hydrated, and consult a doctor if it persists.";
    }
    else if (message.includes("headache")) {
        return "Headaches can have many causes. Try rest and hydration, and seek medical advice if severe.";
    }
    else if (message.includes("covid")) {
        return "If you suspect COVID-19, consider testing and follow local health guidelines.";
    }
    else if (message.includes("cold")) {
        return "For a common cold, rest, fluids, and over-the-counter remedies can help alleviate symptoms.";
    }
    else if (message.includes("gastritis")) {
        return "Gastritis can be managed with dietary changes and medications. Consult a healthcare provider for proper diagnosis and treatment.";
    }
    else if (message.includes("help")) {
        return "Sure! You can ask me about common health issues like fever, headache, cold, COVID-19, and gastritis.";
    }
    else if (message.includes("cut")) {
        return "For a cut, clean the wound with water, apply an antiseptic, and cover it with a sterile bandage. Seek medical attention if it's deep or bleeding heavily.";
    }
    else if (message.includes("dizzy")) {
        return "Dizziness can be caused by various factors. Sit or lie down immediately, and if it persists, seek medical advice.";
    }
    else if (message.includes("stomach ache")) {    
        return "Stomach aches can be due to various reasons. Try resting, avoiding spicy foods, and staying hydrated. If it continues, consult a doctor.";
    }
    else if (message.includes("back pain")) {
        return "For back pain, try gentle stretching, maintaining good posture, and applying heat or cold packs. If the pain is severe or persistent, see a healthcare professional.";
    }
    else if (message.includes("rash")) {
        return "Rashes can be caused by allergies, infections, or other conditions. Keep the area clean and dry, avoid scratching, and consult a doctor if it spreads or worsens.";
    }
    else if (message.includes("sore throat")) {
        return "Sore throats can be due to infections or irritation. Gargle with warm salt water, stay hydrated, and rest your voice. If it persists, consult a doctor.";
    }
    else if (message.includes("burn")) {
        return "For burns, cool the area with water, avoid ice or butter, and cover with a sterile bandage. Seek medical attention for severe burns.";
    }
    else if (message.includes("bye")) {
        return "Goodbye! Stay healthy and take care.";
    }
    else if (message.includes("thank you") || message.includes("thanks")) {
        return "You're welcome! If you have any more questions, feel free to ask.";
    }
    else {
        return "I'm sorry, I don't understand that yet. Please ask a basic health-related question.";
    }
}

window.onload = function () {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="bot">Aura: Hello! I'm Aura. I can help with general health information. How can I assist you today?</div>`;
};

document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
  
function clearChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = `<div class="message bot-message">
        Hello! I'm Aura. How can I help you today?
    </div>`;
}


