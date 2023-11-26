const body = document.body;
var userAgent = navigator.userAgent;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
) {
  // Redirect or display a message for mobile devices
  document.write('<h1>This website is not developed for mobile devices!</h1>');
  body.style.opacity = 0
}

// preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
  body.style.overflow = "auto";
});

// customCursor for hero section
const heroSection = document.querySelector("#heroSection");
const hero_page_primary = heroSection.querySelector("#hero_page_primary");
const heroCursor = document.getElementById("heroCursor");
const harshang = document.getElementById("harshang");
try {
  hero_page_primary.addEventListener("mousemove", (e) => {
    heroCursor.style.opacity = "100%";
    heroCursor.style.translate = `calc(${e.clientX}px + -50%) calc(${e.clientY}px + -50%)`;
  });
  harshang.addEventListener("mouseover", () => {
    heroCursor.style.transform = "scale(3)";
  })
  harshang.addEventListener("mouseout", () => {
    heroCursor.style.transform = "scale(1)";
  })
  hero_page_primary.addEventListener("mouseout", () => {
    heroCursor.style.opacity = "0%";
  })
} catch (error) {
}

// customCursor for footer section
const download_btn = document.getElementById('download_btn')
const footer = document.querySelector("#footer");
const footerCursor = document.getElementById("footerCursor");
try {
  footer.addEventListener("mousemove", (e) => {
    footerCursor.style.opacity = "100%";
    footerCursor.style.translate = `calc(${e.clientX}px + -50%) calc(${e.clientY}px + -50%)`;
  });
  download_btn.addEventListener("mouseover", () => {
    footerCursor.style.transform = "scale(0)";
  })
  download_btn.addEventListener("mouseout", () => {
    footerCursor.style.transform = "scale(1)";
  })
  footer.addEventListener("mouseout", () => {
    footerCursor.style.opacity = "0%";
  })
} catch (error) {
}

// reveal hero_page_secondary
const hero_page_secondary = heroSection.querySelector('#hero_page_secondary');
gsap.from(hero_page_secondary, {
  opacity: 0,
  scrollTrigger: {
    scroller: window,
    trigger: heroSection,
    pin: true,
    toggleActions: "play none none reverse",
    end: '60% top',
    start: 'top+=0.1% top',
    // markers: true,

    onEnter: () => {
      // console.log('enter');
      harshang.style.transform = 'scale(0.9)';
      hero_page_secondary.style.pointerEvents = 'auto'
    },
    // onEnterBack: () => {
    //   console.log('enter Back');
    //   hero_page_primary.style.transform = 'scale(0.9)';
    //   hero_page_secondary.style.pointerEvents = 'auto'
    // },
    // onLeave: () => {
    //   console.log('leave');
    //   harshang.style.transform = 'scale(0.9)';
    //   hero_page_secondary.style.pointerEvents = 'auto'
    // },
    onLeaveBack: () => {
      // console.log('leave back');
      harshang.style.transform = 'scale(1)';
      hero_page_secondary.style.pointerEvents = 'none'
    },
  }
});

// move_name_with_cursor in hero section 
function move_name_with_cursor(elem, container) {
  try {
    container.addEventListener("mousemove", function (dets) {
      elem.style.top = `calc(8% + ${dets.y * -0.02}px)`;
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
      elem.style.transform = `translate(${dets.offsetX * 0.2}px, ${dets.offsetY * 0.5}px)`;
    });
  } catch (error) { }
}
move_elem_with_cursor(download_btn, download_btn);

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
  socialString_width = socialString.getBoundingClientRect().width;
  socialString_height = socialString.getBoundingClientRect().height;
  socialString.addEventListener("mousemove", function (dets) {
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

// animation : text sliding animation
function HeadingAnim(frontText, backText) {
  gsap.from(frontText, {
    x: '600%',
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: backText,
      start: "end 100%",
      toggleActions: "play none none reset",
      // markers: true,
    }
  });

  gsap.from(backText, {
    x: '500%',
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: backText,
      start: "end 100%",
      toggleActions: "play none none reset",
      // markers: true,
    }
  });
}
let skill_frontText = document.querySelectorAll('#skillSlider h1')[0];
let skill_backText = document.querySelectorAll('#skillSlider h1')[1];
HeadingAnim(skill_frontText, skill_backText)

let project_frontText = document.querySelectorAll('#projectHeadings h1')[0];
let project_backText = document.querySelectorAll('#projectHeadings h1')[1];
HeadingAnim(project_frontText, project_backText)

let contact_frontText = document.querySelectorAll('#contactHeading h1')[0];
let contact_backText = document.querySelectorAll('#contactHeading h1')[1];
HeadingAnim(contact_frontText, contact_backText)



// // animation : move herosection name up
// gsap.from("#name_up", {
//   y: '-600%',
//   duration: 1.4,
//   // ease: "power4.out",
// });
// gsap.from("#name_down", {
//   y: '-200%',
//   delay: 0.3,
//   duration: .5,
//   opacity: 0,
// ease: "power4.out",
// })

// img_move_on_mouse  
function img_move_on_mouse(elem, img) {
  elem.addEventListener("mousemove", function (dets) {
    gsap.to(img, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      x: `${dets.offsetX}px`,
      y: `${dets.offsetY}%`,
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      duration: 0.6,
      opacity: 0,
      scale: 0,
    });
  });
}

// show image on hovering the herosection paragraph using -> img_move_on_mouse()
try {
  heroSection.querySelectorAll("span[data-img]").forEach((e) => img_move_on_mouse(e, e.querySelector("img")));
} catch (error) {
}

// show image on hovering the skill name using -> img_move_on_mouse()
const skillSection = document.getElementById('skillSection');
try {
  document.querySelectorAll(".skill").forEach((e) => img_move_on_mouse(e, e.querySelector("img")));
} catch (error) {
}



// round corners of skill section on scrolling 
gsap.to(skillSection, {
  borderRadius: '0% 0% 100% 100%',
  scrollTrigger: {
    scroller: window,
    trigger: "#projectSection",
    scrub: 1,
    start: "top center+=20%",
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


// footer display gsap animations 
const footer_content = footer.querySelector('#footer_content');

gsap.to(footer, {
  scrollTrigger: {
    scroller: window,
    trigger: footer,
    pin: true,
    scrub: 1,
    start: 'center center',
    endScroller: window,
    end: 'bottom+=50% top',
  }
});

gsap.to(footer, {
  clipPath: 'circle(100%)',
  delay: 2,
  zIndex: 10,
  scrollTrigger: {
    scroller: window,
    trigger: ".scroll_extender",
    scrub: 3,
    start: 'center center',
    end: 'center center',
    onEnter: () => {
      footer_content.style.filter = 'blur(0px)';
    },
    onLeaveBack: () => {
      footer_content.style.filter = 'blur(10px)';
    },
    // markers: true,
  }
});
// document.getElementsByClassName('pin-spacer')[0].style.zIndex = '1!important'

// form validation
try {
  const contact_form = document.getElementById('contact_form');
  const contact_form_button = contact_form.querySelector('button');
  const contactAlert = document.getElementById('contactAlert');
  $(contactAlert).hide();

  const input_name = contact_form.querySelector('#input_name');
  const input_email = contact_form.querySelector('#input_email');
  const input_subject = contact_form.querySelector('#input_subject');
  const input_message = contact_form.querySelector('#input_message');
  let sending;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  contact_form.addEventListener("submit", function (e) {
    let valid = true;
    sending = false;

    if (input_name.value.trim() === '') {
      valid = false;
      input_name.classList.add('border_change');
      setTimeout(() => {
        input_email.classList.remove('border_change');
      }, 1000);
    } else {
      input_email.classList.remove('border_change');
    }

    if (input_email.value.trim() === '') {
      valid = false;
      input_email.classList.add('border_change');
      setTimeout(() => {
        input_email.classList.remove('border_change');
      }, 1000);
      if (!emailRegex.test(input_email.value)) {
        valid = false;
        input_email.classList.add('border_change');
        setTimeout(() => {
          input_email.classList.remove('border_change');
        }, 1000);
      } else {
        input_email.classList.remove('border_change');
      }
    } else {
      input_email.classList.remove('border_change');
    }

    if (input_subject.value.trim() === '') {
      valid = false;
      input_subject.classList.add('border_change');
      setTimeout(() => {
        input_subject.classList.remove('border_change');
      }, 1000);
    } else {
      input_subject.classList.remove('border_change');
    }

    if (input_message.value.trim() === '') {
      valid = false;
      input_message.classList.add('border_change');
      setTimeout(() => {
        input_message.classList.remove('border_change');
      }, 1000);
    } else {
      input_message.classList.remove('border_change');
    }

    e.preventDefault();
    if (sending === false) {
      if (!valid) {
        contact_form.classList.add('shake');
        setTimeout(() => contact_form.classList.remove('shake'), 1000);
      } else {
        sending = true;
        contact_form_button.innerHTML = '<img src="images/time.svg" alt="sending"> <span>Sending</span>';
        $.ajax({
          // url: "mail.php",
          url: "https://ilink.expansers.com/users/fetch_record.php",
          type: "post",
          data: {
            // name: input_name.value,
            // email: input_email.value,
            // subject: input_subject.value,
            // msg: input_message.value,
            "username": "harshang_2004"
          },
          contentType: "application/json",
          success: function (data) {
            console.log(data);
            if (data === '1') {
              contact_form_button.innerHTML = '<img src="images/check.svg" alt="check"> <span>Done</span>';
              setTimeout(() => contact_form_button.innerHTML = '<img src="images/plane.svg" alt="send"> <span>Send</span>', 3500);
            } else {
              contact_form_button.innerHTML = '<img src="images/plane.svg" alt="plane"> <span>Send</span>';
            }
            sending = false;
          },
          error: function (jqXHR, textStatus, errorThrown) {
            // console.log(textStatus, errorThrown);
            sending = false;
            $(contactAlert).fadeIn();
            contact_form_button.innerHTML = '<img src="images/plane.svg" alt="plane"> <span>Send</span>';
            setTimeout(() => $(contactAlert).fadeOut(), 2500);
          },
        });
      }
    }
    sending = false;
  });

} catch (error) { }
