function myFunction() {
    var toggle=document.getElementById("vm");
    if (toggle.textContent === "View More") {
      document.getElementById("more").style.display="flex";
      toggle.innerText="View Less";
    
   
  } else {
    document.getElementById("more").style.display="none";
    toggle.innerText="View More";
  }
  }