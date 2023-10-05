const name = document.getElementById("name");
const nameError = document.getElementById("name_error");

const nickname = document.getElementById("nickname");
const nicknameError = document.getElementById("nickname_error");

const email = document.getElementById("email");
const emailError = document.getElementById("email_error");

const password = document.getElementById("password");
const passwordError = document.getElementById("password_error");

const check = document.getElementById("check");
const checkError = document.getElementById("check_error");

const btn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const success = document.getElementById("success_back");

const EmailCheck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const scheck = /\s/g;

const special_pattern = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
const number = /[0-9]/;				// 숫자
const str = /[a-zA-Z]/;


name.oninput = () => {
    if (name.value === "") {
        nameError.innerText = '필수 입력 항목입니다!';
        nameError.style.color = 'red';
    }
    else {
        nameError.innerText = '멋진 이름이네요!';
        nameError.style.color = '#bffd9f';
        ableButton();
    }
}

nickname.oninput = () => {
    if (nickname.value.length < 2 || nickname.value.length > 5) {
        nicknameError.innerText = "닉네임은 2~5글자로 구성해주세요!";
        nicknameError.style.color = 'red';
    }
    else {
        nicknameError.innerText = "멋진 닉네임이군요!";
        nicknameError.style.color = '#bffd9f';
        ableButton();
    }
}

email.oninput = () => {
    if (EmailCheck.test(email.value) && email.value.endsWith(".com")) {
        emailError.innerText = "올바른 메일 형식입니다!";
        emailError.style.color = '#bffd9f';
        ableButton();
    }
    else {
        emailError.innerText = "올바른 메일 형식이 아닙니다!";
        emailError.style.color = 'red';
    }
}

password.oninput = () => {
    if (special_pattern.test(password.value) && number.test(password.value) && str.test(password.value)) {
        passwordError.innerText = "안전한 비밀번호입니다!";
        passwordError.style.color = '#bffd9f';
        ableButton();
    }
    else {
        passwordError.innerText = "영어+숫자+특수문자를 조합하여 작성해주세요.";
        passwordError.style.color = 'red';
    }
}

check.oninput = () => {
    if (password.value === check.value) {
        checkError.innerText = "비밀번호가 일치합니다.";
        checkError.style.color = '#bffd9f';
        ableButton();
    }
    else {
        checkError.innerText = "비밀번호가 일치하지 않습니다.";
        checkError.style.color = 'red';
    }
}

function ableButton() {
    if (nameError.style.color === 'rgb(191, 253, 159)'
        && nicknameError.style.color === 'rgb(191, 253, 159)'
        && emailError.style.color === 'rgb(191, 253, 159)'
        && passwordError.style.color === 'rgb(191, 253, 159)'
        && checkError.style.color === 'rgb(191, 253, 159)') {
        btn.style.backgroundColor = '#333333';
        btn.disabled = false;
        }
    else {
        btn.style.backgroundColor = 'grey';
        btn.disabled = true;
    }
}

btn.onclick = (event) => {
    event.preventDefault();
    success.style.display = "flex";
}

function changedisp () {
    success.style.display = "none";
}