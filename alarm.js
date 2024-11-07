// Digital Clock
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Set Alarm
function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime) {
        const alarmHistory = document.getElementById('history-list');
        const alarmItem = document.createElement('div');
        alarmItem.classList.add('history-item');
        alarmItem.innerText = `Alarm set for: ${alarmTime}`;
        alarmHistory.appendChild(alarmItem);
    } else {
        alert('Please select a valid time for the alarm.');
    }
}

// Timer
let timerInterval;
function startTimer() {
    const timerInput = document.getElementById('timer-input').value;
    let timeLeft = parseInt(timerInput);

    if (!isNaN(timeLeft) && timeLeft > 0) {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                alert(`${timeLeft} seconds remaining`);
            } else {
                clearInterval(timerInterval);
                alert('Timer finished!');
            }
        }, 1000);
    } else {
        alert('Please enter a valid time in seconds.');
    }
}

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const minutes = String(Math.floor(stopwatchTime / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        document.getElementById('stopwatch-display').innerText = `${minutes}:${seconds}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').innerText = '00:00';
}

// Bedtime
function setBedtime() {
    const bedtime = document.getElementById('bedtime-input').value;
    if (bedtime) {
        alert(`Bedtime set for: ${bedtime}`);
    } else {
        alert('Please select a valid bedtime.');
    }
}
