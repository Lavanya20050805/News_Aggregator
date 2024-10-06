document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert("Login successful!");
        // Redirect or move to the next page here
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password.");
    }
});
