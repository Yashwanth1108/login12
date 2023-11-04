document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let password = document.getElementById("password").value;

    let object = {
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    console.log(object);
  });
