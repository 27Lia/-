const toggleButton = document.querySelector('[type="checkbox"]');

toggleButton.addEventListener('click', function() {
  this.classList.toggle('active');
});

const spansa = document.querySelectorAll("li>span");

// 마우스 클릭이벤트
spansa.forEach(span => {
  span.addEventListener("click", audiopaly);
});

function audiopaly(event) {
  const audio = this.querySelector("audio");
  audio.play();
}

const spans = document.querySelectorAll(".piano-keys li span");
const audio = new Audio(); // 빈 오디오 객체 생성

spans.forEach(span => {
  span.addEventListener("click", handleKeyClick);
});

function handleKeyClick(event) {
  const span = event.currentTarget;
  const key = span.getAttribute("data-key");
  playTune(key);
}

function playTune(key) {
  audio.src = `piano/${key}.wav`; // 오디오 src 변경
  audio.currentTime = 0; // 재생 위치를 처음으로 되돌림
  audio.play(); // 오디오 재생

  const span = document.querySelector(`span[data-key="${key}"]`);
  span.classList.add("active");
  setTimeout(() => {
    span.classList.remove("active");
  }, 150);
}

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const key = event.key.toLowerCase();
  playTune(key);
}



