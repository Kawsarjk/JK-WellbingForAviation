document.addEventListener("DOMContentLoaded", function() {
    let timer;
    let timeRemaining = 24 * 60 * 60; // 24 hours in seconds

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsRemaining = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        document.getElementById("timer").textContent = formatTime(timeRemaining);
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(() => {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timer);
                    timer = null;
                    alert("Time's up!");
                }
            }, 1000);
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        timeRemaining = 24 * 60 * 60;
        updateTimerDisplay();
    }

    document.getElementById("start-timer").addEventListener("click", startTimer);
    document.getElementById("reset-timer").addEventListener("click", resetTimer);

    // Initialize the timer display
    updateTimerDisplay();
});
