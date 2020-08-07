function toggleMenu() {
  var menu = document.getElementById("collapse-menu");
  var icon = document.getElementById("toggle-icon");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
}
