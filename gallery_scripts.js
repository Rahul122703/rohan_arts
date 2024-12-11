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

const image_data = [
  {
    src: "./assets/insta_content/images/art_1.jpg",
    text: "Art 1",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_2.jpg",
    text: "Art 2",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_3.jpg",
    text: "Art 3",
    css_class: "wide",
  },
  { src: "./assets/insta_content/images/art_4.jpg", text: "Art 4" },
  {
    src: "./assets/insta_content/images/art_5.jpg",
    text: "Art 5",
    css_class: "big",
  },
  { src: "./assets/insta_content/images/art_6.jpg", text: "Art 6" },
  {
    src: "./assets/insta_content/images/art_7.jpg",
    text: "Art 7",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_8.jpg",
    text: "Art 8",
    css_class: "none",
  },
  { src: "./assets/insta_content/images/art_9.jpg", text: "Art 9" },
  {
    src: "./assets/insta_content/images/art_10.jpg",
    text: "Art 10",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_11.jpg",
    text: "Art 11",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_12.jpg",
    text: "Art 12",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_13.jpg",
    text: "Art 13",
    css_class: "tall",
  },
  { src: "./assets/insta_content/images/art_14.jpg", text: "Art 14" },
  {
    src: "./assets/insta_content/images/art_15.jpg",
    text: "Art 15",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_16.jpg",
    text: "Art 16",
    css_class: "wide",
  },
  { src: "./assets/insta_content/images/art_17.jpg", text: "Art 17" },
  {
    src: "./assets/insta_content/images/art_18.jpg",
    text: "Art 18",
    css_class: "big",
  },
  { src: "./assets/insta_content/images/art_19.jpg", text: "Art 19" },
  {
    src: "./assets/insta_content/images/art_20.jpg",
    text: "Art 20",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_21.jpg",
    text: "Art 21",
    css_class: "tall",
  },
  { src: "./assets/insta_content/images/art_22.jpg", text: "Art 22" },
  {
    src: "./assets/insta_content/images/art_23.jpg",
    text: "Art 23",
    css_class: "big",
  },
  { src: "./assets/insta_content/images/art_24.jpg", text: "Art 24" },
  {
    src: "./assets/insta_content/images/art_25.jpg",
    text: "Art 25",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_26.jpg",
    text: "Art 26",
    css_class: "tall",
  },
  { src: "./assets/insta_content/images/art_27.jpg", text: "Art 27" },
  {
    src: "./assets/insta_content/images/art_28.jpg",
    text: "Art 28",
    css_class: "wide",
  },
  { src: "./assets/insta_content/images/art_29.jpg", text: "Art 29" },
  {
    src: "./assets/insta_content/images/art_30.jpg",
    text: "Art 30",
    css_class: "big",
  },
  { src: "./assets/insta_content/images/art_31.jpg", text: "Art 31" },
  {
    src: "./assets/insta_content/images/art_32.jpg",
    text: "Art 32",
    css_class: "tall",
  },
  { src: "./assets/insta_content/images/art_33.jpg", text: "Art 33" },
  {
    src: "./assets/insta_content/images/art_34.jpg",
    text: "Art 34",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_35.jpg",
    text: "Art 35",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_36.jpg",
    text: "Art 36",
    css_class: "big",
  },
  { src: "./assets/insta_content/images/art_37.jpg", text: "Art 37" },
  { src: "./assets/insta_content/images/art_38.jpg", text: "Art 38" },
  {
    src: "./assets/insta_content/images/art_39.jpg",
    text: "Art 39",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_40.jpg",
    text: "Art 40",
    css_class: "none",
  },
  {
    src: "./assets/insta_content/images/art_41.jpg",
    text: "Art 41",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_42.jpg",
    text: "Art 42",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_43.jpg",
    text: "Art 43",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_44.jpg",
    text: "Art 44",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_45.jpg",
    text: "Art 45",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_46.jpg",
    text: "Art 46",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_47.jpg",
    text: "Art 47",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_48.jpg",
    text: "Art 48",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_49.jpg",
    text: "Art 49",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_50.jpg",
    text: "Art 50",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_51.jpg",
    text: "Art 51",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_52.jpg",
    text: "Art 52",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_53.jpg",
    text: "Art 53",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_54.jpg",
    text: "Art 54",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_55.jpg",
    text: "Art 55",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_56.jpg",
    text: "Art 56",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_57.jpg",
    text: "Art 57",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_58.jpg",
    text: "Art 58",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_59.jpg",
    text: "Art 59",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_60.jpg",
    text: "Art 60",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_61.jpg",
    text: "Art 61",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_62.jpg",
    text: "Art 62",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_63.jpg",
    text: "Art 63",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_64.jpg",
    text: "Art 64",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_65.jpg",
    text: "Art 65",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_66.jpg",
    text: "Art 66",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_67.jpg",
    text: "Art 67",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_68.jpg",
    text: "Art 68",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_69.jpg",
    text: "Art 69",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_70.jpg",
    text: "Art 70",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_71.jpg",
    text: "Art 71",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_72.jpg",
    text: "Art 72",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_73.jpg",
    text: "Art 73",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_74.jpg",
    text: "Art 74",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_75.jpg",
    text: "Art 75",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_76.jpg",
    text: "Art 76",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_77.jpg",
    text: "Art 77",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_78.jpg",
    text: "Art 78",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_79.jpg",
    text: "Art 79",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_80.jpg",
    text: "Art 80",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_81.jpg",
    text: "Art 81",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_82.jpg",
    text: "Art 82",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_83.jpg",
    text: "Art 83",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_84.jpg",
    text: "Art 84",
    css_class: "'none'",
  },
  {
    src: "./assets/insta_content/images/art_85.jpg",
    text: "Art 85",
    css_class: "wide",
  },
  {
    src: "./assets/insta_content/images/art_86.jpg",
    text: "Art 86",
    css_class: "big",
  },
  {
    src: "./assets/insta_content/images/art_87.jpg",
    text: "Art 87",
    css_class: "tall",
  },
  {
    src: "./assets/insta_content/images/art_88.jpg",
    text: "Art 88",
    css_class: "'none'",
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
