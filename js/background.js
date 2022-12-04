// 배경색 바꾸기
const body = document.querySelector("body");
const btn = document.querySelector("button");

function colorChange() {
  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

btn.addEventListener("click", colorChange);


//포스터 이미지
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const url = bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

