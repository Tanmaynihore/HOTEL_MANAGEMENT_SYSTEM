function displayheaderTemplate() {
  let headerTemplate = `<a href="index.html"><img src="assests/images/logo.png" alt="logo" class="logo"></a>
    <button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false"
        data-target="#login-modal" onclick="modalHeader()">LOGIN</button> `;
  document.getElementById("header").innerHTML = headerTemplate;
}
displayheaderTemplate();

function displayfooterTemplate() {
  let footerTemplate = `<button type="button" class="btn btn-info btn-sm" id="contactus" data-toggle="modal" data-backdrop="false"
                data-target="#contact-modal">Contact Us</button>

            <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <p>
                                    Thank you for reaching out!!! <br>
                                    Please enter you email and we will get back to you.
                                </p>
                                <label for="email">Email: </label>
                                <input type="text" id="email" name="email" placeholder="Enter your email id" required>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="socialmedia">
                <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png"
                        style="height: 20px; width: 22px;"></a>
                <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png"
                        style="height: 20px; width: 22px;"></a>
                <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png"
                        style="height: 20px; width: 22px;"></a>
            </div>
            <p class="copyright">&copy; 2020 ROOM SEARCH PVT LTD.</p>
`;
  document.getElementById("footer").innerHTML = footerTemplate;
}
displayfooterTemplate();

localStorage.setItem("login-id", "admin");
localStorage.setItem("login-pswd", "admin");

function updateUserName() {
  console.log("updated");
}

function myFunction() {
  let ifLogin = document.getElementById("login").innerText == "LOGOUT";
  if (ifLogin) {
    document.getElementById("login").innerText = "LOGIN";
    return;
  }

  let userid = document.getElementById("username").value;
  let userpswd = document.getElementById("example-input-password2").value;

  let storedId = localStorage.getItem("login-id");
  let storedPswd = localStorage.getItem("login-pswd");

  if (userid == storedId && userpswd == storedPswd) {
    alert("Successfully loggedin");
    document.getElementById("login").innerText = "LOGOUT";
    document
      .getElementById("login")
      .setAttribute("data-target", "#login-modal");
    if ($("#payment")[0]) {
      $("#payment")[0].disabled = false;
    }
  } else {
    alert("failed");
  }
}
function modalHeader() {
  let ifLogin = document.getElementById("login").innerText == "LOGOUT";
  if (ifLogin) {
    document.getElementById("login").innerText = "LOGIN";
    if ($("#payment")[0]) {
      $("#payment")[0].disabled = true;
    }
    return;
  } else {
    document
      .getElementById("login")
      .setAttribute("data-target", "#login-modal");
  }
  var modalHeader = `<div class="modal fade" id="login-modal"  tabindex="-1" role="dialog" aria-labelledby="login-modal-label"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="login-form">
                            <div class="login-field">
                                <label for="username">Username: </label>
                                <input type="text" id="username" name="username" onchange="updateUserName()" placeholder="Enter Username" autocomplete="off"
                                    required />
                            </div>
                            <div class="login-field">
                                <label for="password">Password: </label>
                                <input type="password" id="example-input-password2" name="password" placeholder="Enter Password"
                                    required />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="login" type="button" class="btn btn-primary" data-dismiss="modal"
                        onclick="myFunction()">Login</button>
                    </div>
                </div>
            </div>
        </div>`;

  document.getElementById("header").innerHTML += modalHeader;
}
modalHeader();
