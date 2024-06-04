let timerElement = document.getElementById('timer');
let time = 120; // 2 minutes in seconds
let currentQuestion = 1;
const totalQuestions = 20;

function startTimer() {
    setInterval(() => {
        if (time > 0) {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            alert("Time's up!");
            // Optionally, move to the next question or end the quiz
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        document.querySelector('.question-number').textContent = `${currentQuestion} / ${totalQuestions}`;
        // Reset timer or load the next question
        time = 120; // Reset time for next question
        // Load next question data here (image, options, etc.)
    } else {
        alert('Quiz completed!');
        // Optionally, handle quiz completion
    }
}

startTimer(); // Start the timer when the page loads
