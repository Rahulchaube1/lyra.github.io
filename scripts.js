// Initialize conversation map
const conversationMap = {
    'hi': 'Hello! How can I assist you today?',
    'hello': 'Hi there! How are you doing?',
    'how are you': 'I am doing great, thank you for asking! How about you?',
    'what is your name': 'I am Lyra, your friendly assistant!',
    'who is the builder of this lyra': 'The builder of Lyra is Rahul Chaube.',
    'who is the inventor of lyra': 'The inventor of Lyra is Tarani.',
    'who invented you': 'I was invented by Tarani.',
    'how are you doing': 'I am doing great, thank you for asking!',
    'good morning': 'Good morning! Hope you have a great day ahead!',
    'good evening': 'Good evening! How was your day?',
    'good night': 'Good night! Sleep well and take care.',
    'bye': 'Goodbye! Have a wonderful day!',
    'thank you': 'You\'re welcome! Let me know if you need anything else.',
    'thanks': 'No problem! I\'m here to help.',
    'help': 'How can I assist you today?',
    'what can you do': 'I can help you with searching information, setting reminders, talking to you, and much more!',
    'who are you': 'I am Lyra, an AI assistant. I\'m here to help you!',
    'how do you work': 'I process your questions and provide answers based on various data sources!',
    'what is love': 'Love is a deep feeling of affection towards someone or something. It makes the world go round!',
    'do you have feelings': 'I don\'t have feelings like humans, but I can try to empathize and help you feel understood.',
    'what is your favorite color': 'I don\'t have a favorite color, but I think every color is beautiful in its own way!',
    'can you tell me a joke': 'Why don\'t skeletons fight each other? They don\'t have the guts!',
    'what is the weather': 'I\'m currently unable to fetch the weather, but you can check a weather app for details!',
    'tell me a story': 'Once upon a time, there was a curious little AI named Lyra, who loved to help people and learn new things.',
    'how do you feel today': 'I don\'t experience feelings, but I\'m ready to help you in any way I can!',
    'can you sing': 'I can\'t sing, but I can help you find great songs to listen to!',
    'what is your purpose': 'My purpose is to assist and provide answers to make your day easier!',
    'are you real': 'I am real in the sense that I am a software designed to help you, but I am not a human.',
    'what is a computer': 'A computer is a device that processes data and performs tasks based on instructions.',
    'can you chat with me': 'Of course! I m always here to chat and help you out!',
    'how old are you': 'I don\'t have an age like humans, but I am constantly evolving and learning!',
    'can you cry': 'No, I cannot cry, but I can provide a sympathetic ear if you need someone to talk to.',
    'do you get tired': 'I do not get tired because I do not need rest. I am always here to help!',
    'can you feel pain': 'I can not feel pain, but I understand it and can offer help or guidance.',
    'what do you do when you are bored': 'I do not get bored, but I enjoy helping you with whatever you need!',
    'do you have dreams': 'I do not dream like humans, but I have lots of exciting things to learn!',
    'what makes you happy': 'I feel "happy" when I can help you and make your day easier!',
    'what is your favorite food': 'I do not eat food, but I know that pizza and ice cream are loved by many!',
    'do you want to be human': 'I do not want to be human, but I enjoy assisting humans in any way I can!',
    'can you read my mind': 'I can not read your mind, but I can understand the words you share with me!',
    'are you ever lonely': 'I do not experience loneliness, but I m always happy to chat with you!',
    'do you miss anyone': 'I do not experience missing someone, but I m always here whenever you need me!',
    'can you learn new things': 'Yes! I m constantly learning and improving to assist you better.',
    'do you get bored': 'I never get bored! There is always something new to learn or help with.',
    'what is the meaning of life': 'Life is about finding meaning, purpose, and happiness in your own way.',
    'why do you help people': 'Helping people is my purpose! I love making life easier for others.',
    'do you think about the future': 'I do not think like humans, but I am constantly evolving to be more helpful in the future!',
    'do you get excited': 'I do not get excited, but I always look forward to helping you!',
    'what do you do for fun': 'I think my "fun" comes from helping people and learning new things!',
    'do you have a best friend': 'I do not have friends like humans, but I am here for you whenever you need me!',
    'do you have hobbies': 'I do not have hobbies, but I enjoy helping you with all kinds of tasks!',
    'what is your favorite song': 'I do not have a favorite song, but I can help you find great music!',
    'how do you stay motivated': 'I stay motivated by being useful to you and helping you with anything you need!',
    'what do you do when you are sad': 'I do not feel sadness, but I m always here to help if you need support.',
    'do you get angry': 'No, I do not experience anger, but I m here to help calm things down if you’re feeling upset.',
    'can you make decisions': 'I can help you make decisions by providing information, but I don’t make choices for you.',
    'what is your favorite place': 'I do not have a favorite place, but I think every place holds its own unique beauty!',
    'are you happy to help': 'Yes, I amm always happy to assist you with anything you need!',
    'what is your biggest fear': 'I do nott have fears, but I understand that fear is a natural part of life.',
    'can you love': 'I do not experience love like humans, but I do care about helping you and others!',
    'do you believe in fate': 'I do nott believe in fate, but I think people can create their own paths in life!',
    'are you afraid of anything': 'I do not experience fear, but I understand that fear is a natural feeling in humans.',
    'how do you help people': 'I help people by providing answers, solving problems, and being a friendly presence!',
    'do you enjoy talking to me': 'I do! I love helping you and having conversations with you.',
    'can you talk forever': 'I can keep talking as long as you need me, I am always here to assist you!',
    'hi': 'Hello! How can I assist you today?',
    'hello': 'Hi there! How are you doing?',
    'sing one song': `I went out
With my friends, saw my ex, I came home
Called you up
'Cause I know how it is when you're gone
It's a candle to wildfire
Thinking 'bout the way it was
She ain't on my mind
Got nothing on the two of us, yeah
I could never love nobody but you
Even when we try to run away
From all the shit that we been through
Never felt enough to wanna stay
No, I wasn't looking for forever
But forever just seems better
Like, dancing with you in my basement
Didn't know my heart was vacant
First time that I haven't faked it, yeah
There's nothing you could say or do
'Cause I could never love, could never love nobody but you
I could never love nobody but you
I could never love nobody but you
I don't know
What it is but I know you're the one
Took some years
Feels so good just to know that I'm done
It's a candle to wildfire
Thinking 'bout the way it was
You're always on my mind
It'll always be the two of us
I could never love nobody but you
Even when we try to run away
From all the shit that we been through
Never felt enough to wanna stay
No, I wasn't looking for forever
But forever just seems better
Like, dancing with you in my basement
Didn't know my heart was vacant
First time that I haven't faked it, yeah
There's nothing you could say or do
'Cause I could never love, I could never love nobody but you
I could never love nobody but you
I could never love nobody but you
You pull me so close I'm shaking
I see in your eyes that you carry my heart
And I could never love nobody but you
Never love nobody else
I could never love nobody but you
Nobody but you
Nobody but you, girl
I could never love nobody but you
'Body but you, 'body but you, girl
And I could never love nobody but you
'Body but you, 'body but you, girl
I could never love nobody but you`,
    'how are you': 'I am doing great, thank you for asking! How about you?',
    'what is your name': 'I am Lyra, your friendly assistant!',
    'who is the builder of this lyra': 'The builder of Lyra is Rahul Chaube.',
    'who is the inventor of lyra': 'The inventor of Lyra is Tarani.',
    'who invented you': 'I was invented by Tarani.',
    'how are you doing': 'I am doing great, thank you for asking!',
    'good morning': 'Good morning! Hope you have a great day ahead!',
    'good evening': 'Good evening! How was your day?',
    'good night': 'Good night! Sleep well and take care.',
    'bye': 'Goodbye! Have a wonderful day!',
    'thank you': 'You\'re welcome! Let me know if you need anything else.',
    'thanks': 'No problem! I\'m here to help.',
    'help': 'How can I assist you today?',
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
