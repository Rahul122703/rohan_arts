function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`${selector} is invalid or it doesn't exists`);
  }
}

class ImageGallery {
  constructor(element) {
    this.container = element;
    this.all_images = [...element.querySelectorAll(".grid_image")];
    this.modal = getElement(".modal_container");

    this.cross_button = getElement(".cross");
    this.modal_image = getElement(".all_image_container");

    this.closeModal = this.closeModal.bind(this);
    this.setImage = this.setImage.bind(this);
    this.next_image = this.next_image.bind(this);
    this.prev_image = this.prev_image.bind(this);
    this.choose_image = this.choose_image.bind(this);

    //MOBILE SCROLL LOGIC
    this.current_image_data_id = null;
    this.view_image_container = getElement(".view_image_container");
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.handleSwipe = this.handleSwipe.bind(this);

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("grid_image")) {
          this.openImage(e.target);
        }
      }.bind(this)
    );
    this.touchStartHandler = (e) => {
      this.touchStartX = e.touches[0].clientX;
    };
    this.touchMoveHandler = (e) => {
      this.touchEndX = e.touches[0].clientX;
    };
    this.touchEndHandler = () => {
      this.handleSwipe();
    };
  }
  openImage(image) {
    //123
    console.log("here");
    this.modal.style.display = "block";
    this.setImage(image);
    const modal_images = this.all_images
      .map(function (currentImage) {
        return `
              <img src="${
                currentImage.src
              }"  class=" ${currentImage.dataset.id === image.dataset.id ? "selected" : "modal_image"} mod_img" data-id = ${currentImage.dataset.id}> 
           `;
      })
      .join(" ");
    getElement(".all_image_container").innerHTML = modal_images;
    this.cross_button.addEventListener("click", this.closeModal);
    this.modal_image.addEventListener("click", this.choose_image);
    this.view_image_container.addEventListener(
      "touchstart",
      this.touchStartHandler
    );
    this.view_image_container.addEventListener(
      "touchmove",
      this.touchMoveHandler
    );
    this.view_image_container.addEventListener(
      "touchend",
      this.touchEndHandler
    );
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = this.touchEndX - this.touchStartX;
    if (swipeDistance > swipeThreshold) {
      this.prev_image();
    } else if (swipeDistance < -swipeThreshold) {
      this.next_image();
    }
  }
  closeModal() {
    this.cross_button.removeEventListener("click", this.closeModal);
    this.modal_image.removeEventListener("click", this.choose_image);
    this.view_image_container.removeEventListener(
      "touchstart",
      this.touchStartHandler
    );
    this.view_image_container.removeEventListener(
      "touchmove",
      this.touchMoveHandler
    );
    this.view_image_container.removeEventListener(
      "touchend",
      this.touchEndHandler
    );
    this.modal.style.display = "none";
  }
  setImage(image) {
    const view_image = getElement(".view_image");
    this.current_image_data_id = image.getAttribute("data-id");
    view_image.src = image.src;
    if (this.current_image_data_id >= 1 && this.current_image_data_id <= 4) {
      this.modal_image.scrollLeft = 0;
    } else if (
      this.current_image_data_id >= 5 &&
      this.current_image_data_id <= 8
    ) {
      this.modal_image.scrollLeft = 350;
    } else {
      this.modal_image.scrollLeft = 700;
    }
  }

  next_image() {
    const currentImage = this.modal_image.querySelector(".selected");
    currentImage.classList.remove("selected");
    const next =
      currentImage.nextElementSibling || this.modal_image.firstElementChild;
    next.classList.add("selected");
    this.setImage(next);
  }

  prev_image() {
    const currentImage = this.modal_image.querySelector(".selected");
    const next =
      currentImage.previousElementSibling || this.modal_image.lastElementChild;
    currentImage.classList.remove("selected");
    next.classList.add("selected");
    this.setImage(next);
  }

  choose_image(e) {
    if (e.target.classList.contains("mod_img")) {
      const selected = this.modal_image.querySelector(".selected");
      selected.classList.remove("selected");
      this.setImage(e.target);
      e.target.classList.add("selected");
    }
  }
}
const phone_gallery_element = getElement(".phone_gallery");
if (phone_gallery_element) {
  const phone_gallery = new ImageGallery(phone_gallery_element);
}
