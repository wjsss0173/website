const loginForm = document.querySelector("#login-form");
const loginId = document.querySelector("#login_id");
const loginPassword = document.querySelector("#login_password");
const greeting = document.querySelector("#greeting");
const loginWaring = document.querySelector("#login-form h3")
const clock = document.querySelector("h2#clock");
const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

const HIDDEN_CLASSNAME = "hidden";

//로그인 구현
function onLoginSubmit(event) {
    if(loginId.value === "" || loginPassword.value === "") {
        loginWaring.innerText = "아이디 혹은 비밀번호를 입력해주세요."
        event.preventDefault();
    } else {
        event.preventDefault();
        const username = loginId.value;
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(username);
        getClock();
        setInterval(getClock, 1000);

        bgImage.src = `${chosenImage}`;
        document.body.appendChild(bgImage);
    }
}

//유저 환영인사
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//시계
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

loginForm.addEventListener("submit", onLoginSubmit);




