function toggleSubLinks(id) {
  const subLinks = document.getElementById(id);

  // Alternar a visibilidade dos sublinks
  if (subLinks.style.display === "block") {
    subLinks.style.display = "none";
  } else {
    subLinks.style.display = "block";
  }
}
