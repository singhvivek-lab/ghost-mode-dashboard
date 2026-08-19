const logButton = document.getElementById('log-btn');
const statusText = document.getElementById('status-text');
const streakCounter = document.getElementById('streak-counter');
const taskInput = document.getElementById('task-input');
const logHistory = document.getElementById('log-history');

let days = Number(localStorage.getItem('empireStreak')) || 0;

logHistory.innerHTML = localStorage.getItem('empireLogs') || "";

if (days > 0){
  streakCounter.textContent = 'Current Streak: ' + days + ' Days ';
  statusText.textContent = 'Status: Day ' + days + ' Secured.';
  statusText.style.color = '#4caf50';
}

logButton.addEventListener('click', function() {
   const taskText = taskInput.value;

  if (taskText !== "") {

    days = days + 1;
    streakCounter.textContent = ' Current Streak: ' + days + ' Days ';
    statusText.textContent = 'Status: Day ' + days + ' Secured.';
    statusText.style.color = '#4caf50';

    const now = new Date();

    const timeString = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');

    const newItem = document.createElement('li');
    newItem.textContent = "[" + timeString + "]" + taskText + "";

    const deletebtn = document.createElement('button');
    deletebtn.textContent = "X";
    deletebtn.className = "delete-btn";

    deletebtn.addEventListener('click', function() {
      newItem.remove();
      localStorage.setItem('empireLogs', logHistory.innerHTML);
    });

    newItem.appendChild(deletebtn);
    logHistory.appendChild(newItem);
    
    taskInput.value = "";

    localStorage.setItem('empireStreak', days);
    localStorage.setItem('empireLogs' , logHistory.innerHTML);
  }
});
const waterButton = document.getElementById('water-btn');
const waterCounterText = document.getElementById('water-count');

let cups = Number(localStorage.getItem('waterTotal')) || 0;

waterCounterText.textContent = cups;

waterButton.addEventListener('click', function() {
  cups = cups + 1;
  waterCounterText.textContent = cups;
  localStorage.setItem('waterTotal', cups);
});
