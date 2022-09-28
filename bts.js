function myFunction() {
  document.getElementById("contactMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownBtn')) {
    var dropdowns = document.getElementsByClassName("dropdownMenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
S
