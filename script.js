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


// move_name_with_cursor in hero section 
function move_name_with_cursor(elem, container) {
  try {
    container.addEventListener("mousemove", function (dets) {
      elem.style.top = `calc(10% + ${dets.y * -0.02}px)`;
      elem.style.left = 1 - dets.x * 0.02 + "px";
    });
  } catch (error) {
  }
}
const nameLayer = document.getElementById("nameLayer");
move_name_with_cursor(nameLayer, body);

// move_elem_with_cursor function that is common for any element
function move_elem_with_cursor(elem, container) {
  try {
    container.addEventListener("mousemove", function (dets) {
      elem.style.top = dets.y * 0.05 + "px";
      elem.style.left = dets.x * 0.05 + "px";
    });
  } catch (error) {
  }
}

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

// herosextion text Transform in Y axis autometically 
try {
  let profession_span = document.querySelectorAll(".profession span");
  let s_index = 0;
  setInterval(() => {
    gsap.to(profession_span[s_index], {
      y: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
      onComplete: function () {
        gsap.set(this._targets[0], { y: "100%" })
      },
    });

    s_index === profession_span.length - 1 ? s_index = 0 : s_index++;

    gsap.to(profession_span[s_index], {
      y: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
    });
  }, 2000);
} catch (error) {
}

// text sliding animation
function HeadingAnim(frontText, backText) {
  gsap.from(frontText, {
    x: '600%',
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: backText,
      start: "end 70%",
      // markers: true,
    }
  });

  gsap.from(backText, {
    x: '500%',
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: backText,
      start: "end 70%",
      // markers: true,
    }
  });
}
let skill_frontText = document.querySelectorAll('#skillSlider h1')[0]
let skill_backText = document.querySelectorAll('#skillSlider h1')[1];
HeadingAnim(skill_frontText, skill_backText)

let project_frontText = document.querySelectorAll('#projectHeadings h1')[0]
let project_backText = document.querySelectorAll('#projectHeadings h1')[1];
HeadingAnim(project_frontText, project_backText)



// show image on hovering the skill name 
try {
  const skills = document.querySelectorAll(".skill").forEach((e) => {
    let skills_img = e.querySelector("img");
    e.addEventListener("mousemove", function (dets) {
      console.log(dets);
      gsap.to(skills_img, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        x: `${dets.offsetX}px`,
        y: `${dets.offsetY}%`,
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
    scrub: 1,
    start: "top center+=10%",
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


gsap.to("#whiteBlob", {
  rotate: '360deg',
  scrollTrigger: {
    scroller: window,
    trigger: "#whiteBlob",
    pin: true,
    scrub: 1,
    start: 'center center',
    start: 'center center',
    endScroller: window,
    end: 'bottom+=50% top',
    markers: true,
  }
});