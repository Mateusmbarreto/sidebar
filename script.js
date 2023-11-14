function toggleSubLinks(id) {
  const subLinks = document.getElementById(id);

  // Alternar a visibilidade dos sublinks
  if (subLinks.style.display === "block") {
    subLinks.style.display = "none";
  } else {
    subLinks.style.display = "block";
  }
}

let isMouseInSidebar = false;

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  sidebar.classList.toggle("sidebar-closed");
  mainContent.classList.toggle("main-content-closed");
}

function handleMouseMove(event) {
  const x = event.clientX;
  const sidebarWidth = 160; // Largura da barra lateral

  if (x <= sidebarWidth || isMouseInSidebar) {
    showSidebar();
  } else {
    hideSidebar();
  }
}

function handleMouseEnter() {
  isMouseInSidebar = true;
  showSidebar();
}

function handleMouseLeave() {
  isMouseInSidebar = false;
  hideSidebar();
}

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  sidebar.classList.remove("sidebar-closed");
  mainContent.classList.remove("main-content-closed");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  sidebar.classList.add("sidebar-closed");
  mainContent.classList.add("main-content-closed");
}
