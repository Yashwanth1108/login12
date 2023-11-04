document
  .getElementById("signinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;

    var credentials = {
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    var storedCredentials = localStorage.getItem("credentials");
    if (storedCredentials) {
      storedCredentials = JSON.parse(storedCredentials);

      if (
        credentials.firstName === storedCredentials.firstName &&
        credentials.lastName === storedCredentials.lastName &&
        credentials.password === storedCredentials.password
      ) {
        alert("Login successful!");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      localStorage.setItem("credentials", JSON.stringify(credentials));
      alert("Account created. You can now sign in.");
    }

    document.getElementById("signinForm").reset();
  });
