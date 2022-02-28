window.onload = function () {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const login = document.getElementById("login");

    login.addEventListener("click", function () {
        console.log('Email : '+ email.value);
        console.log('Password : '+ password.value);
    });
}

