const durationInput = document.getElementById('duration');
const startButton = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


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

const timing = {
    duration: 500,
    iterations: 1,
  };

  const widthing = [
    { width: '200px' },
    { width: '300px' },
  ];

  const widthing2 = [
    { width: '300px' },
    { width: '200px' },
  ];

searchInput.addEventListener('focus', () => {
    searchInput.animate(widthing,timing);
    searchInput.style.width = '300px';
  });
  
  searchInput.addEventListener('blur', () => {
    searchInput.animate(widthing2,timing);
     searchInput.style.width = '200px';
  });

  
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('openModalBtn');
  var span = document.getElementById('closeModalBtn');

  btn.addEventListener('click', function () {
      modal.style.display = 'block';
  });
  span.addEventListener('click', function () {
      modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });



  window.onscroll = function() {
    showScrollToTopButton();
  };

  function showScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }