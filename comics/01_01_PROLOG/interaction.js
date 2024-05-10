function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function createObserver(element, act, options) {
  const observer = new IntersectionObserver(act, options);
  observer.observe(element);
}

const i001_panel = document.querySelector(".i-001");
const i001_options = {
  threshold: 0.4,
};

function i001_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio);

    if (e.isIntersecting) {
      e.target.children[1].classList.toggle("fadeIn_el", true);
      e.target.children[1].classList.toggle("fadeOut_el", false);

      delay(1000).then(() => {
        e.target.children[2].classList.toggle("fadeIn_el", true);
        e.target.children[2].classList.toggle("fadeOut_el", false);

        this.unobserve(e.target);
      });
    }

    // if (e.isIntersecting === true) {
    //   i001_panel.children[1].classList.add("fadeIn_el");
    //   i001_panel.children[1].style.opacity = "1";
    // } else {
    //   // i001_panel.children[1].classList.add("fadeOut_el");
    //   i001_panel.children[1].style.opacity = "0";
    // }
  });
  //
  // if (entries[0].intersectingRatio >= 0.6) {
  //   console.log("asas");
  //   i001_panel.children[2].classList.toggle("fadeIn_el");
  //   i001_panel.children[2].style.opacity = "1";
  // } else {
  // }
  //
}

createObserver(i001_panel, i001_act, i001_options);
