document.getElementById("signupBtn")?.addEventListener("click", () => {
    const email = document.getElementById("inputEmail").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!email || !password) {
        alert("All fields are required");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("Account already exists. Please login.");
        return;
    }

    // Temporarily store user until OTP verification
    localStorage.setItem(
        "pendingUser",
        JSON.stringify({ email, password })
    );

    window.location.href = "otp.html";
});
