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

window.onload = () => {
  const popup = document.getElementById("popup");

  setTimeout(() => {
    popup.style.display = "block";
    setTimeout(() => {
      popup.classList.add("show");
    }, 10);
  }, 100);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  }, 2000);
};

// filter logic
const image_data = [
  {
    src: "./assets/insta_content/images/art_1.jpg",
    text: "The Joker",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "pantings",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_2.jpg",
    text: "Rajesh Khanna",
    insta_link: "https://www.instagram.com/p/CnTwjnDtxsQ/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_3.jpg",
    text: "Kakashi Sensai",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "anime",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_4.jpg",
    text: "Sashi kapoor",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_5.jpg",
    text: "girl123",
    insta_link: "https://www.instagram.com/p/CoOtoYOvgVM/",
    category: "color portraits",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_6.jpg",
    text: "person",
    insta_link: "https://www.instagram.com/p/BrQYEFnABrU/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_7.jpg",
    text: "Avtar",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CpuJdmEtDmO/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_8.jpg",
    text: "Art 8",
    css_class: "none",
    category: "color portraits",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/s",
  },
  {
    src: "./assets/insta_content/images/art_9.jpg",
    text: "Lucifer",
    insta_link: "https://www.instagram.com/p/CtlkbZRPhke/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_10.jpg",
    text: "Art vs artist",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/Ct820JFgssY/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_11.jpg",
    text: "Krishna",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CuSQdrXtG8y/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_12.jpg",
    text: "MADARA UCHIHA",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/Cl_TXskP_bN/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_13.jpg",
    text: "RADHA KRISHNA",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CvPG4n0PyTH/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_14.jpg",
    text: "RENGOKU",
    insta_link: "https://www.instagram.com/p/Cw5L0D7tgX6/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_15.jpg",
    text: "GANPATI BAPPA",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CxXl0jlPbYw/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_16.jpg",
    text: "GANPATI BAPPA",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CxlCIQNvjHe/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_17.jpg",
    text: "DEADPOOL",
    insta_link: "https://www.instagram.com/p/CyQPPP8PKhR/",
    category: "pantings",
  },
  {
    src: "./assets/insta_content/images/art_18.jpg",
    text: "🙏SIYA RAM🙏",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/C2ZI5xctHB0/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_19.jpg",
    text: "MS DHONI",
    insta_link: "https://www.instagram.com/p/C2egZ5ot1_S/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_20.jpg",
    text: "idk",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "pantings",
  },
  {
    src: "./assets/insta_content/images/art_21.jpg",
    text: "Virat Kholi",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/C8pIwkcysnY/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_22.jpg",
    text: "Stan lee",
    insta_link: "https://www.instagram.com/p/BrUVw5xAnHC/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_23.jpg",
    text: "WEDNESDAY",
    insta_link: "https://www.instagram.com/p/CmG0Yq3Pml9/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_24.jpg",
    text: "idk",
    css_class: "big",
    insta_link: "  ",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_25.jpg",
    text: "Zoro ",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/DDMoXyjy5eZ/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_26.jpg",
    text: "Hardy Sandu",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/BrX7NL1gN3U/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_27.jpg",
    text: "Eye1",
    insta_link: "https://www.instagram.com/p/BraVYhxgqva/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_28.jpg",
    text: "night",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/BrcwUJBgA_7/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_29.jpg",
    text: "View",
    insta_link: "https://www.instagram.com/p/BrcwUJBgA_7/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_30.jpg",
    text: "Spiderman",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/Bq2M9zGBDRH/",
    category: "pantings",
  },
  {
    src: "./assets/insta_content/images/art_31.jpg",
    text: "Captain America",
    insta_link: "https://www.instagram.com/p/Brh07JJAP8T/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_32.jpg",
    text: "Tobey Maguire",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/Brh1MQzACVc/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_33.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/Brmt1MOgS3r/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_34.jpg",
    text: "eye2",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CmKJiD9yI24/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_35.jpg",
    text: "eye3",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/BruIiB9gQRz/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_36.jpg",
    text: "idk",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/BrvQv43AnQA/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_37.jpg",
    text: "Iron Man",
    insta_link: "https://www.instagram.com/p/Bq2ND7Yhhun/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_38.jpg",
    text: "Cat",
    insta_link: "https://www.instagram.com/p/Br4og7Xg1oM/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_39.jpg",
    text: "Bro",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/BsGAYNMgX34/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_40.jpg",
    text: "Justin Biber",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/Bssae16AHLO/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_41.jpg",
    text: "idk",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/BtOFixEAFSB/?img_index=1",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_42.jpg",
    text: "idk",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/BtYo2KRgVQ5/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_43.jpg",
    text: "Aim to the Moon",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/BtspV1lAjTe/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_44.jpg",
    text: "Friends",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/BtyUJOvBSgt/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_45.jpg",
    text: "eye4",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CmKKafAyCjZ/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_46.jpg",
    text: "idk",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/Bt5VpoxA2Jl/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_47.jpg",
    text: "Abhinandan",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/Bu5rgFtgfUH/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_48.jpg",
    text: "Robert Downey",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/B7sjMTQhMws/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_49.jpg",
    text: "idk",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/B9mrPXpBC7t/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_50.jpg",
    text: "idk",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/B9mrXEKh_BC/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_51.jpg",
    text: "Hacker",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/B9rnZ_nhIw3/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_52.jpg",
    text: "Legend",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/B-6yIVmBSNm/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_53.jpg",
    text: "Beauty",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/B_PCU3ph3TJ/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_54.jpg",
    text: "Krishna",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/B_VOGo3hSOU/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_55.jpg",
    text: "idk",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/B_6xAaRhePq/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_56.jpg",
    text: "eye5",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CmOr5S0PR6_/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_57.jpg",
    text: "Cute Kid",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/B9mrXEKh_BC/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_58.jpg",
    text: "design",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CA2DHGdhf6r/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_59.jpg",
    text: "Ganpatiji",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CxXl0jlPbYw/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_60.jpg",
    text: "Goku",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CBlWA70jHfn/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_61.jpg",
    text: "Jonny depp",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CGXec9JhyOV/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_62.jpg",
    text: "Carry Minati",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CKRIrrth_Y5/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_63.jpg",
    text: "View",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/Bq2OsiYBd_n/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_64.jpg",
    text: "Bhuvan Bam",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CXQhJxhPP7E/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_65.jpg",
    text: "Aunty",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CZReRyOtH0w/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_66.jpg",
    text: "eye6",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CZS9jchP6U8/",
    category: "drawings",
  },
  {
    src: "./assets/insta_content/images/art_67.jpg",
    text: "Tom Holland",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CmYayrsvMye/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_68.jpg",
    text: "idk",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CZ9pE3EPYWR/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_69.jpg",
    text: "idk anime",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CaAQXbkvaSG/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_70.jpg",
    text: "Loki",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CbdADgsvkHY/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_71.jpg",
    text: "Wall panting",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CbzhLE7PDKO/",
    category: "pantings",
  },
  {
    src: "./assets/insta_content/images/art_72.jpg",
    text: "Spiderman",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/Cb9dwZ7tvgw/",
    category: "pantings",
  },
  {
    src: "./assets/insta_content/images/art_73.jpg",
    text: "idk",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/BrLEQW8gVWf/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_74.jpg",
    text: "Yash KGF",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CdLKQUcvd8g/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_75.jpg",
    text: "beauty",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/CgJnaEWvEhp/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_76.jpg",
    text: "Anime girl",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CjSqtqrPOHa/?img_index=1",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_77.jpg",
    text: "Anime girl 2",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CjSqtqrPOHa/?img_index=1",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_78.jpg",
    text: "Tobey Maguire",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CmgtiUFv0YT/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_79.jpg",
    text: "Anime Girl",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/BrLIYb2A9L3/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_80.jpg",
    text: "Emma Watson",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CjXVVxqPJtV/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_81.jpg",
    text: "idk",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/CkLASydvMFA/",
    category: "pencil portraits",
  },
  {
    src: "./assets/insta_content/images/art_82.jpg",
    text: "NARUTO",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CkyD1OXP956/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_83.jpg",
    text: "Art 83",
    css_class: "SASUKE",
    insta_link: "https://www.instagram.com/p/CkyFjPmPidx/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_84.jpg",
    text: "GAARA",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/Ck5LNCFPAut/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_85.jpg",
    text: "ANDREW GARFIELD",
    css_class: "wide",
    insta_link: "https://www.instagram.com/p/ClTmRQhv9TB/",
    category: "color portraits",
  },
  {
    src: "./assets/insta_content/images/art_86.jpg",
    text: "HINATA",
    css_class: "big",
    insta_link: "https://www.instagram.com/p/CldvuSDvRio/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_87.jpg",
    text: "ITACHI UCHIHA",
    css_class: "tall",
    insta_link: "https://www.instagram.com/p/ClguTCPPY9C/",
    category: "anime",
  },
  {
    src: "./assets/insta_content/images/art_88.jpg",
    text: "Andrew Garfield",
    css_class: "none",
    insta_link: "https://www.instagram.com/p/CmlSUZxvrz_/",
    category: "pencil portraits",
  },
];

const image_container = document.querySelector(".gallery");

const images_html = image_data.map((current_data) => {
  return `<div class="gallery_card ${current_data.css_class}">
            <img src="${current_data.src}" alt="Beautiful Scenery">
            <div class="gallery_card_overlay">
                <h3>${current_data.text}</h3>
            </div>
        </div>`;
});
image_container.innerHTML = images_html.join("");

const unique_filters = image_data.reduce((acc, current_item) => {
  if (!acc.includes(current_item.category)) {
    acc.push(current_item.category);
  }
  return acc;
}, []);

const filter_bar = document.querySelector(".filter-bar");

filter_bar.innerHTML += unique_filters
  .map((current_item) => {
    return `<button class="filter-btn">${current_item}</button>`;
  })
  .join("");

// filter_bar.addEventListener("click", (event) => {
//   const seleted_filter = event.target.innerText.trim();
//   const selected_image_data = image_data.((current_item) => {
//     if (current_item.category === `${seleted_filter}`) {
//       return current_item;
//     }
//   });
//   console.log(selected_image_data);
//   console.log(seleted_filter);
// });
