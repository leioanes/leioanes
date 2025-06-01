// MENUS - NAV

const project_tab = document.querySelector(".project-tab");

const project_tab_dropdown = document.querySelector(".project-tab-dropdown");

project_tab.addEventListener("mouseover", (e) => {
  project_tab_dropdown.style.display = "block";
});

project_tab.addEventListener("mouseout", (e) => {
  project_tab_dropdown.style.display = "none";
});

// VIDEO - HEADER IMAGE

const video = document.querySelector(".video");
video.loop = true;
window.addEventListener("load", (e) => video.play());

const videoPause = () => {
  video.pause();
};

const videoPlay = () => {
  video.play();
};

// LIGHTBOX - HEADER IMAGE

const lightbox_header = document.querySelector(".lightbox-header");

const open_lightbox_header = (e) => {
  lightbox_header.style.display = "block";
};

const close_lightbox_header = (e) => {
  lightbox_header.style.display = "none";
};

// LIGHTBOX - GALLERIES 1 & 2

const lightbox_1 = document.querySelector(".lightbox-1");
const lightbox_2 = document.querySelector(".lightbox-2");

const open_lightbox_1 = (e) => {
  lightbox_1.style.display = "block";
};

const close_lightbox_1 = (e) => {
  lightbox_1.style.display = "none";
};

const open_lightbox_2 = (e) => {
  lightbox_2.style.display = "block";
};

const close_lightbox_2 = (e) => {
  lightbox_2.style.display = "none";
};

const l1__prev_button = document.querySelector(".l1__prev-button");
const l1__next_button = document.querySelector(".l1__next-button");

const l2__prev_button = document.querySelector(".l2__prev-button");
const l2__next_button = document.querySelector(".l2__next-button");

const l1__slides = document.querySelector(".l1__slides-container").children;
const l2__slides = document.querySelector(".l2__slides-container").children;

let slide_number_1 = 0;
let slides_length_1 = l1__slides.length - 1;

let slide_number_2 = 0;
let slides_length_2 = l2__slides.length - 1;

const l1__next_slide = (e) => {
  slide_number_1 = next_slide(l1__slides, slides_length_1, slide_number_1);
};
const l1__prev_slide = (e) => {
  slide_number_1 = prev_slide(l1__slides, slides_length_1, slide_number_1);
};

const l2__next_slide = (e) => {
  slide_number_2 = next_slide(l2__slides, slides_length_2, slide_number_2);
};
const l2__prev_slide = (e) => {
  slide_number_2 = prev_slide(l2__slides, slides_length_2, slide_number_2);
};

const next_slide = (slides, slides_length, slide_number) => {
  slides[slide_number].style.opacity = "0";
  if (slide_number < slides_length) {
    slide_number++;
  } else {
    slide_number = 0;
  }

  slides[slide_number].style.opacity = "1";

  return slide_number;
};

const prev_slide = (slides, slides_length, slide_number) => {
  slides[slide_number].style.opacity = "0";
  if (slide_number <= slides_length && slide_number !== 0) {
    slide_number--;
  } else {
    slide_number = slides_length;
  }
  slides[slide_number].style.opacity = "1";

  return slide_number;
};

// LIGHTBOX - GALLERY 3

const lightbox_3 = document.querySelector(".lightbox-3");

const open_lightbox_3 = (e) => {
  lightbox_3.style.display = "block";
};

const close_lightbox_3 = (e) => {
  lightbox_3.style.display = "none";
};
