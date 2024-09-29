function validateForm() {
  let x = document.forms["reviewForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
