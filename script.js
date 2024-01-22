function validateLogin() {
    const correctUsername = "yourUsername"; 
    const correctPassword = "yourPassword"; 

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isValidUser = existingUsers.some(user => user.username === usernameInput.value && user.password === passwordInput.value);

    if (isValidUser) {
        loginMessage.textContent = "Inicio de sesion exitoso, redirigiendo...";
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000); 
    } else {
        loginMessage.textContent = "Usuario no valido, escoje otro";
    }
}

function registerUser() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const registerMessage = document.getElementById("registerMessage");

    if (passwordInput.value !== confirmPasswordInput.value) {
        registerMessage.textContent = "Las contraseñas no coinciden";
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    const isUsernameTaken = existingUsers.some(user => user.username === newUser.username);

    if (isUsernameTaken) {
        registerMessage.textContent = "El usuario no esta disponible, porfavor elige otro";
    } else {
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        registerMessage.textContent = "Registro exitoso! Redirigiendo...";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
}

// Animacion boxes de juegos

const animationContainer = document.getElementById("animationContainer");


animateBoxes();

function animateBoxes() {
    const boxes = document.querySelectorAll(".game-box");

    function moveBoxes() {
        boxes.forEach((box, index) => {
            const newPosition = parseFloat(getComputedStyle(box).transform.split(',')[4]) - 12;
            box.style.transform = `translateX(${newPosition}px)`;
        });

        requestAnimationFrame(moveBoxes);
    }

    moveBoxes();
}

