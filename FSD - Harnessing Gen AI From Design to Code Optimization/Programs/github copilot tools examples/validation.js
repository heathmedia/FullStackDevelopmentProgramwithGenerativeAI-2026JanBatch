function validateForm() {
    let email = document.getElementById("emailId").value;
    let password = document.getElementById("password").value;
    
    if (email === "") {
        alert("EmailId must be filled out");
        return false;
    }
    if (password === "") {
        alert("Password must be filled out");
        return false;
    }
    // Additional validation can be added here (e.g., email format, password strength)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one letter and one number");
        return false;
    }
    return true;
}