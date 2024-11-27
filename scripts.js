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

const gallery_container = document.querySelector(".gallery_container");
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
    src: "./assets/art_work/img_5.jpg",
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
  const phoneGallery = document.createElement("section");
  phoneGallery.classList.add("phone_gallery");
  document.body.appendChild(phoneGallery);
  images.forEach((image) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image_container");

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.classList.add("grid_image");
    imgElement.setAttribute("data-id", image.dataId);
    imgElement.alt = image.alt;

    imageContainer.appendChild(imgElement);
    phoneGallery.appendChild(imageContainer);
  });
  phoneGallery.innerHTML += `
    <div class="modal_container">
      <div class="modal">
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
    </div>`;
  gallery_container.appendChild(phoneGallery);
}

if (body_width > 768) {
  const h1Element = document.createElement("h1");
  h1Element.classList.add("section-title");
  h1Element.innerHTML = "My Signature Art Pieces";

  const ulElement = document.createElement("ul");
  ulElement.classList.add("results");

  images.forEach((image) => {
    const liElement = document.createElement("li");
    liElement.classList.add("result");

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.setAttribute("data-id", image.dataId);
    imgElement.alt = image.alt;
    imgElement.height = 500;

    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);
  });
  gallery_container.appendChild(ulElement);
  // gallery_container.appendChild(h1Element);
} else {
  insertGallery();
}

// REMOVE SCROLL MODAL 123
const modal_container = document.querySelector(".modal_container");
window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 15) {
    modal_container.style.display = "none";
  }
});

const top_link = document.querySelector(".up_arrow");
if (top_link) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 5) {
      top_link.classList.add("top_link_hide");
    } else {
      top_link.classList.remove("top_link_hide");
    }
  });
}
