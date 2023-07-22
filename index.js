const pianokeys = document.querySelectorAll(".key") 
const allkeys = []; // 모든 키 배열

const clickKey = () => {
  pianokeys.forEach((key) => {
    let keyData = key.dataset.key
    allkeys.push(keyData)
    key.addEventListener("click", () => play(keyData)); // 각 키를 클릭하면 해당하는 키의 데이터 키 값을 play 함수로 전달
    });
  };

  const keydownHandler = (e) => {
    let keyData = e.key;
    play(keyData);
  };

function play(key) {
  const audio = new Audio(`/piano/${key}.wav`); // 클릭된 키의 데이터 키 값을 사용하여 오디오 파일의 경로를 설정
  audio.play(); // 오디오 재생
}
window.addEventListener("keydown", keydownHandler);

clickKey()

