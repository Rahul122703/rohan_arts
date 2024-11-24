const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleBtn.style.display = "block";
});
