let ifLogin = document.getElementById("login").innerText == "LOGOUT";
if (ifLogin) {
  $("#payment")[0].disabled = false;
} else {
  $("#payment")[0].disabled = true;
}
function payNow() {
  alert("Hi your booking is successfull !!");
}
