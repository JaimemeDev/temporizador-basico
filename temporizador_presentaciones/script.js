
let countdownInterval;
let remainingTime = 0;
let paused = false;

function startCountdown() {
  const minutes = parseInt(document.getElementById('inputMinutes').value);
  if (isNaN(minutes) || minutes <= 0) return;

  remainingTime = minutes * 60;
  updateDisplay();
  clearInterval(countdownInterval);

  document.getElementById('timer').classList.remove('alert');
  document.getElementById('inputContainer').style.display = 'none';
  document.getElementById('controlButtons').style.display = 'block'



  countdownInterval = setInterval(() => {
    if (!paused) {
      remainingTime--;
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        
	document.getElementById('timer').textContent = "00:00";
        document.getElementById('timer').classList.add('alert');
    
      } else {
        updateDisplay();
      }
    }
  }, 1000);
}

function updateDisplay() {
  const mins = Math.floor(remainingTime / 60);
  const secs = remainingTime % 60;
  document.getElementById('timer').textContent =
    `${pad(mins)}:${pad(secs)}`;
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

function pauseCountdown() {
  paused = true;
}

function resumeCountdown() {
  paused = false;
}

function resetCountdown() {
  clearInterval(countdownInterval);
  remainingTime = 0;
  paused = false;
  document.getElementById('inputContainer').style.display = 'block';
  document.getElementById('controlButtons').style.display = 'none';
    document.getElementById('timer').textContent = "00:00";
    document.getElementById('timer').classList.remove('alert');


    
  
    
}
