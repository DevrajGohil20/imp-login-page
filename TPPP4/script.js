// Check if there are already stored users in local storage
var users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username exists and matches the password
  if (users.some(user => user.username === username && user.password === password)) {
    alert("Login successful!");
    // Redirect to dashboard or perform other actions here
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

// Function to add a new user to the local database
function addUser(username, password) {
  users.push({ username: username, password: password });
  localStorage.setItem("users", JSON.stringify(users));
}

// Add the default user to the local database if it doesn't exist
if (!users.some(user => user.username === "admin")) {
  addUser("admin", "password");
}
