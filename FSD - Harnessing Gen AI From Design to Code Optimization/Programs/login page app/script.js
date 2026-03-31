
function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // Basic validation
    if (!email || !password) {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    if (!validateEmail(email)) {
        errorMsg.textContent = "Invalid email format!";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
    }

    // Fake login success
    alert("Login successful!");
});

function validateEmail(email) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regex.test(email);
}