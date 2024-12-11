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
    id: 1,
    src: "./assets/insta_content/images/art_1.jpg",
    text: "The Joker",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "paintings",
    css_class: "wide",
  },
  {
    id: 2,
    src: "./assets/insta_content/images/art_2.jpg",
    text: "Rajesh Khanna",
    insta_link: "https://www.instagram.com/p/CnTwjnDtxsQ/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 3,
    src: "./assets/insta_content/images/art_3.jpg",
    text: "Kakashi Sensai",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "anime",
    css_class: "tall",
  },
  {
    id: 4,
    src: "./assets/insta_content/images/art_4.jpg",
    text: "Sashi kapoor",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 5,
    src: "./assets/insta_content/images/art_5.jpg",
    text: "girl123",
    insta_link: "https://www.instagram.com/p/CoOtoYOvgVM/",
    category: "color portraits",
    css_class: "big",
  },
  {
    id: 6,
    src: "./assets/insta_content/images/art_6.jpg",
    text: "person",
    insta_link: "https://www.instagram.com/p/BrQYEFnABrU/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 7,
    src: "./assets/insta_content/images/art_7.jpg",
    text: "Avtar",
    insta_link: "https://www.instagram.com/p/CpuJdmEtDmO/",
    category: "color portraits",
    css_class: "tall",
  },
  {
    id: 8,
    src: "./assets/insta_content/images/art_8.jpg",
    text: "Cillian Murphy",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/s",
    category: "color portraits",
    css_class: "none",
  },
  {
    id: 9,
    src: "./assets/insta_content/images/art_9.jpg",
    text: "Lucifer",
    insta_link: "https://www.instagram.com/p/CtlkbZRPhke/",
    category: "color portraits",
    css_class: "undefined",
  },

  {
    id: 11,
    src: "./assets/insta_content/images/art_11.jpg",
    text: "Krishna",
    insta_link: "https://www.instagram.com/p/CuSQdrXtG8y/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 12,
    src: "./assets/insta_content/images/art_12.jpg",
    text: "MADARA UCHIHA",
    insta_link: "https://www.instagram.com/p/Cl_TXskP_bN/",
    category: "anime",
    css_class: "big",
  },
  {
    id: 13,
    src: "./assets/insta_content/images/art_13.jpg",
    text: "RADHA KRISHNA",
    insta_link: "https://www.instagram.com/p/CvPG4n0PyTH/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 14,
    src: "./assets/insta_content/images/art_14.jpg",
    text: "RENGOKU",
    insta_link: "https://www.instagram.com/p/Cw5L0D7tgX6/",
    category: "anime",
    css_class: "undefined",
  },
  {
    id: 15,
    src: "./assets/insta_content/images/art_15.jpg",
    text: "GANPATI BAPPA",
    insta_link: "https://www.instagram.com/p/CxXl0jlPbYw/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 16,
    src: "./assets/insta_content/images/art_16.jpg",
    text: "GANPATI BAPPA",
    insta_link: "https://www.instagram.com/p/CxlCIQNvjHe/",
    category: "drawings",
    css_class: "wide",
  },
  {
    id: 17,
    src: "./assets/insta_content/images/art_17.jpg",
    text: "DEADPOOL",
    insta_link: "https://www.instagram.com/p/CyQPPP8PKhR/",
    category: "paintings",
    css_class: "undefined",
  },
  {
    id: 18,
    src: "./assets/insta_content/images/art_18.jpg",
    text: "🙏SIYA RAM🙏",
    insta_link: "https://www.instagram.com/p/C2ZI5xctHB0/",
    category: "paintings",
    css_class: "big",
  },
  {
    id: 19,
    src: "./assets/insta_content/images/art_19.jpg",
    text: "MS DHONI",
    insta_link: "https://www.instagram.com/p/C2egZ5ot1_S/",
    category: "color portraits",
    css_class: "undefined",
  },
  {
    id: 20,
    src: "./assets/insta_content/images/art_20.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/C4x2xMwvrOd/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 21,
    src: "./assets/insta_content/images/art_21.jpg",
    text: "Virat Kholi",
    insta_link: "https://www.instagram.com/p/C8pIwkcysnY/",
    category: "color portraits",
    css_class: "tall",
  },
  {
    id: 22,
    src: "./assets/insta_content/images/art_22.jpg",
    text: "Stan lee",
    insta_link: "https://www.instagram.com/p/BrUVw5xAnHC/",
    category: "pencil portraits",
    css_class: "undefined",
  },
  {
    id: 23,
    src: "./assets/insta_content/images/art_23.jpg",
    text: "WEDNESDAY",
    insta_link: "https://www.instagram.com/p/CmG0Yq3Pml9/",
    category: "pencil portraits",
    css_class: "undefined",
  },
  {
    id: 25,
    src: "./assets/insta_content/images/art_25.jpg",
    text: "Zoro ",
    insta_link: "https://www.instagram.com/p/DDMoXyjy5eZ/",
    category: "anime",
    css_class: "none",
  },
  {
    id: 26,
    src: "./assets/insta_content/images/art_26.jpg",
    text: "Hardy Sandu",
    insta_link: "https://www.instagram.com/p/BrX7NL1gN3U/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 27,
    src: "./assets/insta_content/images/art_27.jpg",
    text: "Eye1",
    insta_link: "https://www.instagram.com/p/BraVYhxgqva/",
    category: "drawings",
    css_class: "undefined",
  },
  {
    id: 28,
    src: "./assets/insta_content/images/art_28.jpg",
    text: "night",
    insta_link: "https://www.instagram.com/p/BrcwUJBgA_7/",
    category: "drawings",
    css_class: "wide",
  },
  {
    id: 29,
    src: "./assets/insta_content/images/art_29.jpg",
    text: "View",
    insta_link: "https://www.instagram.com/p/BrcwUJBgA_7/",
    category: "drawings",
    css_class: "undefined",
  },
  {
    id: 30,
    src: "./assets/insta_content/images/art_30.jpg",
    text: "Spiderman",
    insta_link: "https://www.instagram.com/p/Bq2M9zGBDRH/",
    category: "paintings",
    css_class: "big",
  },
  {
    id: 31,
    src: "./assets/insta_content/images/art_31.jpg",
    text: "Captain America",
    insta_link: "https://www.instagram.com/p/Brh07JJAP8T/",
    category: "drawings",
    css_class: "undefined",
  },
  {
    id: 32,
    src: "./assets/insta_content/images/art_32.jpg",
    text: "Tobey Maguire",
    insta_link: "https://www.instagram.com/p/Brh1MQzACVc/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 33,
    src: "./assets/insta_content/images/art_33.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/Brmt1MOgS3r/",
    category: "pencil portraits",
    css_class: "undefined",
  },
  {
    id: 34,
    src: "./assets/insta_content/images/art_34.jpg",
    text: "eye2",
    insta_link: "https://www.instagram.com/p/CmKJiD9yI24/",
    category: "drawings",
    css_class: "wide",
  },
  {
    id: 35,
    src: "./assets/insta_content/images/art_35.jpg",
    text: "eye3",
    insta_link: "https://www.instagram.com/p/BruIiB9gQRz/",
    category: "drawings",
    css_class: "none",
  },
  {
    id: 36,
    src: "./assets/insta_content/images/art_36.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/BrvQv43AnQA/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 37,
    src: "./assets/insta_content/images/art_37.jpg",
    text: "Iron Man",
    insta_link: "https://www.instagram.com/p/Bq2ND7Yhhun/",
    category: "pencil portraits",
    css_class: "undefined",
  },
  {
    id: 38,
    src: "./assets/insta_content/images/art_38.jpg",
    text: "Cat",
    insta_link: "https://www.instagram.com/p/Br4og7Xg1oM/",
    category: "drawings",
    css_class: "undefined",
  },
  {
    id: 39,
    src: "./assets/insta_content/images/art_39.jpg",
    text: "Bro",
    insta_link: "https://www.instagram.com/p/BsGAYNMgX34/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 40,
    src: "./assets/insta_content/images/art_40.jpg",
    text: "Justin Biber",
    insta_link: "https://www.instagram.com/p/Bssae16AHLO/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 41,
    src: "./assets/insta_content/images/art_41.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/BtOFixEAFSB/?img_index=1",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 42,
    src: "./assets/insta_content/images/art_42.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/BtYo2KRgVQ5/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 43,
    src: "./assets/insta_content/images/art_43.jpg",
    text: "Aim to the Moon",
    insta_link: "https://www.instagram.com/p/BtspV1lAjTe/",
    category: "drawings",
    css_class: "tall",
  },
  {
    id: 44,
    src: "./assets/insta_content/images/art_44.jpg",
    text: "Friends",
    insta_link: "https://www.instagram.com/p/BtyUJOvBSgt/",
    category: "drawings",
    css_class: "none",
  },
  {
    id: 45,
    src: "./assets/insta_content/images/art_45.jpg",
    text: "eye4",
    insta_link: "https://www.instagram.com/p/CmKKafAyCjZ/",
    category: "drawings",
    css_class: "wide",
  },
  {
    id: 46,
    src: "./assets/insta_content/images/art_46.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/Bt5VpoxA2Jl/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 47,
    src: "./assets/insta_content/images/art_47.jpg",
    text: "Abhinandan",
    insta_link: "https://www.instagram.com/p/Bu5rgFtgfUH/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 48,
    src: "./assets/insta_content/images/art_48.jpg",
    text: "Robert Downey",
    insta_link: "https://www.instagram.com/p/B7sjMTQhMws/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 49,
    src: "./assets/insta_content/images/art_49.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/B9mrPXpBC7t/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 50,
    src: "./assets/insta_content/images/art_50.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/B9mrXEKh_BC/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 51,
    src: "./assets/insta_content/images/art_51.jpg",
    text: "Hacker",
    insta_link: "https://www.instagram.com/p/B9rnZ_nhIw3/",
    category: "paintings",
    css_class: "tall",
  },
  {
    id: 52,
    src: "./assets/insta_content/images/art_52.jpg",
    text: "Legend",
    insta_link: "https://www.instagram.com/p/B-6yIVmBSNm/",
    category: "drawings",
    css_class: "none",
  },
  {
    id: 53,
    src: "./assets/insta_content/images/art_53.jpg",
    text: "Beauty",
    insta_link: "https://www.instagram.com/p/B_PCU3ph3TJ/",
    category: "drawings",
    css_class: "wide",
  },
  {
    id: 54,
    src: "./assets/insta_content/images/art_54.jpg",
    text: "Krishna",
    insta_link: "https://www.instagram.com/p/B_VOGo3hSOU/",
    category: "drawings",
    css_class: "big",
  },
  {
    id: 55,
    src: "./assets/insta_content/images/art_55.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/B_6xAaRhePq/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 56,
    src: "./assets/insta_content/images/art_56.jpg",
    text: "eye5",
    insta_link: "https://www.instagram.com/p/CmOr5S0PR6_/",
    category: "drawings",
    css_class: "none",
  },
  {
    id: 57,
    src: "./assets/insta_content/images/art_57.jpg",
    text: "Cute Kid",
    insta_link: "https://www.instagram.com/p/B9mrXEKh_BC/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 58,
    src: "./assets/insta_content/images/art_58.jpg",
    text: "design",
    insta_link: "https://www.instagram.com/p/CA2DHGdhf6r/",
    category: "drawings",
    css_class: "big",
  },
  {
    id: 59,
    src: "./assets/insta_content/images/art_59.jpg",
    text: "Ganpatiji",
    insta_link: "https://www.instagram.com/p/CxXl0jlPbYw/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 60,
    src: "./assets/insta_content/images/art_60.jpg",
    text: "Goku",
    insta_link: "https://www.instagram.com/p/CBlWA70jHfn/",
    category: "anime",
    css_class: "none",
  },
  {
    id: 61,
    src: "./assets/insta_content/images/art_61.jpg",
    text: "Jonny depp",
    insta_link: "https://www.instagram.com/p/CGXec9JhyOV/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 62,
    src: "./assets/insta_content/images/art_62.jpg",
    text: "Carry Minati",
    insta_link: "https://www.instagram.com/p/CKRIrrth_Y5/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 63,
    src: "./assets/insta_content/images/art_63.jpg",
    text: "View",
    insta_link: "https://www.instagram.com/p/Bq2OsiYBd_n/",
    category: "drawings",
    css_class: "tall",
  },
  {
    id: 64,
    src: "./assets/insta_content/images/art_64.jpg",
    text: "Bhuvan Bam",
    insta_link: "https://www.instagram.com/p/CXQhJxhPP7E/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 65,
    src: "./assets/insta_content/images/art_65.jpg",
    text: "Aunty",
    insta_link: "https://www.instagram.com/p/CZReRyOtH0w/",
    category: "color portraits",
    css_class: "wide",
  },
  {
    id: 66,
    src: "./assets/insta_content/images/art_66.jpg",
    text: "eye6",
    insta_link: "https://www.instagram.com/p/CZS9jchP6U8/",
    category: "drawings",
    css_class: "big",
  },
  {
    id: 67,
    src: "./assets/insta_content/images/art_67.jpg",
    text: "Tom Holland",
    insta_link: "https://www.instagram.com/p/CmYayrsvMye/",
    category: "pencil portraits",
    css_class: "tall",
  },
  {
    id: 68,
    src: "./assets/insta_content/images/art_68.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/CZ9pE3EPYWR/",
    category: "pencil portraits",
    css_class: "none",
  },
  {
    id: 69,
    src: "./assets/insta_content/images/art_69.jpg",
    text: "idk anime",
    insta_link: "https://www.instagram.com/p/CaAQXbkvaSG/",
    category: "anime",
    css_class: "wide",
  },
  {
    id: 70,
    src: "./assets/insta_content/images/art_70.jpg",
    text: "Loki",
    insta_link: "https://www.instagram.com/p/CbdADgsvkHY/",
    category: "color portraits",
    css_class: "big",
  },
  {
    id: 71,
    src: "./assets/insta_content/images/art_71.jpg",
    text: "Wall panting",
    insta_link: "https://www.instagram.com/p/CbzhLE7PDKO/",
    category: "paintings",
    css_class: "tall",
  },
  {
    id: 72,
    src: "./assets/insta_content/images/art_72.jpg",
    text: "Spiderman",
    insta_link: "https://www.instagram.com/p/Cb9dwZ7tvgw/",
    category: "paintings",
    css_class: "none",
  },
  {
    id: 73,
    src: "./assets/insta_content/images/art_73.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/BrLEQW8gVWf/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 74,
    src: "./assets/insta_content/images/art_74.jpg",
    text: "Yash KGF",
    insta_link: "https://www.instagram.com/p/CdLKQUcvd8g/",
    category: "color portraits",
    css_class: "big",
  },
  {
    id: 75,
    src: "./assets/insta_content/images/art_75.jpg",
    text: "beauty",
    insta_link: "https://www.instagram.com/p/CgJnaEWvEhp/",
    category: "color portraits",
    css_class: "tall",
  },
  {
    id: 76,
    src: "./assets/insta_content/images/art_76.jpg",
    text: "Anime girl",
    insta_link: "https://www.instagram.com/p/CjSqtqrPOHa/?img_index=1",
    category: "anime",
    css_class: "none",
  },
  {
    id: 77,
    src: "./assets/insta_content/images/art_77.jpg",
    text: "Anime girl 2",
    insta_link: "https://www.instagram.com/p/CjSqtqrPOHa/?img_index=1",
    category: "anime",
    css_class: "wide",
  },
  {
    id: 78,
    src: "./assets/insta_content/images/art_78.jpg",
    text: "Tobey Maguire",
    insta_link: "https://www.instagram.com/p/CmgtiUFv0YT/",
    category: "pencil portraits",
    css_class: "big",
  },
  {
    id: 79,
    src: "./assets/insta_content/images/art_79.jpg",
    text: "Anime Girl",
    insta_link: "https://www.instagram.com/p/BrLIYb2A9L3/",
    category: "anime",
    css_class: "tall",
  },
  {
    id: 80,
    src: "./assets/insta_content/images/art_80.jpg",
    text: "Emma Watson",
    insta_link: "https://www.instagram.com/p/CjXVVxqPJtV/",
    category: "color portraits",
    css_class: "none",
  },
  {
    id: 81,
    src: "./assets/insta_content/images/art_81.jpg",
    text: "idk",
    insta_link: "https://www.instagram.com/p/CkLASydvMFA/",
    category: "pencil portraits",
    css_class: "wide",
  },
  {
    id: 82,
    src: "./assets/insta_content/images/art_82.jpg",
    text: "NARUTO",
    insta_link: "https://www.instagram.com/p/CkyD1OXP956/",
    category: "anime",
    css_class: "big",
  },
  {
    id: 83,
    src: "./assets/insta_content/images/art_83.jpg",
    text: "Art 83",
    insta_link: "https://www.instagram.com/p/CkyFjPmPidx/",
    category: "anime",
    css_class: "SASUKE",
  },
  {
    id: 84,
    src: "./assets/insta_content/images/art_84.jpg",
    text: "GAARA",
    insta_link: "https://www.instagram.com/p/Ck5LNCFPAut/",
    category: "anime",
    css_class: "none",
  },
  {
    id: 85,
    src: "./assets/insta_content/images/art_85.jpg",
    text: "ANDREW GARFIELD",
    insta_link: "https://www.instagram.com/p/ClTmRQhv9TB/",
    category: "color portraits",
    css_class: "wide",
  },
  {
    id: 86,
    src: "./assets/insta_content/images/art_86.jpg",
    text: "HINATA",
    insta_link: "https://www.instagram.com/p/CldvuSDvRio/",
    category: "anime",
    css_class: "big",
  },
  {
    id: 87,
    src: "./assets/insta_content/images/art_87.jpg",
    text: "ITACHI UCHIHA",
    insta_link: "https://www.instagram.com/p/ClguTCPPY9C/",
    category: "anime",
    css_class: "tall",
  },
  {
    id: 88,
    src: "./assets/insta_content/images/art_88.jpg",
    text: "Andrew Garfield",
    insta_link: "https://www.instagram.com/p/CmlSUZxvrz_/",
    category: "pencil portraits",
    css_class: "none",
  },
];

const image_container = document.querySelector(".gallery");

window.addEventListener("DOMContentLoaded", function () {
  getItems(image_data);
  getAllButtons();
});

function getItems(data) {
  image_container.innerHTML = null;
  let items_to_insert = data.map(function (current_data) {
    return `<div class="gallery_card ${current_data.css_class}">
                <img src="${current_data.src}" data-id = ${current_data.id} alt="Beautiful Scenery">
                <div class="gallery_card_overlay">
                   <h3>${current_data.text}</h3>
                </div>
            </div>`;
  });
  items_to_insert = items_to_insert.join("");
  image_container.innerHTML = items_to_insert;
}

const filter_bar = document.querySelector(".filter-bar");
function getAllButtons() {
  let all_buttons_array = image_data.reduce(
    function (acc, currentItem) {
      if (!acc.includes(currentItem.category)) {
        acc.push(currentItem.category);
      }
      return acc;
    },
    ["all"]
  );
  filter_bar.innerHTML = null;
  all_buttons_array.forEach(function (currentItem) {
    filter_bar.innerHTML += `<button id="${currentItem}" class="filter-btn">${currentItem} </button>`;
  });

  const all_buttons = document.querySelectorAll(".filter-btn ");
  all_buttons.forEach(function (button) {
    let new_menu_list = [];
    button.addEventListener("click", function (e) {
      const clicked_item = e.currentTarget.textContent.trim();
      new_menu_list = image_data.filter(function (currentItem) {
        if (currentItem.category.trim() == clicked_item) {
          return currentItem.category;
        }
      });
      getItems(new_menu_list);
      if (clicked_item == "all") {
        getItems(image_data);
      }
    });
  });
}

const search_input = document.querySelector(".search-input");
search_input.addEventListener("keydown", function () {
  const filtered_products = image_data.filter(function (currentItem) {
    if (
      currentItem.text
        .toLocaleLowerCase()
        .trim()
        .includes(search_input.value.toLowerCase().trim())
    ) {
      return currentItem;
    } else {
      getItems(image_data);
    }
  });
  getItems(filtered_products);
  if (filtered_products.length === 0) {
    image_container.innerHTML = `<span class="no-product">No art with this name was found</span>`;
  }
});

const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

image_container.addEventListener("dblclick", (event) => {
  const element_clicked = event.target.getAttribute("data-id");

  const selected_image = image_data.find(
    (currentItem) => currentItem.id == element_clicked
  );

  console.log(selected_image);

  if (selected_image) {
    modal.style.display = "flex";
    modal_content.innerHTML = `
      <button class="close-btn" id="close-btn">&#10006;</button>
      <img src="${selected_image.src}" alt="Image" class="modal-image">
      <p class="modal-text">${selected_image.text}</p>
      <a href="${selected_image.insta_link}" target="_blank">
        <button class = "instagram_button"> 
          <span class="icon"><svg height="33" viewBox="0 0 128 128" width="33" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 594 633)" gradientUnits="userSpaceOnUse" x1="-566.711" x2="-493.288" y1="516.569" y2="621.43"><stop offset="0" stop-color="#ffb900"></stop><stop offset="1" stop-color="#9100eb"></stop></linearGradient><circle cx="64" cy="64" fill="url(#a)" r="64"></circle><g fill="#fff"><path d="m82.333 104h-36.666c-11.947 0-21.667-9.719-21.667-21.667v-36.666c0-11.948 9.72-21.667 21.667-21.667h36.666c11.948 0 21.667 9.719 21.667 21.667v36.667c0 11.947-9.719 21.666-21.667 21.666zm-36.666-73.333c-8.271 0-15 6.729-15 15v36.667c0 8.271 6.729 15 15 15h36.666c8.271 0 15-6.729 15-15v-36.667c0-8.271-6.729-15-15-15z"></path><path d="m64 84c-11.028 0-20-8.973-20-20 0-11.029 8.972-20 20-20s20 8.971 20 20c0 11.027-8.972 20-20 20zm0-33.333c-7.352 0-13.333 5.981-13.333 13.333 0 7.353 5.981 13.333 13.333 13.333s13.333-5.98 13.333-13.333c0-7.352-5.98-13.333-13.333-13.333z"></path><circle cx="85.25" cy="42.75" r="4.583"></circle></g></svg></span>
          <span class="text1">Go to Insta</span>
          <span class="text2">Go!!</span> 
        </button>
      </a>`;
  } else {
    console.log("Image not found");
  }
});

modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-btn")) {
    modal.style.display = "none";
  }
});
