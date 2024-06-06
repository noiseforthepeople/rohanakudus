/********************* create observer ************************/
function createObserver(element, act, options) {
  if (element === null) return console.log("no element to be observed");

  const observer = new IntersectionObserver(act, options);
  observer.observe(element);
}

// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });

/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop(callback, refresh = 100) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== "function") return;

  // Setup scrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function (event) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
}

/********************* (parallax) create scrollMagic controller ************************/

// function countHeightPanel(element) {
//   if (element === null) return console.log("no element existed");
//   return element.getBoundingClientRect().height.toFixed(2);
// }

function createScene(element, act, options) {
  if (element === null)
    return console.log("no scrollMagic scene panel created");

  // console.log(element.scrollHeight);
  // console.log("s");
  // console.log(element.getBoundingClientRect().height.toFixed(2));

  const scene = new ScrollMagic.Scene(options)
    .on("add", function () {
      this.duration(element.getBoundingClientRect().height.toFixed(2));
      delay(500).then(() => {
        this.duration(element.getBoundingClientRect().height.toFixed(2));

        // console.log("baww");
      });
      //
    })
    .addTo(scrollMagicController)
    .addIndicators()
    .on("start", function () {
      this.duration(element.getBoundingClientRect().height.toFixed(2));
    })
    .on("progress", act);

  specialPanelsScenes.push(scene);
}

/********************* create special panels object ***********************/
/********************* start prolog1_001 *********************/
specialPanels.prolog1_001 = document.querySelector(".sp-prolog1-001");
specialPanelsOpt.prolog1_001 = { threshold: 0.5 };

function prolog1_001_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_2s", true);
        // element 2
        delay(1000).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.prolog1_001,
  prolog1_001_act,
  specialPanelsOpt.prolog1_001
);
/******** end prolog1_001 ********/

/********************* start chapter1pg1_000 *********************/
specialPanels.chapter1pg1_000 = document.querySelector(".sp-chapter1pg1-000");
specialPanelsOpt.chapter1pg1_000 = { threshold: 0.2 };

function chapter1pg1_000_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1

      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_05s", true);
      });

      // element 2
      delay(1500).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_05s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter1pg1_000,
  chapter1pg1_000_act,
  specialPanelsOpt.chapter1pg1_000
);
/******** end chapter1pg1_000 ********/

/********************* start chapter1pg1_001 *********************/
specialPanels.chapter1pg1_001 = document.querySelector(".sp-chapter1pg1-001");
specialPanelsOpt.chapter1pg1_001 = { threshold: 0.8 };

function chapter1pg1_001_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_2s", true);
        // console.log(e.target.children[2]);
        // element 2
        delay(1000).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);
          // console.log("2");
        });

        // element 3
        delay(2000).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_2s", true);
          // console.log("3");
        });

        // element 4
        delay(3000).then(() => {
          e.target.children[4].style.opacity = "1";
          e.target.children[4].classList.toggle("fadeIn_2s", true);
          // console.log("4");
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg1_001,
  chapter1pg1_001_act,
  specialPanelsOpt.chapter1pg1_001
);
/******** end chapter1pg1_001 ********/

/********************* start chapter1pg1_002 *********************/
specialPanels.chapter1pg1_002 = document.querySelector(".sp-chapter1pg1-002");
specialPanelsOpt.chapter1pg1_002 = { threshold: 0.5 };

function chapter1pg1_002_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);

        // element 2
        delay(1000).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_1s", true);
        });

        // element 3
        delay(2000).then(() => {
          e.target.children[4].style.opacity = "1";
          e.target.children[4].classList.toggle("fadeIn_1s", true);
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg1_002,
  chapter1pg1_002_act,
  specialPanelsOpt.chapter1pg1_002
);
/******** end chapter1pg1_002 ********/

/********************* start chapter1pg1_003 *********************/
specialPanels.chapter1pg1_003 = document.querySelector(".sp-chapter1pg1-003");
specialPanelsOpt.chapter1pg1_003 = { threshold: 0.5 };

function chapter1pg1_003_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
        // element 2
        delay(500).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);
        });

        // element 3
        delay(1000).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_2s", true);
        });

        delay(1500).then(() => {
          e.target.children[4].style.opacity = "1";
          e.target.children[4].classList.toggle("fadeIn_2s", true);
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg1_003,
  chapter1pg1_003_act,
  specialPanelsOpt.chapter1pg1_003
);
/******** end chapter1pg1_003 ********/

/********************* start chapter1pg2_002 *********************/
specialPanels.chapter1pg2_002 = document.querySelector(".sp-chapter1pg2-002");

specialPanelsOpt.chapter1pg2_002 = {
  triggerElement: specialPanels.chapter1pg2_002,
  // duration: countHeightPanel(specialPanels.chapter1pg2_002),
  // duration: "50%",
  // duration: getComputedStyle(
  //   specialPanels.chapter1pg2_002.children[1]
  // ).height.replace("px", ""),
  // duration: specialPanels.chapter1pg2_002
  //   .getBoundingClientRect()
  //   .height.toFixed(2),
  duration: 50,
  triggerHook: "0.3",
  offset: "0",
  reverse: true,
};

function chapter1pg2_002_act() {
  // triggerDOM.innerText = this.progress().toFixed(2);
  // triggerDOM.style.backgroundColor = "rgba(244, 244, 10," + this.progress().toFixed(2)+ ")";

  let scrollProgres = this.progress().toFixed(2) * 100;
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 9)) {
    // this.duration(theScene.getBoundingClientRect().height.toFixed(2));
    // console.log("0-9%");
    theScene.children[0].style.opacity = "1";
    theScene.children[1].style.opacity = "0";
    theScene.children[2].style.opacity = "0";
  }
  if (between(scrollProgres, 10, 59)) {
    // console.log("10-59%");

    theScene.children[0].style.opacity = "0";
    theScene.children[1].style.opacity = "1";
    theScene.children[2].style.opacity = "0";
  }
  if (between(scrollProgres, 60, 100)) {
    // console.log("60-100%");

    theScene.children[0].style.opacity = "0";
    theScene.children[1].style.opacity = "0";
    theScene.children[2].style.opacity = "1";
  }

  // console.log(scrollProgres);
}

createScene(
  specialPanels.chapter1pg2_002,
  chapter1pg2_002_act,
  specialPanelsOpt.chapter1pg2_002
);

/********************* end chapter1pg2_002 *********************/

/********************* start chapter1pg2_003 *********************/
specialPanels.chapter1pg2_003 = document.querySelector(".sp-chapter1pg2-003");

specialPanelsOpt.chapter1pg2_003 = {
  triggerElement: specialPanels.chapter1pg2_003,
  duration: 50,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function chapter1pg2_003_act() {
  // triggerDOM.innerText = this.progress().toFixed(2);
  // triggerDOM.style.backgroundColor = "rgba(244, 244, 10," + this.progress().toFixed(2)+ ")";

  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 40)) {
    // rumah
    theScene.children[1].style.transform = `translateY(${
      60 - scrollProgres * 1.5
    }%)`;

    // teks kali ini
    theScene.children[2].style.transform = `translateY(-${
      50 - scrollProgres * 1.25
    }%)`;

    // teks kali ini
    theScene.children[2].style.opacity = `${this.progress().toFixed(2) * 2.5} `;
  }

  if (between(scrollProgres, 0, 70)) {
    // teks asahan
    theScene.children[4].style.opacity = `${(scrollProgres - 40) / 100 / 0.3} `;
  }

  // jaraknya 60-40 = 20
  // 30/20 = 1.5
  if (between(scrollProgres, 40, 60)) {
    theScene.children[3].style.transform = `translateY(${
      35 - (scrollProgres - 40) * 1.75
    }%)`;
  }

  // hitung opacity
  // 70% scroll ke 75% scroll jaraknya 5% = 5
  // 5 / 100 (dari 100% scroll) = 0.05
  if (between(scrollProgres, 0, 100)) {
    // console.log(scrollProgres);

    theScene.children[3].style.opacity = `
    ${1 - (scrollProgres - 80) / 100 / 0.2} `;
  }

  if (between(scrollProgres, 0, 100)) {
    // console.log(scrollProgres);

    // si rohana jalan
    theScene.children[5].style.opacity = `
    ${(scrollProgres - 75) / 100 / 0.25} `;
  }
}

createScene(
  specialPanels.chapter1pg2_003,
  chapter1pg2_003_act,
  specialPanelsOpt.chapter1pg2_003
);

/********************* end chapter1pg2_003 *********************/

/********************* start chapter1pg4_001 *********************/
specialPanels.chapter1pg4_001 = document.querySelector(".sp-chapter1pg4-001");

specialPanelsOpt.chapter1pg4_001 = {
  triggerElement: specialPanels.chapter1pg4_001,
  duration: 50,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function chapter1pg4_001_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 30)) {
    // panel 1
    theScene.children[0].style.transform = `translateX(${
      0 - scrollProgres * 3.3333333
    }%)`;
    // panel 2
    // theScene.children[1].style.transform = `translateX(${
    //   100 - scrollProgres * 3.3333333
    // }%)`;
  }
}

createScene(
  specialPanels.chapter1pg4_001,
  chapter1pg4_001_act,
  specialPanelsOpt.chapter1pg4_001
);

/********************* end chapter1pg4_001 *********************/

/********************* start chapter1pg4_003 *********************/
specialPanels.chapter1pg4_003 = document.querySelector(".sp-chapter1pg4-003");
specialPanelsOpt.chapter1pg4_003 = { threshold: 0.5 };

function chapter1pg4_003_act(entries) {
  console.log(entries);
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_2s", true);
        // element 2
        delay(1000).then(() => {
          e.target.children[1].style.opacity = "0";
          e.target.children[1].classList.toggle("fadeOut_2s", true);

          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);

          delay(300).then(() => {
            e.target.children[3].style.opacity = "1";
            e.target.children[3].classList.toggle("fadeIn_2s", true);
          });
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg4_003,
  chapter1pg4_003_act,
  specialPanelsOpt.chapter1pg4_003
);
/******** end chapter1pg4_003 ********/

/********************* start chapter1pg4_004 *********************/
specialPanels.chapter1pg4_004 = document.querySelector(".sp-chapter1pg4-004");
specialPanelsOpt.chapter1pg4_004 = { threshold: 0.5 };

function chapter1pg4_004_act(entries) {
  console.log(entries);
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        // element 2
        delay(800).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_2s", true);

          delay(500).then(() => {
            e.target.children[2].style.opacity = "1";
            e.target.children[2].classList.toggle("fadeIn_2s", true);

            delay(500).then(() => {
              e.target.children[3].style.opacity = "1";
              e.target.children[3].classList.toggle("fadeIn_2s", true);
            });
          });
        });

        // kalau udah muncul semua diunobserve
        this.unobserve(e.target);
        //
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg4_004,
  chapter1pg4_004_act,
  specialPanelsOpt.chapter1pg4_004
);
/******** end chapter1pg4_003 ********/
