const pianokeys = document.querySelectorAll(".key") 
const allkeys = []; // 모든 키 배열

const clickKey = () => {
  pianokeys.forEach((key) => {
    let keyData = key.dataset.key
    allkeys.push(keyData)
    key.addEventListener("click", () => play(keyData)); 
    });
  };
  clickKey();
  


function play(key) {
  const audio = new Audio(`/piano/${key}.wav`); // 클릭된 키의 데이터 키 값을 사용하여 오디오 파일의 경로를 설정
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
circle.addEventListener("click", circleClick);

function circleClick() {
  circle.classList.toggle("toggle-active"); 
  const checkbox = document.querySelector(".checkbox");
  checkbox.classList.toggle("checkbox-active")
}



