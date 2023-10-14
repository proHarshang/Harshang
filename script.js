const body = document.body;

// preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
  body.style.overflow = "auto";
});

// customCursor
// const heroSection = document.querySelector("#harshang");
// const customCursor = document.getElementById("hero_cursor");
// try {
//   heroSection.addEventListener("mousemove", (e) => {
//     customCursor.style.opacity = "100%";
//     customCursor.style.left = e.clientX + "px";
//     customCursor.style.top = e.clientY + "px";
//   });
//   setInterval(() => {
//     customCursor.style.opacity = "0%";
//   }, 800);
// } catch (error) {
// }

function move_img_with(img, cont) {
  try {
    cont.addEventListener("mousemove", function (dets) {
      img.style.top = `calc(10% + ${dets.y * -0.02}px)`;
      img.style.left = 1 - dets.x * 0.02 + "px";
    });
  } catch (error) {
  }
}

function move_img_with1(img, cont) {
  try {
    cont.addEventListener("mousemove", function (dets) {
      img.style.top = dets.y * 0.05 + "px";
      img.style.left = dets.x * 0.05 + "px";
    });
  } catch (error) {
  }
}

const nameLayer = document.getElementById("nameLayer");
move_img_with(nameLayer, body);

const text_verticle = document.getElementsByClassName("text_verticle")[0];
const skillMain = document.getElementsByClassName("skillMain")[0];
move_img_with1(text_verticle, skillMain);


// skills string svg
const string2 = document.getElementById("string2");
const string2_path = string2.querySelector("svg path");
try {
  let d = `M 0 50 Q ${(window.screen.availWidth - 20) / 2} 50 ${window.screen.availWidth - 10} 50`;
  string2_path.setAttribute("d", d);

  string2.addEventListener("mousemove", function (dets) {
    var path = `M 0 50 Q ${(window.screen.availWidth - 10) / 2} ${dets.offsetY} ${window.screen.availWidth} 50`;
    gsap.to(string2_path, {
      attr: { d: path },
      ease: Power4,
      duration: 0.3,
    });
  });

  string2.addEventListener("mouseleave", function () {
    var path2 = `M 0 50 Q ${(window.screen.availWidth - 10) / 2} 50 ${window.screen.availWidth} 50`;
    gsap.to(string2_path, {
      attr: { d: path2 },
      ease: Bounce,
      duration: 0.4,
    });
  });
} catch (error) {
}

// hero string 
const socialString = document.getElementById('socialString');
const socialString_path = socialString.querySelector("svg path");
let socialString_width;
let socialString_height;
try {
  socialString.addEventListener("mousemove", function (dets) {
    socialString_width = socialString.getBoundingClientRect().width;
    socialString_height = socialString.getBoundingClientRect().height;
    var path = `M ${socialString_width / 2} 0 Q ${dets.offsetX} ${socialString_height / 2} ${dets.offsetX} ${socialString_height}`;
    gsap.to(socialString_path, {
      attr: { d: path },
      ease: Power4,
      duration: 0.3,
    });
  });

  socialString.addEventListener("mouseleave", function () {
    var path2 = `M ${socialString_width / 2} 0 Q ${socialString_width / 2} ${socialString_height / 2} ${socialString_width / 2} ${socialString_height}`;
    gsap.to(socialString_path, {
      attr: { d: path2 },
      ease: Bounce,
      duration: 0.4,
    });
  });
} catch (error) {
}

gsap.from("#skillSliderWrapper", {
  rotate: -50,
  scrollTrigger: {
    scroller: window,
    trigger: "#skillSliderWrapper",
    scrub: 1,
    // markers: true,
    end: "top 30%",
  },
});

gsap.to("#heroOverlay", {
  // backgroundColor: "white",
  // color: "black",
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    scroller: window,
    trigger: "#heroOverlay",
    scrub: 1,
    // markers: true,
    start: "center 30%",
    end: "center+=30% top"
  },
});


// show image on hovering the skill name 
try {
  const skills = document.querySelectorAll(".skill").forEach((e) => {
    let skills_img = e.querySelector("img");
    e.addEventListener("mousemove", function (dets) {
      gsap.to(skills_img, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        x: `${dets.offsetX}px`,
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(skills_img, {
        duration: 0.6,
        opacity: 0,
        scale: 0,
      });
    });
  });
} catch (error) {
}

// round corners of skill section on scrolling 
gsap.to("#skillSection", {
  borderRadius: '0% 0% 100% 100%',
  scrollTrigger: {
    scroller: window,
    trigger: "#projectSection",
    scrub: 2,
    start: "top center",
    end: "top top",
    // markers: true,
  }
});

// initialise project slider 
var swiper = new Swiper("#ProjectSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 1,
    stretch: -20,
    depth: 50,
    modifier: 20,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
