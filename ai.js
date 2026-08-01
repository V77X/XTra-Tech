
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearChat");

// Replace this with your Cloudflare Worker URL later
const API_URL = "YOUR_BACKEND_URL";

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = "message " + type;
    msg.innerHTML = text.replace(/\n/g, "<br>");
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msg;
}

async function sendMessage() {
    const text = userInput.value.trim();

    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    const loading = addMessage("⏳ Thinking...", "bot");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        const data = await response.json();

        loading.remove();

        addMessage(data.reply || "No response received.", "bot");

    } catch (error) {

        loading.remove();

        addMessage("❌ Unable to connect to AI.", "bot");
        console.error(error);

    }
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

clearBtn.addEventListener("click", function() {
    chatBox.innerHTML = `
    <div class="message bot">
    Hello 👋<br><br>
    I'm XTra Tech AI.<br>
    How can I help you today?
    </div>`;
});
