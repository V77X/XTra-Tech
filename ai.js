const WORKER_URL = "https://xtra-gemini.xcrasher67.workers.dev/";

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearChat");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    // Retains your line breaks
    div.innerHTML = text.replace(/\n/g, "<br>");
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    return div;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, "user");
    userInput.value = "";

    const loading = addMessage("Thinking...", "bot");

    try {
        const response = await fetch(WORKER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        loading.remove();

        // Extracts only the clean text response from Groq API
        let reply = "";

        if (data.choices && data.choices.length > 0) {
            reply = data.choices[0].message.content;
        } else if (data.error) {
            reply = "Error: " + (data.error.message || JSON.stringify(data.error));
        } else {
            reply = "Sorry, I couldn't process that response.";
            console.error("Raw response:", data);
        }

        addMessage(reply, "bot");

    } catch (e) {
        loading.remove();
        console.error("Fetch error:", e);
        addMessage("Connection error. Please check your internet or try again.", "bot");
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
