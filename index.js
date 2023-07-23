const pianokeys = document.querySelectorAll(".key")
const allkeys = []; // 모든 키 배열
const audio = new Audio();
const volumeSlider = document.querySelector(".volume input");

const clickKey = () => {
  pianokeys.forEach((key) => {
    let keyData = key.dataset.key
    allkeys.push(keyData)
    key.addEventListener("click", () => play(keyData));
  });
};
clickKey();


function play(key) {
  audio.src = `/piano/${key}.wav`; // 클릭된 키의 데이터 키 값을 사용하여 오디오 파일의 경로를 설정
  audio.play(); // 오디오 재생
  const keydown = document.querySelector(`[data-key="${key}"]`);
  keydown.classList.add("active")
  setTimeout(() => {
    keydown.classList.remove("active");
  }, 150);
}

const keydownHandler = (e) => {
  let keyData = e.key;
  play(keyData);
};

window.addEventListener("keydown", keydownHandler);

const circle = document.querySelector(".circle");
const checkBox = document.querySelector(".toggle");
const hiddenItems = document.querySelectorAll("li > span");

checkBox.addEventListener("click", (e) => {
  const isChecked = e.target.checked;
  circle.style.transform = isChecked ? "translateX(2.5rem)" : "translateX(0rem)";
  hiddenItems.forEach(function (el) {
    if (isChecked) {
      el.classList.remove("hidden");

    } else {
      el.classList.add("hidden");

    }
  });
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});
