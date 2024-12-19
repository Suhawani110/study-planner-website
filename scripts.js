function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    if (todoInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${todoInput.value} <input type='checkbox'> <button onclick='this.parentNode.remove()'>Delete</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function addSchedule() {
    const scheduleInput = document.getElementById('schedule-input');
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const scheduleList = document.getElementById('schedule-list');
    if (scheduleInput.value.trim() !== '' && startTime && endTime) {
        const li = document.createElement('li');
        li.innerHTML = `${scheduleInput.value} (${startTime} - ${endTime}) <input type='checkbox'> <button onclick='this.parentNode.remove()'>Delete</button>`;
        scheduleList.appendChild(li);
        scheduleInput.value = '';
        document.getElementById('start-time').value = '';
        document.getElementById('end-time').value = '';
    }
}

function addNote() {
    const notesInput = document.getElementById('notes-input');
    const notesList = document.getElementById('notes-list');
    if (notesInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = notesInput.value;
        notesList.appendChild(li);
        notesInput.value = '';
    }
}

let stopwatchInterval;
let stopwatchTime = 0;

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = "00:00:00";
}

const quotes = [
    "Believe in yourself and all that you are.",
    "Dream big. Work hard. Stay focused.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Start where you are. Use what you have. Do what you can.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
