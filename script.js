// Initialize conversation map
const conversationMap = {
    'hi': 'Hello! How can I assist you today?',
    'hello': 'Hi there! How are you doing?',
    'how are you': 'I am doing great, thank you for asking! How about you?',
    'what is your name': 'I am Lyra, your friendly assistant!',
    'who is the builder of this lyra': 'The builder of Lyra is Rahul Chaube.',
    'what is the time': new Date().toLocaleTimeString(),
    'what is the date': new Date().toLocaleDateString(),
    'tell me a joke': 'Why don\'t skeletons fight each other? They don\'t have the guts!',
    'thanks': 'You\'re welcome! Let me know if you need anything else.',
    'help': 'How can I assist you today?',
    'what can you do': 'I can help you with searching information, setting reminders, talking to you, and much more!',
    'what is ai': 'AI stands for Artificial Intelligence. It refers to machines programmed to think and learn like humans.',
};

// Handle sending a question
document.getElementById('send-question').addEventListener('click', function () {
    const query = document.getElementById('user-input').value.trim().toLowerCase();
    if (query) {
        displayUserMessage(query); // Show the user message in the chat
        getAnswer(query);          // Get Lyra's response
        document.getElementById('user-input').value = ''; // Clear input field
    }
});

// Display user message
function displayUserMessage(query) {
    const chatLog = document.getElementById('chat-log');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = query;
    chatLog.appendChild(userMessage);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Display Lyra's response
function showResponse(answer) {
    const chatLog = document.getElementById('chat-log');
    const lyraResponse = document.createElement('div');
    lyraResponse.className = 'lyra-response';
    lyraResponse.textContent = answer;
    chatLog.appendChild(lyraResponse);
    chatLog.scrollTop = chatLog.scrollHeight;
    speakResponse(answer); // Speak the response
}

// Speak Lyra's response using SpeechSynthesis (native browser TTS)
function speakResponse(response) {
    // Check if SpeechSynthesis is available in the browser
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.pitch = 1; // You can adjust the pitch (range: 0 to 2)
        utterance.rate = 1;  // You can adjust the speed (range: 0.1 to 10)
        window.speechSynthesis.speak(utterance); // Speak the response
    } else {
        console.error("SpeechSynthesis API is not supported in this browser.");
    }
}

// Function to get an answer from the conversationMap or DuckDuckGo
function getAnswer(query) {
    if (conversationMap[query]) {
        const answer = conversationMap[query];
        showResponse(answer);
    } else if (isValidURL(query)) {
        window.open(query, '_blank'); // Open website if it's a valid URL
        showResponse(`Opening website: ${query}`);
    } else {
        fetchAnswerFromDuckDuckGo(query);
    }
}

// Check if the input is a valid URL
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (e) {
        return false;
    }
}

// Fetch answer from DuckDuckGo
function fetchAnswerFromDuckDuckGo(query) {
    const apiUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const answer = data.AbstractText || "Sorry, I couldn't find an answer.";
            showResponse(answer);
        })
        .catch(error => {
            showResponse("There was an error fetching the information.");
        });
}

// Enable dark mode toggle
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Enable voice search functionality
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

document.getElementById('voice-search').addEventListener('click', function () {
    recognition.start(); // Start voice recognition
});

recognition.onresult = function (event) {
    const query = event.results[0][0].transcript;
    displayUserMessage(query); // Show the question
    getAnswer(query);           // Get and speak the response
};

recognition.onerror = function (event) {
    alert("Error with voice recognition: " + event.error);
};

// Load the ResponsiveVoice API script dynamically if not loaded already
function loadResponsiveVoice() {
    if (typeof responsiveVoice === "undefined") {
        const script = document.createElement('script');
        script.src = "https://code.responsivevoice.org/responsivevoice.js?key=YOUR_KEY";
        script.onload = function () {
            console.log("ResponsiveVoice API loaded.");
        };
        document.body.appendChild(script);
    } else {
        console.log("ResponsiveVoice API is already loaded.");
    }
}

// Call this function to load the ResponsiveVoice script
loadResponsiveVoice();
