const title = document.querySelector("div.hello:first-child h1");


function handletitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "마우스 여깄어";
}

function handleMouseLeave() {
    title.innerText = "마우스 없어졌어ㅠ";
}

title.addEventListener("click", handletitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);