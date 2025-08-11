document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value.trim();
    let year = document.getElementById("year").value;
    let project = document.getElementById("project").value.trim();

    if (!name || !email || !department || !year || !project) {
        alert("All fields must be filled out.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Registration Successful");
    document.getElementById("registrationForm").reset();
});
