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
window.addEventListener("load", (e) => {
  video.play();
});

const videoPause = () => {
  video.pause();
};

const videoPlay = () => {
  video.play();
};

// OPEN & CLOSE LIGHTBOXES

const lightbox_header = document.querySelector(".lightbox-header");

const open_lightbox_header = (e) => {
  lightbox_header.style.display = "block";
};

const close_lightbox_header = (e) => {
  lightbox_header.style.display = "none";
};

const lightbox_4 = document.querySelector(".lightbox-4");

const open_lightbox_4 = (e) => {
  lightbox_4.style.display = "block";
};

const close_lightbox_4 = (e) => {
  lightbox_4.style.display = "none";
};

const lightbox_5__1 = document.querySelector(".lightbox-5__1");

const open_lightbox_5__1 = (e) => {
  lightbox_5__1.style.display = "block";
};

const close_lightbox_5__1 = (e) => {
  lightbox_5__1.style.display = "none";
};

const lightbox_5__2 = document.querySelector(".lightbox-5__2");

const open_lightbox_5__2 = (e) => {
  lightbox_5__2.style.display = "block";
};

const close_lightbox_5__2 = (e) => {
  lightbox_5__2.style.display = "none";
};

const lightbox_5__3 = document.querySelector(".lightbox-5__3");

const open_lightbox_5__3 = (e) => {
  lightbox_5__3.style.display = "block";
};

const close_lightbox_5__3 = (e) => {
  lightbox_5__3.style.display = "none";
};

const lightbox_6__1 = document.querySelector(".lightbox-6");

const open_lightbox_6__1 = (e) => {
  lightbox_6__1.style.display = "block";
};

const close_lightbox_6__1 = (e) => {
  lightbox_6__1.style.display = "none";
};

// LIGHTBOXES - GALLERY 4

const l4__1_thr_photos = 2;
const l4__1_lnfsg_photos = 1;

const l5__1_thr_photos = 1;
const l5__1_lnfsg_photos = 1;

const l5__2_thr_photos = 5;
const l5__2_lnfsg_photos = 7;

const l5__3_thr_photos = 5;
const l5__3_lnfsg_photos = 1;

const l6__1_thr_photos = 1;
const l6__1_lnfsg_photos = 1;

let l4__1_thriller = [];
let l4__1_lnfsg = [];

let l5__1_thriller = [];
let l5__1_lnfsg = [];

let l5__2_thriller = [];
let l5__2_lnfsg = [];

let l5__3_thriller = [];
let l5__3_lnfsg = [];

let l6__1_thriller = [];
let l6__1_lnfsg = [];

const fill_photo_array_thr = (
  number_of_photos,
  photos_array,
  gallery_number,
  slide_number
) => {
  let photo_number = 1;
  while (number_of_photos > 0) {
    photos_array.push(
      `assets/images/slides/l${gallery_number}__slide-${slide_number}/thriller-screenshot-${gallery_number}__${slide_number}_${photo_number}.png`
    );
    number_of_photos--;
    photo_number++;
  }

  return photos_array;
};

const fill_photo_array_lnfsg = (
  number_of_photos,
  photos_array,
  gallery_number,
  slide_number
) => {
  let photo_number = 1;
  while (number_of_photos > 0) {
    photos_array.push(
      `assets/images/slides/l${gallery_number}__slide-${slide_number}/lnfsg-screenshot-${gallery_number}__${slide_number}_${photo_number}.png`
    );
    number_of_photos--;
    photo_number++;
  }

  return photos_array;
};

l4__1_thriller = fill_photo_array_thr(
  l4__1_thr_photos,
  l4__1_thriller,
  "4",
  "1"
);
l4__1_lnfsg = fill_photo_array_lnfsg(l4__1_lnfsg_photos, l4__1_lnfsg, "4", "1");

l5__1_thriller = fill_photo_array_thr(
  l5__1_thr_photos,
  l5__1_thriller,
  "5",
  "1"
);
l5__1_lnfsg = fill_photo_array_lnfsg(l5__1_lnfsg_photos, l5__1_lnfsg, "5", "1");

l5__2_thriller = fill_photo_array_thr(
  l5__2_thr_photos,
  l5__2_thriller,
  "5",
  "2"
);
l5__2_lnfsg = fill_photo_array_lnfsg(l5__2_lnfsg_photos, l5__2_lnfsg, "5", "2");

l5__3_thriller = fill_photo_array_thr(
  l5__3_thr_photos,
  l5__3_thriller,
  "5",
  "3"
);
l5__3_lnfsg = fill_photo_array_lnfsg(l5__3_lnfsg_photos, l5__3_lnfsg, "5", "3");

l6__1_thriller = fill_photo_array_thr(
  l6__1_thr_photos,
  l6__1_thriller,
  "6",
  "1"
);
l6__1_lnfsg = fill_photo_array_lnfsg(l6__1_lnfsg_photos, l6__1_lnfsg, "6", "1");

const l4__1_thriller_section = document.querySelector(
  ".l4__1_thriller-section"
);
const l4__1_lnfsg_section = document.querySelector(".l4__1_lnfsg-section");

const l5__1_thriller_section = document.querySelector(
  ".l5__1_thriller-section"
);
const l5__1_lnfsg_section = document.querySelector(".l5__1_lnfsg-section");

const l5__2_thriller_section = document.querySelector(
  ".l5__2_thriller-section"
);
const l5__2_lnfsg_section = document.querySelector(".l5__2_lnfsg-section");

const l5__3_thriller_section = document.querySelector(
  ".l5__3_thriller-section"
);
const l5__3_lnfsg_section = document.querySelector(".l5__3_lnfsg-section");

const l6__1_thriller_section = document.querySelector(
  ".l6__1_thriller-section"
);
const l6__1_lnfsg_section = document.querySelector(".l6__1_lnfsg-section");

const l4__1_first_slide = document.querySelector(".l4__first-slide");
const l5__1_first_slide = document.querySelector(".l5__1_first-slide");
const l5__2_first_slide = document.querySelector(".l5__2_first-slide");
const l5__3_first_slide = document.querySelector(".l5__3_first-slide");
const l6__1_first_slide = document.querySelector(".l6__1_first-slide");

const add_photos = (gallery_no__mv, photos_array, first_slide) => {
  photos_array.forEach((photo_url) => {
    const new_photo = document.createElement("div");
    new_photo.classList.add(
      photos_array[0].includes("thriller")
        ? "photo-container-thr__small"
        : "photo-container"
    );
    new_photo.style.backgroundImage = `url(${photo_url})`;
    gallery_no__mv.append(new_photo);
    new_photo.addEventListener("click", (e) => {
      first_slide.style.backgroundImage = `url(${photo_url})`;
    });
  });
};

add_photos(l4__1_thriller_section, l4__1_thriller, l4__1_first_slide);
add_photos(l4__1_lnfsg_section, l4__1_lnfsg, l4__1_first_slide);

add_photos(l5__1_thriller_section, l5__1_thriller, l5__1_first_slide);
add_photos(l5__1_lnfsg_section, l5__1_lnfsg, l5__1_first_slide);

add_photos(l5__2_thriller_section, l5__2_thriller, l5__2_first_slide);
add_photos(l5__2_lnfsg_section, l5__2_lnfsg, l5__2_first_slide);

add_photos(l5__3_thriller_section, l5__3_thriller, l5__3_first_slide);
add_photos(l5__3_lnfsg_section, l5__3_lnfsg, l5__3_first_slide);

add_photos(l6__1_thriller_section, l6__1_thriller, l6__1_first_slide);
add_photos(l6__1_lnfsg_section, l6__1_lnfsg, l6__1_first_slide);

const l4__1_finished_edit = document.querySelector(".l4__finished-edit");
const l5__1_finished_edit = document.querySelector(".l5__1_finished-edit");
const l5__2_finished_edit = document.querySelector(".l5__2_finished-edit");
const l5__3_finished_edit = document.querySelector(".l5__3_finished-edit");
const l6__1_finished_edit = document.querySelector(".l6__1_finished-edit");

l4__1_finished_edit.addEventListener("click", (e) => {
  l4__1_first_slide.style.backgroundImage = "url(assets/images/gl-image-4.png)";
});

l5__1_finished_edit.addEventListener("click", (e) => {
  l5__1_first_slide.style.backgroundImage =
    "url(assets/images/gl-images-5__1.png)";
});

l5__2_finished_edit.addEventListener("click", (e) => {
  l5__2_first_slide.style.backgroundImage =
    "url(assets/images/gl-images-5__2.png)";
});

l5__3_finished_edit.addEventListener("click", (e) => {
  l5__3_first_slide.style.backgroundImage =
    "url(assets/images/gl-images-5__3.png)";
});

l6__1_finished_edit.addEventListener("click", (e) => {
  l6__1_first_slide.style.backgroundImage = "url(assets/images/gl-image-6.png)";
});
