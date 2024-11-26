const body_width = document.querySelector("body").getBoundingClientRect().width;

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

const gallery_container = document.querySelector(".results");

if (body_width < 400) {
  
}
