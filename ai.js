const API_KEY = "AQ.Ab8RN6I_tkWjbczChB4EjFa7Yub9L-mUJ97cFTEdaC4VYeK3Ag";

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearChat");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    div.innerHTML = text.replace(/\n/g, "<br>");
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";

    const loading = addMessage("Thinking...", "bot");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: message
                    }]
                }]
            })
        });

        const data = await response.json();

        loading.remove();

        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            data.error?.message ||
            "No response.";

        addMessage(reply, "bot");

    } catch (e) {
        loading.remove();
        addMessage("Connection error.", "bot");
    }
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        chatBox.innerHTML = `
        <div class="message bot">
        Hello 👋<br><br>
        I'm XTra Tech AI.<br>
        How can I help you today?
        </div>`;
    });
}
