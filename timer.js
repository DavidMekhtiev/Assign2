const durationInput = document.getElementById('duration');
const startButton = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');

let countdown;

startTimer(3600);

function startTimer(duration) {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    //запускаем сам таймер и говорим что делать каждую секунду
    countdown = setInterval(function () {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Время прошло';
            alert("Время прошло");
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

//Показываем оставшееся время 
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `Скидка закончится: ${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}
