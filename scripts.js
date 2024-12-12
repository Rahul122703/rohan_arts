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

const gallery_container_pc = document.querySelector(".gc_pc");
const gallery_container_phone = document.querySelector(".gc_phone");
const images = [
  {
    src: "./assets/art_work/img_1.jpg",
    dataId: 1,
    alt: "Image 1",
  },
  {
    src: "./assets/art_work/img_2.jpg",
    dataId: 2,
    alt: "Image 2",
  },
  {
    src: "./assets/art_work/img_3.jpg",
    dataId: 3,
    alt: "Image 3",
  },
  {
    src: "./assets/art_work/img_4.jpg",
    dataId: 4,
    alt: "Image 4",
  },
  {
    src: "./assets/art_work/img_5.png",
    dataId: 5,
    alt: "Image 5",
  },
  {
    src: "./assets/art_work/img_6.jpg",
    dataId: 6,
    alt: "Image 6",
  },
  {
    src: "./assets/art_work/img_7.jpg",
    dataId: 7,
    alt: "Image 7",
  },
  {
    src: "./assets/art_work/img_8.jpg",
    dataId: 8,
    alt: "Image 8",
  },
  {
    src: "./assets/art_work/img_9.jpg",
    dataId: 9,
    alt: "Image 9",
  },
  {
    src: "./assets/art_work/img_10.jpg",
    dataId: 10,
    alt: "Image 10",
  },
  {
    src: "./assets/art_work/img_11.jpg",
    dataId: 11,
    alt: "Image 11",
  },
  {
    src: "./assets/art_work/img_12.jpg",
    dataId: 12,
    alt: "Image 12",
  },
];

function insertGallery() {
  const phoneGalleryHTML = `
    <h1 class="section-title">My Signature Art Pieces</h1>
    <section class="phone_gallery">
      ${images
        .map(
          (image) => `
          <div class="image_container">
            <img 
              src="${image.src}" 
              class="grid_image" 
              data-id="${image.dataId}" 
              alt="${image.alt}" 
            />
          </div>`
        )
        .join("")}
      <div class="modal_container">
        <div class="modal_phone">
          <div class="top_container">
            <div class="centerer">
              <div class="modal_button cross">&#x2716;</div>
              <div class="view_image_container">
                <img src="./assets/art_work/img_9.jpg" class="view_image" alt>
              </div>
            </div>
          </div>
          <div class="modal_image_container">
            <div class="all_image_container"></div>
          </div>
        </div>
      </div>
    </section>`;
  if (gallery_container_phone) {
    gallery_container_phone.innerHTML += phoneGalleryHTML;
  }
}
const h1ElementHTML = `<h1 class="section-title">My Signature Art Pieces</h1>`;
const ulElementHTML = `
<ul class="results">
  ${images
    .map(
      (image) => `
      <li class="result">
        <img 
          src="${image.src}" 
          data-id="${image.dataId}" 
          alt="${image.alt}" 
          height="500"
        />
      </li>`
    )
    .join("")}
</ul>`;

// gallery_container_pc.innerHTML += h1ElementHTML + ulElementHTML;
insertGallery();

// REMOVE SCROLL MODAL 123
const modal_container = document.querySelector(".modal_container");
if (modal_container) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= 200 || window.pageYOffset > 1400) {
      modal_container.style.display = "none";
    }
  });
}
const top_link = document.querySelector(".up_button");

top_link.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (top_link) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 5) {
      top_link.classList.add("top_link_hide");
    } else {
      top_link.classList.remove("top_link_hide");
    }
  });
}

// MODAL LOGIC
const pc_modal = document.querySelector(".pc_modal");
const cross_button = document.querySelector(".image_cross");
const pc_modal_image_container = document.querySelector(".results");
const modal_image = document.querySelector(".image_modal_container");
if (pc_modal) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 300 || window.pageYOffset > 1800) {
      pc_modal.style.display = "none";
    }
  });
}
if (cross_button) {
  cross_button.addEventListener("click", () => {
    pc_modal.style.display = "none";
  });
}

if (pc_modal_image_container) {
  pc_modal_image_container.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName == "IMG") {
      pc_modal.style.display = "flex";
      modal_image.innerHTML = `<img src="${clickedElement.attributes.src.value}" class="${clickedElement.attributes.class.value}">`;
    }
  });
}

const modal = document.querySelector("#modal");
const money_button = document.querySelector(".donate-button");
const close_button = document.querySelector("#close-btn");
money_button.addEventListener("click", () => {
  modal.style.display = "flex";
});
close_button.addEventListener("click", () => {
  modal.style.display = "none";
});
