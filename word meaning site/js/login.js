document.getElementById("loginBtn")?.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Email and password are required");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
        user => user.email === email && user.password === password
    );

    if (!matchedUser) {
        alert("Invalid email or password");
        return;
    }

    localStorage.setItem("verifiedUser", JSON.stringify(matchedUser));
    window.location.href = "dashboard.html";
});
