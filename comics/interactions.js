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
// function scrollStop(callback, refresh = 100) {
//   // Make sure a valid callback was provided
//   if (!callback || typeof callback !== "function") return;

//   // Setup scrolling variable
//   let isScrolling;

//   // Listen for scroll events
//   window.addEventListener(
//     "scroll",
//     function (event) {
//       // Clear our timeout throughout the scroll
//       window.clearTimeout(isScrolling);

//       // Set a timeout to run after scrolling ends
//       isScrolling = setTimeout(callback, refresh);
//     },
//     false
//   );
// }

/********************* (parallax) create scrollMagic controller ************************/

// function countHeightPanel(element) {
//   if (element === null) return console.log("no element existed");
//   return element.getBoundingClientRect().height.toFixed(2);
// }

function createScene(
  element,
  actProgress,
  options,
  actStart,
  actEnd,
  actLeave
) {
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
    .addIndicators() // remove this when released
    .on(
      "start",
      actStart
      // function () { this.duration(element.getBoundingClientRect().height.toFixed(2));}
    )
    .on("end", actEnd)
    .on("progress", actProgress)
    .on("leave", actLeave);

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

  // 30 / 100
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

/********************* start chapter1pg2_004 *********************/
specialPanels.chapter1pg2_004 = document.querySelector(".sp-chapter1pg2-004");
specialPanelsOpt.chapter1pg2_004 = { threshold: 0.5 };

function chapter1pg2_004_act(entries) {
  console.log(entries);
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        // element 2
        delay(800).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);

          delay(800).then(() => {
            e.target.children[3].style.opacity = "1";
            e.target.children[3].classList.toggle("fadeIn_2s", true);

            delay(800).then(() => {
              e.target.children[4].style.opacity = "1";
              e.target.children[4].classList.toggle("fadeIn_2s", true);
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
  specialPanels.chapter1pg2_004,
  chapter1pg2_004_act,
  specialPanelsOpt.chapter1pg2_004
);
/******** end chapter1pg4_003 ********/

/********************* start chapter1pg2_005 *********************/
specialPanels.chapter1pg2_005 = document.querySelector(".sp-chapter1pg2-005");
specialPanelsOpt.chapter1pg2_005 = { threshold: 0.5 };

function chapter1pg2_005_act(entries) {
  console.log(entries);
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        // element 2
        delay(1000).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_2s", true);
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
  specialPanels.chapter1pg2_005,
  chapter1pg2_005_act,
  specialPanelsOpt.chapter1pg2_005
);
/******** end chapter1pg2_005 ********/

/********************* start chapter1pg2_006 *********************/
specialPanels.chapter1pg2_006 = document.querySelector(".sp-chapter1pg2-006");
specialPanelsOpt.chapter1pg2_006 = { threshold: 0.5 };

function chapter1pg2_006_act(entries) {
  // console.log(entries);
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        // element 2
        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);

          delay(1500).then(() => {
            e.target.children[1].classList.toggle("fadeOut_2s", true);
            e.target.children[1].style.opacity = "0";

            delay(400).then(() => {
              e.target.children[2].style.opacity = "1";
              e.target.children[2].classList.toggle("fadeIn_1s", true);
            });

            delay(900).then(() => {
              e.target.children[3].style.opacity = "1";
              e.target.children[3].classList.toggle("fadeIn_1s", true);
            });

            delay(1300).then(() => {
              e.target.children[4].style.opacity = "1";
              e.target.children[4].classList.toggle("fadeIn_1s", true);
            });

            delay(1600).then(() => {
              e.target.children[5].style.opacity = "1";
              e.target.children[5].classList.toggle("fadeIn_1s", true);
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
  specialPanels.chapter1pg2_006,
  chapter1pg2_006_act,
  specialPanelsOpt.chapter1pg2_006
);
/******** end chapter1pg2_005 ********/

/********************* start chapter1pg3_001 *********************/
specialPanels.chapter1pg3_001 = document.querySelector(".sp-chapter1pg3-001");
specialPanelsOpt.chapter1pg3_001 = { threshold: 0.5 };
function chapter1pg3_001_act(entries) {
  // console.log(entries);
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      // element 2
      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      delay(2000).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter1pg3_001,
  chapter1pg3_001_act,
  specialPanelsOpt.chapter1pg3_001
);
/******** end chapter1pg3_001 ********/

/********************* start chapter1pg3_004 *********************/
specialPanels.chapter1pg3_004 = document.querySelector(".sp-chapter1pg3-004");
specialPanelsOpt.chapter1pg3_004 = { threshold: 0.5 };
function chapter1pg3_004_act(entries) {
  // console.log(entries);
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      // element 2
      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      delay(2000).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);
      });

      delay(3000).then(() => {
        e.target.children[3].style.opacity = "1";
        e.target.children[3].classList.toggle("fadeIn_1s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter1pg3_004,
  chapter1pg3_004_act,
  specialPanelsOpt.chapter1pg3_004
);
/******** end chapter1pg3_004 ********/

/********************* start chapter1pg3_002 *********************/
specialPanels.chapter1pg3_002 = document.querySelector(".sp-chapter1pg3-002");

specialPanelsOpt.chapter1pg3_002 = {
  triggerElement: specialPanels.chapter1pg3_002,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function chapter1pg3_002_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 20)) {
    // 1. rohana
    theScene.children[1].style.transform = `translateY(${
      70 - scrollProgres * 3.5
    }%)`;
  }

  if (between(scrollProgres, 0, 50)) {
    // 2. teks 1
    // 30 / 100
    theScene.children[4].style.opacity = `${(scrollProgres - 20) / 100 / 0.3} `;

    // 3. orang rame
    // 20 / 40
    theScene.children[3].style.transform = `translateY(${
      45 - (scrollProgres + 45) * 0.5
    }%)`;
  }

  /// terakhir di sini 06/06/ 06.34

  if (between(scrollProgres, 50, 100)) {
    // 4. teks 2
    // 30 / 100
    theScene.children[2].style.opacity = `${(scrollProgres - 50) / 100 / 0.3} `;
  }
}

createScene(
  specialPanels.chapter1pg3_002,
  chapter1pg3_002_act,
  specialPanelsOpt.chapter1pg3_002
);

/********************* end chapter1pg4_001 *********************/

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

/********************* start chapter1pg5_003 *********************/
specialPanels.chapter1pg5_003 = document.querySelector(".sp-chapter1pg5-003");
specialPanelsOpt.chapter1pg5_003 = { threshold: 0.9 };

function chapter1pg5_003_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1

        delay(500).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_2s", true);

          delay(400).then(() => {
            e.target.children[1].style.opacity = "1";
            e.target.children[1].classList.toggle("fadeIn_2s", true);
          });
        });

        // element 2

        delay(1000).then(() => {
          e.target.children[4].style.opacity = "1";
          e.target.children[4].classList.toggle("fadeIn_2s", true);

          delay(400).then(() => {
            e.target.children[3].style.opacity = "1";
            e.target.children[3].classList.toggle("fadeIn_2s", true);
          });
        });

        // element 3

        delay(1500).then(() => {
          e.target.children[6].style.opacity = "1";
          e.target.children[6].classList.toggle("fadeIn_2s", true);
          delay(400).then(() => {
            e.target.children[5].style.opacity = "1";
            e.target.children[5].classList.toggle("fadeIn_2s", true);
          });
        });

        // element 4
        delay(2200).then(() => {
          e.target.children[8].style.opacity = "1";
          e.target.children[8].classList.toggle("fadeIn_2s", true);

          delay(400).then(() => {
            e.target.children[7].style.opacity = "1";
            e.target.children[7].classList.toggle("fadeIn_2s", true);
          });
        });

        // element 5
        delay(5000).then(() => {
          e.target.children[2].classList.toggle("fadeIn_2s", false);
          e.target.children[2].classList.toggle("fadeOut_1s", true);

          e.target.children[4].classList.toggle("fadeIn_2s", false);
          e.target.children[4].classList.toggle("fadeOut_1s", true);

          e.target.children[6].classList.toggle("fadeIn_2s", false);
          e.target.children[6].classList.toggle("fadeOut_1s", true);

          e.target.children[8].classList.toggle("fadeIn_2s", false);
          e.target.children[8].classList.toggle("fadeOut_1s", true);

          delay(1000).then(() => {
            e.target.children[2].style.opacity = "0";
            e.target.children[4].style.opacity = "0";
            e.target.children[6].style.opacity = "0";
            e.target.children[8].style.opacity = "0";
          });
        });

        delay(7000).then(() => {
          e.target.children[9].classList.toggle("fadeIn_1s", true);

          delay(1000).then(() => {
            e.target.children[10].classList.toggle("fadeIn_1s", true);
            e.target.children[11].classList.toggle("fadeIn_1s", true);
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
  specialPanels.chapter1pg5_003,
  chapter1pg5_003_act,
  specialPanelsOpt.chapter1pg5_003
);
/******** end chapter1pg4_003 ********/

/********************* start chapter1pg5_004 *********************/
specialPanels.chapter1pg5_004 = document.querySelector(".sp-chapter1pg5-004");
specialPanelsOpt.chapter1pg5_004 = { threshold: 0.5 };

function chapter1pg5_004_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1

        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_2s", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg5_004,
  chapter1pg5_004_act,
  specialPanelsOpt.chapter1pg5_004
);
/******** end chapter1pg4_004 ********/

/********************* start chapter1pg5_005 *********************/
specialPanels.chapter1pg5_005 = document.querySelector(".sp-chapter1pg5-005");
specialPanelsOpt.chapter1pg5_005 = { threshold: 0.5 };

function chapter1pg5_005_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1

        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_2s", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter1pg5_005,
  chapter1pg5_005_act,
  specialPanelsOpt.chapter1pg5_005
);
/******** end chapter1pg4_005 ********/

/********************* start chapter2pg1_000 *********************/

specialPanels.chapter2pg1_000 = document.querySelector(".sp-chapter2pg1-000");
specialPanelsOpt.chapter2pg1_000 = { threshold: 0.2 };

function chapter2pg1_000_act(entries) {
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
  specialPanels.chapter2pg1_000,
  chapter2pg1_000_act,
  specialPanelsOpt.chapter2pg1_000
);

/******** end chapter2pg1_000 ********/

/********************* start chapter2pg1_001 *********************/

specialPanels.chapter2pg1_001 = document.querySelector(".sp-chapter2pg1-001");
specialPanelsOpt.chapter2pg1_001 = { threshold: 0.2 };

function chapter2pg1_001_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1

      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter2pg1_001,
  chapter2pg1_001_act,
  specialPanelsOpt.chapter2pg1_001
);

/******** end chapter2pg1_001 ********/

/********************* start chapter2pg1_002 *********************/

specialPanels.chapter2pg1_002 = document.querySelector(".sp-chapter2pg1-002");
specialPanelsOpt.chapter2pg1_002 = { threshold: 0.2 };

function chapter2pg1_002_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1

      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter2pg1_002,
  chapter2pg1_002_act,
  specialPanelsOpt.chapter2pg1_002
);

/******** end chapter2pg1_002 ********/

/********************* start chapter2pg2_004 *********************/

specialPanels.chapter2pg2_004 = document.querySelector(".sp-chapter2pg2-004");
specialPanelsOpt.chapter2pg2_004 = { threshold: 0.2 };

function chapter2pg2_004_act(entries) {
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

        delay(200).then(() => {
          e.target.children[2].classList.toggle("fadeIn_05s", false);
          e.target.children[2].classList.add("animate__animated");
          e.target.children[2].classList.add("animate__flash");
          e.target.children[2].classList.add("animate__slow");
          e.target.children[2].classList.add("animate__infinite");
        });
      });

      // element 3
      delay(2000).then(() => {
        e.target.children[3].style.opacity = "1";
        e.target.children[3].classList.toggle("fadeIn_05s", true);
      });

      // element 3
      delay(2500).then(() => {
        e.target.children[4].style.opacity = "1";
        e.target.children[4].classList.toggle("fadeIn_05s", true);

        delay(200).then(() => {
          e.target.children[4].classList.toggle("fadeIn_05s", false);
          e.target.children[4].classList.add("animate__animated");
          e.target.children[4].classList.add("animate__pulse");
          e.target.children[4].classList.add("animate__fast");
          e.target.children[4].classList.add("animate__infinite");
        });
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter2pg2_004,
  chapter2pg2_004_act,
  specialPanelsOpt.chapter2pg2_004
);

/******** end chapter2pg1_004 ********/

/********************* start chapter2pg2_005 *********************/

specialPanels.chapter2pg2_005 = document.querySelector(".sp-chapter2pg2-005");
specialPanelsOpt.chapter2pg2_005 = { threshold: 0.2 };

function chapter2pg2_005_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1

      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_05s", true);
      });

      // element 2
      delay(2000).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_075", true);
      });

      // element 3
      delay(2750).then(() => {
        e.target.children[3].style.opacity = "1";
        e.target.children[3].classList.toggle("fadeIn_05s", true);
      });

      // kalau udah muncul semua diunobserve
      this.unobserve(e.target);
      //
    }
  });
}

createObserver(
  specialPanels.chapter2pg2_005,
  chapter2pg2_005_act,
  specialPanelsOpt.chapter2pg2_005
);

/******** end chapter2pg2_005 ********/

/********************* start chapter2pg3_002 *********************/
specialPanels.sp_chapter2pg3_002_3 = document.querySelector(
  ".sp-chapter2pg3-002-3"
);

specialPanelsOpt.sp_chapter2pg3_002_3 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_3,
  duration: 50,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_3_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.style.transform = `translateX(${-130 + scrollProgres * 1.3}%)`;

  // console.log(scrollProgres);
}

createScene(
  specialPanels.sp_chapter2pg3_002_3,
  sp_chapter2pg3_002_3_act,
  specialPanelsOpt.sp_chapter2pg3_002_3
);

/** end panel */

specialPanels.sp_chapter2pg3_002_4 = document.querySelector(
  ".sp-chapter2pg3-002-4"
);

specialPanelsOpt.sp_chapter2pg3_002_4 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_4,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.style.transform = `translateX(${120 - scrollProgres * 1.2}%)`;

  // console.log(scene);

  if (scene.scrollDirection === "REVERSE" && scene.progress > 0.9) {
    theScene.nextElementSibling.style.opacity = 0;
    theScene.nextElementSibling.style.display = "none";
  }
}

function sp_chapter2pg3_002_4_actEnd() {
  // let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transiton = "all 200ms ease-in-out";
  theScene.nextElementSibling.style.opacity = 1;
  theScene.nextElementSibling.style.display = "block";
}

createScene(
  specialPanels.sp_chapter2pg3_002_4,
  sp_chapter2pg3_002_4_act,
  specialPanelsOpt.sp_chapter2pg3_002_4,
  undefined,
  sp_chapter2pg3_002_4_actEnd
);

/** end panel */

specialPanels.sp_chapter2pg3_002_7 = document.querySelector(
  ".sp-chapter2pg3-002-7"
);

specialPanelsOpt.sp_chapter2pg3_002_7 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_7,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_7_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.style.transform = `translateX(${-130 + scrollProgres * 1.3}%)`;
}

createScene(
  specialPanels.sp_chapter2pg3_002_7,
  sp_chapter2pg3_002_7_act,
  specialPanelsOpt.sp_chapter2pg3_002_7
);

/** end panel */

specialPanels.sp_chapter2pg3_002_8 = document.querySelector(
  ".sp-chapter2pg3-002-8"
);

specialPanelsOpt.sp_chapter2pg3_002_8 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_8,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_8_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.style.transform = `translateX(${120 - scrollProgres * 1.2}%)`;
}

createScene(
  specialPanels.sp_chapter2pg3_002_8,
  sp_chapter2pg3_002_8_act,
  specialPanelsOpt.sp_chapter2pg3_002_8
);

/** end panel */

specialPanels.sp_chapter2pg3_002_9 = document.querySelector(
  ".sp-chapter2pg3-002-9"
);

specialPanelsOpt.sp_chapter2pg3_002_9 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_9,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_9_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.style.transform = `translateX(${-120 + scrollProgres * 1.2}%)`;
}

createScene(
  specialPanels.sp_chapter2pg3_002_9,
  sp_chapter2pg3_002_9_act,
  specialPanelsOpt.sp_chapter2pg3_002_9
);

/** end panel */

specialPanels.sp_chapter2pg3_002_10 = document.querySelector(
  ".sp-chapter2pg3-002-10-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_002_10 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_10,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_10_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 50)) {
    theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;
  }
}

createScene(
  specialPanels.sp_chapter2pg3_002_10,
  sp_chapter2pg3_002_10_act,
  specialPanelsOpt.sp_chapter2pg3_002_10
);

/** end panel */

specialPanels.sp_chapter2pg3_002_11 = document.querySelector(
  ".sp-chapter2pg3-002-11-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_002_11 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_11,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_11_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateY(${
    230 - scrollProgres * 2.3
  }%)`;
}

createScene(
  specialPanels.sp_chapter2pg3_002_11,
  sp_chapter2pg3_002_11_act,
  specialPanelsOpt.sp_chapter2pg3_002_11
);

/** end panel */

specialPanels.sp_chapter2pg3_002_12 = document.querySelector(
  ".sp-chapter2pg3-002-12-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_002_12 = {
  triggerElement: specialPanels.sp_chapter2pg3_002_12,
  duration: 50,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_002_12_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 30)) {
    // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

    theScene.nextElementSibling.style.transform = `translateY(${
      100 - scrollProgres * 3.333333
    }%)`;
  }
}

createScene(
  specialPanels.sp_chapter2pg3_002_12,
  sp_chapter2pg3_002_12_act,
  specialPanelsOpt.sp_chapter2pg3_002_12
);

/** end panel */

/********************* end chapter1pg4_001 *********************/

specialPanels.sp_chapter2pg3_003_2 = document.querySelector(
  ".sp-chapter2pg3-003-2-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_003_2 = {
  triggerElement: specialPanels.sp_chapter2pg3_003_2,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_003_2_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.width = 40 - scrollProgres / 10 + "%";

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg3_003_2,
  sp_chapter2pg3_003_2_act,
  specialPanelsOpt.sp_chapter2pg3_003_2
);

/** end panel */

specialPanels.sp_chapter2pg3_003_4 = document.querySelector(
  ".sp-chapter2pg3-003-4-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_003_4 = {
  triggerElement: specialPanels.sp_chapter2pg3_003_4,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_003_4_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.transform = `translateY(${
    -100 + scrollProgres
  }%)`;

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg3_003_4,
  sp_chapter2pg3_003_4_act,
  specialPanelsOpt.sp_chapter2pg3_003_4
);

/** end panel */

specialPanels.sp_chapter2pg3_003_5 = document.querySelector(
  ".sp-chapter2pg3-003-5-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_003_5 = {
  triggerElement: specialPanels.sp_chapter2pg3_003_5,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_003_5_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.transform = `translateY(${
    -100 + scrollProgres
  }%)`;

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg3_003_5,
  sp_chapter2pg3_003_5_act,
  specialPanelsOpt.sp_chapter2pg3_003_5
);

/** end panel */

specialPanels.sp_chapter2pg3_003_6 = document.querySelector(
  ".sp-chapter2pg3-003-6-forSpace"
);

specialPanelsOpt.sp_chapter2pg3_003_6 = {
  triggerElement: specialPanels.sp_chapter2pg3_003_6,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg3_003_6_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.transform = `translateY(${
    -130 + scrollProgres * 1.3
  }%)`;

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg3_003_6,
  sp_chapter2pg3_003_6_act,
  specialPanelsOpt.sp_chapter2pg3_003_6
);

/** end panel */

/********************* start .sp-chapter2pg4-002 *********************/

specialPanels.sp_chapter2pg4_002_3 = document.querySelector(
  ".sp-chapter2pg4-002-3-forSpace"
);

specialPanelsOpt.sp_chapter2pg4_002_3 = {
  triggerElement: specialPanels.sp_chapter2pg4_002_3,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg4_002_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.transform = `translateY(${
    150 - scrollProgres * 1.5
  }%)`;

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }

  if (scene.scrollDirection === "REVERSE" && scene.progress > 0.9) {
    theScene.previousElementSibling.classList.add("fadeOut_1s");
    theScene.previousElementSibling.classList.remove("fadeIn_2s");
    theScene.previousElementSibling.style.opacity = 0;
  }
}

function sp_chapter2pg4_002_3_actStart(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // console.log(theScene.nextElementSibling);

  if (scene.scrollDirection === "FORWARD") {
    theScene.previousElementSibling.style.opacity = "1";
    theScene.previousElementSibling.classList.remove("fadeOut_1s");
    theScene.previousElementSibling.classList.add("fadeIn_2s");
  }

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg4_002_3,
  sp_chapter2pg4_002_3_act,
  specialPanelsOpt.sp_chapter2pg4_002_3,
  sp_chapter2pg4_002_3_actStart
);

/** end panel */

specialPanels.sp_chapter2pg4_002_4 = document.querySelector(
  ".sp-chapter2pg4-002-4-forSpace"
);

specialPanelsOpt.sp_chapter2pg4_002_4 = {
  triggerElement: specialPanels.sp_chapter2pg4_002_4,
  duration: 100,
  triggerHook: "0.4",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg4_002_4_act() {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // console.log(theScene.nextElementSibling);

  theScene.nextElementSibling.style.transform = `translateY(${
    120 - scrollProgres * 1.2
  }%)`;

  // if (between(scrollProgres, 0, 30)) {
  //   // theScene.nextElementSibling.style.scale = 0 + scrollProgres / 50;

  //   theScene.nextElementSibling.style.transform = `translateY(${
  //     100 - scrollProgres * 3.333333
  //   }%)`;
  // }
}

createScene(
  specialPanels.sp_chapter2pg4_002_4,
  sp_chapter2pg4_002_4_act,
  specialPanelsOpt.sp_chapter2pg4_002_4
);

/** end panel */

specialPanels.chapter2pg4_003 = document.querySelector(".sp-chapter2pg4-003");
specialPanelsOpt.chapter2pg4_003 = { threshold: 0.5 };

function chapter2pg4_003_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1

        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);
        });

        delay(1700).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_1s", true);
        });

        delay(2400).then(() => {
          e.target.children[4].style.opacity = "1";
          e.target.children[4].classList.toggle("fadeIn_1s", true);
        });

        delay(3100).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_1s", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter2pg4_003,
  chapter2pg4_003_act,
  specialPanelsOpt.chapter2pg4_003
);

/** end panel */

specialPanels.chapter2pg4_004 = document.querySelector(".sp-chapter2pg4-004");
specialPanelsOpt.chapter2pg4_004 = { threshold: 0.5 };

function chapter2pg4_004_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1

        delay(300).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_1s", true);
          e.target.children[3].style.display = "block";
          e.target.children[4].style.display = "block";
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_1s", true);
        });

        delay(1200).then(() => {
          e.target.children[7].style.opacity = "1";
          e.target.children[7].classList.toggle("fadeIn_1s", true);
          e.target.children[8].style.display = "block";
          e.target.children[9].style.display = "block";
          e.target.children[8].style.opacity = "1";
          e.target.children[8].classList.toggle("fadeIn_1s", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter2pg4_004,
  chapter2pg4_004_act,
  specialPanelsOpt.chapter2pg4_004
);

/** end panel */

/******** end .sp-chapter2pg4-002 ********/

/********************* start .sp-chapter2pg5 *********************/

specialPanels.sp_chapter2pg5_001_4 = document.querySelector(
  ".sp-chapter2pg5-001-4-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_4 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_4,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;

  // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_4,
  sp_chapter2pg5_001_4_act,
  specialPanelsOpt.sp_chapter2pg5_001_4
);

/** end panel */

specialPanels.sp_chapter2pg5_001_5 = document.querySelector(
  ".sp-chapter2pg5-001-5-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_5 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_5,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_5_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_5,
  sp_chapter2pg5_001_5_act,
  specialPanelsOpt.sp_chapter2pg5_001_5
);

/** end panel */

specialPanels.sp_chapter2pg5_001_6 = document.querySelector(
  ".sp-chapter2pg5-001-6-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_6 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_6,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_6_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_6,
  sp_chapter2pg5_001_6_act,
  specialPanelsOpt.sp_chapter2pg5_001_6
);

/** end panel */

specialPanels.sp_chapter2pg5_001_7 = document.querySelector(
  ".sp-chapter2pg5-001-7-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_7 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_7,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_7_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_7,
  sp_chapter2pg5_001_7_act,
  specialPanelsOpt.sp_chapter2pg5_001_7
);

/** end panel */

specialPanels.sp_chapter2pg5_001_8 = document.querySelector(
  ".sp-chapter2pg5-001-8-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_8 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_8,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_8_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_8,
  sp_chapter2pg5_001_8_act,
  specialPanelsOpt.sp_chapter2pg5_001_8
);

/** end panel */

specialPanels.sp_chapter2pg5_001_9 = document.querySelector(
  ".sp-chapter2pg5-001-9-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_9 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_9,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_9_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");
  }

  if (scene.state === "AFTER") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
    });
  }
}

createScene(
  specialPanels.sp_chapter2pg5_001_9,
  sp_chapter2pg5_001_9_act,
  specialPanelsOpt.sp_chapter2pg5_001_9
);

/** end panel */

specialPanels.sp_chapter2pg5_001_10 = document.querySelector(
  ".sp-chapter2pg5-001-10-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_001_10 = {
  triggerElement: specialPanels.sp_chapter2pg5_001_10,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_001_10_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");

    delay(200).then(() => {
      theScene.nextElementSibling.nextElementSibling.classList.add("fadeIn_1s");
    });
  }

  if (scene.state === "AFTER") {
    // delay(100).then(() => {
    //   theScene.nextElementSibling.classList.add("fadeOut_1s");
    //   theScene.nextElementSibling.classList.remove("fadeIn_1s");
    //   delay(200).then(() => {
    //     theScene.nextElementSibling.nextElementSibling.classList.add(
    //       "fadeOut_1s"
    //     );
    //     theScene.nextElementSibling.nextElementSibling.classList.remove(
    //       "fadeIn_1s"
    //     );
    //   });
    // });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_1s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
      delay(200).then(() => {
        theScene.nextElementSibling.nextElementSibling.classList.add(
          "fadeOut_1s"
        );
        theScene.nextElementSibling.nextElementSibling.classList.remove(
          "fadeIn_1s"
        );
      });
    });
  }

  if (scene.state === "REVERSE" && scene.progress > 0.9) {
    // theScene.nextElementSibling.style.opacity = 0;
    // theScene.nextElementSibling.style.display = "none";
    // delay(100).then(() => {
    //   theScene.nextElementSibling.classList.add("fadeOut_1s");
    //   theScene.nextElementSibling.classList.remove("fadeIn_1s");
    //   delay(200).then(() => {
    //     theScene.nextElementSibling.nextElementSibling.classList.add(
    //       "fadeOut_1s"
    //     );
    //     theScene.nextElementSibling.nextElementSibling.classList.remove(
    //       "fadeIn_1s"
    //     );
    //   });
    // });
  }
}

function sp_chapter2pg5_001_10_actStart(scene) {
  const theScene = this.triggerElement();

  console.log(scene.state);
}

createScene(
  specialPanels.sp_chapter2pg5_001_10,
  sp_chapter2pg5_001_10_act,
  specialPanelsOpt.sp_chapter2pg5_001_10,
  sp_chapter2pg5_001_10_actStart
);

/** end panel */
specialPanels.chapter2pg5_002 = document.querySelector(".sp-chapter2pg5-002");
specialPanelsOpt.chapter2pg5_002 = { threshold: 0.5 };

function chapter2pg5_002_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);
        });
        delay(1500).then(() => {
          e.target.children[2].style.opacity = "1";
          // e.target.children[2].classList.toggle("fadeIn_1s", true);
          e.target.children[2].classList.toggle("animate__animated", true);
          e.target.children[2].classList.toggle("animate__jackInTheBox", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter2pg5_002,
  chapter2pg5_002_act,
  specialPanelsOpt.chapter2pg5_002
);

/** end panel */

specialPanels.sp_chapter2pg5_004_3 = document.querySelector(
  ".sp-chapter2pg5-004-3-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_004_3 = {
  triggerElement: specialPanels.sp_chapter2pg5_004_3,
  duration: 100,
  triggerHook: "0.2",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_004_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateY(${
    45 - scrollProgres * 0.45
  }%)`;

  console.log(theScene.nextElementSibling);

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter2pg5_004_3,
  sp_chapter2pg5_004_3_act,
  specialPanelsOpt.sp_chapter2pg5_004_3
);

/** end panel */

specialPanels.sp_chapter2pg5_004_4 = document.querySelector(
  ".sp-chapter2pg5-004-4-forSpace"
);

specialPanelsOpt.sp_chapter2pg5_004_4 = {
  triggerElement: specialPanels.sp_chapter2pg5_004_4,
  duration: 100,
  triggerHook: "0.2",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg5_004_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateY(${
    45 - scrollProgres * 0.4
  }%)`;

  console.log(theScene.nextElementSibling);

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter2pg5_004_4,
  sp_chapter2pg5_004_4_act,
  specialPanelsOpt.sp_chapter2pg5_004_4
);

/** end panel */
/******** end .sp-chapter2pg5 ********/

/********************* start .sp-chapter2pg6 *********************/

specialPanels.chapter2pg6_001 = document.querySelector(".sp-chapter2pg6-001");
specialPanelsOpt.chapter2pg6_001 = { threshold: 0.1 };

function chapter2pg6_001_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      delay(1000).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);
      });
    }
  });
}

createObserver(
  specialPanels.chapter2pg6_001,
  chapter2pg6_001_act,
  specialPanelsOpt.chapter2pg6_001
);

/** end panel */

specialPanels.chapter2pg6_003 = document.querySelector(".sp-chapter2pg6-003");
specialPanelsOpt.chapter2pg6_003 = { threshold: 0.5 };

function chapter2pg6_003_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);

          console.log("asas");
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter2pg6_003,
  chapter2pg6_003_act,
  specialPanelsOpt.chapter2pg6_003
);

/** end panel */

specialPanels.chapter2pg6_004 = document.querySelector(".sp-chapter2pg6-004");
specialPanelsOpt.chapter2pg6_004 = { threshold: 0.5 };

function chapter2pg6_004_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
        // element 1
        delay(1000).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);
        });

        delay(1500).then(() => {
          e.target.children[2].style.opacity = "1";
          e.target.children[2].classList.toggle("fadeIn_1s", true);
        });
      }
    }
  });
}

createObserver(
  specialPanels.chapter2pg6_004,
  chapter2pg6_004_act,
  specialPanelsOpt.chapter2pg6_004
);

/** end panel */

specialPanels.sp_chapter2pg6_005_2 = document.querySelector(
  ".sp-chapter2pg6-005-2-forSpace "
);

specialPanelsOpt.sp_chapter2pg6_005_2 = {
  triggerElement: specialPanels.sp_chapter2pg6_005_2,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg6_005_2_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    -45 + scrollProgres * 0.45
  }%)`;
  theScene.nextElementSibling.nextElementSibling.style.transform = `translateX(${
    0 + scrollProgres * 0.15
  }%)`;

  console.log(theScene.nextElementSibling);

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter2pg6_005_2,
  sp_chapter2pg6_005_2_act,
  specialPanelsOpt.sp_chapter2pg6_005_2
);

/** end panel */

specialPanels.sp_chapter2pg6_005_3 = document.querySelector(
  ".sp-chapter2pg6-005-3-forSpace"
);

specialPanelsOpt.sp_chapter2pg6_005_3 = {
  triggerElement: specialPanels.sp_chapter2pg6_005_3,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter2pg6_005_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (scene.state === "DURING") {
    // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
    theScene.nextElementSibling.classList.add("fadeIn_1s");

    if (scene.scrollDirection === "REVERSE") {
      theScene.nextElementSibling.nextElementSibling.classList.add("fadeIn_1s");
    } else {
      delay(200).then(() => {
        theScene.nextElementSibling.nextElementSibling.classList.add(
          "fadeIn_1s"
        );
      });
    }
  }

  if (scene.state === "AFTER") {
    // delay(100).then(() => {
    //   theScene.nextElementSibling.classList.add("fadeOut_1s");
    //   theScene.nextElementSibling.classList.remove("fadeIn_1s");
    //   delay(200).then(() => {
    //     theScene.nextElementSibling.nextElementSibling.classList.add(
    //       "fadeOut_1s"
    //     );
    //     theScene.nextElementSibling.nextElementSibling.classList.remove(
    //       "fadeIn_1s"
    //     );
    //   });
    // });
  }

  if (scene.state === "BEFORE") {
    delay(100).then(() => {
      theScene.nextElementSibling.classList.add("fadeOut_05s");
      theScene.nextElementSibling.classList.remove("fadeIn_1s");
      theScene.nextElementSibling.nextElementSibling.classList.add(
        "fadeOut_05s"
      );
      theScene.nextElementSibling.nextElementSibling.classList.remove(
        "fadeIn_1s"
      );
    });
  }

  if (scene.state === "REVERSE" && scene.progress > 0.9) {
    // theScene.nextElementSibling.style.opacity = 0;
    // theScene.nextElementSibling.style.display = "none";
    // delay(100).then(() => {
    //   theScene.nextElementSibling.classList.add("fadeOut_1s");
    //   theScene.nextElementSibling.classList.remove("fadeIn_1s");
    //   delay(200).then(() => {
    //     theScene.nextElementSibling.nextElementSibling.classList.add(
    //       "fadeOut_1s"
    //     );
    //     theScene.nextElementSibling.nextElementSibling.classList.remove(
    //       "fadeIn_1s"
    //     );
    //   });
    // });
  }

  // theScene.nextElementSibling.style.transform = `translateX(${
  //   -45 + scrollProgres * 0.45
  // }%)`;

  console.log(theScene.nextElementSibling);

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter2pg6_005_3,
  sp_chapter2pg6_005_3_act,
  specialPanelsOpt.sp_chapter2pg6_005_3
);

/** end panel */

/******** end .sp-chapter2pg6 ********/

/********************* start .sp-chapter3pg1 *********************/

specialPanels.sp_chapter3pg1_002_3 = document.querySelector(
  ".sp-chapter3pg1-002-3"
);

specialPanelsOpt.sp_chapter3pg1_002_3 = {
  triggerElement: specialPanels.sp_chapter3pg1_002_3,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_002_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 50)) {
    theScene.style.transform = `translateX(${-60 + scrollProgres * 1.2}%)`;
  }

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_002_3,
  sp_chapter3pg1_002_3_act,
  specialPanelsOpt.sp_chapter3pg1_002_3
);

/** end panel */

specialPanels.sp_chapter3pg1_003_3 = document.querySelector(
  ".sp-chapter3pg1-003-3-forSpace"
);

specialPanelsOpt.sp_chapter3pg1_003_3 = {
  triggerElement: specialPanels.sp_chapter3pg1_003_3,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_003_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    -35 + scrollProgres * 0.35
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_003_3,
  sp_chapter3pg1_003_3_act,
  specialPanelsOpt.sp_chapter3pg1_003_3
);

/** end panel */

specialPanels.sp_chapter3pg1_003_4 = document.querySelector(
  ".sp-chapter3pg1-003-4-forSpace"
);

specialPanelsOpt.sp_chapter3pg1_003_4 = {
  triggerElement: specialPanels.sp_chapter3pg1_003_4,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_003_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    35 - scrollProgres * 0.35
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_003_4,
  sp_chapter3pg1_003_4_act,
  specialPanelsOpt.sp_chapter3pg1_003_4
);

/** end panel */

specialPanels.sp_chapter3pg1_003_5 = document.querySelector(
  ".sp-chapter3pg1-003-5-forSpace"
);

specialPanelsOpt.sp_chapter3pg1_003_5 = {
  triggerElement: specialPanels.sp_chapter3pg1_003_5,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_003_5_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    -30 + scrollProgres * 0.3
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_003_5,
  sp_chapter3pg1_003_5_act,
  specialPanelsOpt.sp_chapter3pg1_003_5
);

/** end panel */

specialPanels.sp_chapter3pg1_003_6 = document.querySelector(
  ".sp-chapter3pg1-003-6-forSpace"
);

specialPanelsOpt.sp_chapter3pg1_003_6 = {
  triggerElement: specialPanels.sp_chapter3pg1_003_6,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_003_6_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    30 - scrollProgres * 0.3
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_003_6,
  sp_chapter3pg1_003_6_act,
  specialPanelsOpt.sp_chapter3pg1_003_6
);

/** end panel */

specialPanels.sp_chapter3pg1_003_7 = document.querySelector(
  ".sp-chapter3pg1-003-7-forSpace"
);

specialPanelsOpt.sp_chapter3pg1_003_7 = {
  triggerElement: specialPanels.sp_chapter3pg1_003_7,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg1_003_7_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateY(${
    40 - scrollProgres * 0.4
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg1_003_7,
  sp_chapter3pg1_003_7_act,
  specialPanelsOpt.sp_chapter3pg1_003_7
);

/** end panel */

/******** end .sp-chapter3pg1 ********/

/********************* start .sp-chapter3pg2 *********************/

specialPanels.chapter3pg2_002 = document.querySelector(".sp-chapter3pg2-002");
specialPanelsOpt.chapter3pg2_002 = { threshold: 1 };

function chapter3pg2_002_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(1000).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });
    }
  });
}

createObserver(
  specialPanels.chapter3pg2_002,
  chapter3pg2_002_act,
  specialPanelsOpt.chapter3pg2_002
);

/** end panel */

specialPanels.chapter3pg2_005 = document.querySelector(".sp-chapter3pg2-005");
specialPanelsOpt.chapter3pg2_005 = { threshold: 1 };

function chapter3pg2_005_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(100).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_2s", true);
        e.target.children[1].classList.toggle("fadeOut_2s", true);
        delay(2000).then(() => {
          e.target.children[1].style.opacity = "0";
        });
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg2_005,
  chapter3pg2_005_act,
  specialPanelsOpt.chapter3pg2_005
);

/** end panel */

/******** end .sp-chapter3pg2 ********/

/********************* start .sp-chapter3pg3 *********************/
specialPanels.chapter3pg3_001 = document.querySelector(".sp-chapter3pg3-001");
specialPanelsOpt.chapter3pg3_001 = { threshold: 1 };

function chapter3pg3_001_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg3_001,
  chapter3pg3_001_act,
  specialPanelsOpt.chapter3pg3_001
);
/** end panel */

specialPanels.chapter3pg3_004 = document.querySelector(".sp-chapter3pg3-004");
specialPanelsOpt.chapter3pg3_004 = { threshold: 1 };

function chapter3pg3_004_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg3_004,
  chapter3pg3_004_act,
  specialPanelsOpt.chapter3pg3_004
);
/** end panel */

specialPanels.sp_chapter3pg3_002_2 = document.querySelector(
  ".sp-chapter3pg3-002-2-forSpace"
);

specialPanelsOpt.sp_chapter3pg3_002_2 = {
  triggerElement: specialPanels.sp_chapter3pg3_002_2,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg3_002_2_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  theScene.nextElementSibling.nextElementSibling.style.transform = `translateX(${
    50 - scrollProgres * 0.5
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg3_002_2,
  sp_chapter3pg3_002_2_act,
  specialPanelsOpt.sp_chapter3pg3_002_2
);

/** end panel */

specialPanels.sp_chapter3pg3_002_4 = document.querySelector(
  ".sp-chapter3pg3-002-4-forSpace"
);

specialPanelsOpt.sp_chapter3pg3_002_4 = {
  triggerElement: specialPanels.sp_chapter3pg3_002_4,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg3_002_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.nextElementSibling.style.transform = `translateX(${
    50 - scrollProgres * 0.5
  }%)`;

  theScene.nextElementSibling.style.transform = `translateX(${
    -50 + scrollProgres * 0.5
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg3_002_4,
  sp_chapter3pg3_002_4_act,
  specialPanelsOpt.sp_chapter3pg3_002_4
);

/** end panel */

/******** end .sp-chapter3pg3 ********/

/********************* start sp-chapter3pg4 *********************/

specialPanels.sp_chapter3pg4_003_3 = document.querySelector(
  ".sp-chapter3pg4-003-3-forSpace"
);

specialPanelsOpt.sp_chapter3pg4_003_3 = {
  triggerElement: specialPanels.sp_chapter3pg4_003_3,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg4_003_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    -50 + scrollProgres * 0.5
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg4_003_3,
  sp_chapter3pg4_003_3_act,
  specialPanelsOpt.sp_chapter3pg4_003_3
);

/** end panel */

specialPanels.sp_chapter3pg4_003_4 = document.querySelector(
  ".sp-chapter3pg4-003-4-forSpace"
);

specialPanelsOpt.sp_chapter3pg4_003_4 = {
  triggerElement: specialPanels.sp_chapter3pg4_003_4,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg4_003_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateX(${
    50 - scrollProgres * 0.5
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg4_003_4,
  sp_chapter3pg4_003_4_act,
  specialPanelsOpt.sp_chapter3pg4_003_4
);

/** end panel */

specialPanels.sp_chapter3pg4_003_5 = document.querySelector(
  ".sp-chapter3pg4-003-5-forSpace"
);

specialPanelsOpt.sp_chapter3pg4_003_5 = {
  triggerElement: specialPanels.sp_chapter3pg4_003_5,
  duration: 100,
  triggerHook: "0.5",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg4_003_5_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.transform = `translateY(${
    40 - scrollProgres * 0.4
  }%)`;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg4_003_5,
  sp_chapter3pg4_003_5_act,
  specialPanelsOpt.sp_chapter3pg4_003_5
);

/** end panel */

specialPanels.chapter3pg4_001 = document.querySelector(".sp-chapter3pg4-001");
specialPanelsOpt.chapter3pg4_001 = { threshold: 1 };

function chapter3pg4_001_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg4_001,
  chapter3pg4_001_act,
  specialPanelsOpt.chapter3pg4_001
);
/** end panel */

specialPanels.chapter3pg4_002 = document.querySelector(".sp-chapter3pg4-002");
specialPanelsOpt.chapter3pg4_002 = { threshold: 1 };

function chapter3pg4_002_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_1s", true);
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg4_002,
  chapter3pg4_002_act,
  specialPanelsOpt.chapter3pg4_002
);
/** end panel */

specialPanels.chapter3pg4_004 = document.querySelector(".sp-chapter3pg4-004");
specialPanelsOpt.chapter3pg4_004 = { threshold: 0.5 };

function chapter3pg4_004_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);

        delay(500).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);
        });
      });

      delay(2000).then(() => {
        e.target.children[4].style.opacity = "1";
        e.target.children[4].classList.toggle("fadeIn_1s", true);

        delay(500).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_1s", true);
        });
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg4_004,
  chapter3pg4_004_act,
  specialPanelsOpt.chapter3pg4_004
);
/** end panel */

specialPanels.chapter3pg4_005 = document.querySelector(".sp-chapter3pg4-005");
specialPanelsOpt.chapter3pg4_005 = { threshold: 0.5 };

function chapter3pg4_005_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[2].style.opacity = "1";
        e.target.children[2].classList.toggle("fadeIn_1s", true);

        delay(500).then(() => {
          e.target.children[1].style.opacity = "1";
          e.target.children[1].classList.toggle("fadeIn_1s", true);
        });
      });

      delay(2000).then(() => {
        e.target.children[4].style.opacity = "1";
        e.target.children[4].classList.toggle("fadeIn_1s", true);

        delay(500).then(() => {
          e.target.children[3].style.opacity = "1";
          e.target.children[3].classList.toggle("fadeIn_1s", true);
        });
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg4_005,
  chapter3pg4_005_act,
  specialPanelsOpt.chapter3pg4_005
);
/** end panel */

/******** end sp-chapter3pg4 ********/

/********************* start sp-chapter3pg5 *********************/

specialPanels.chapter3pg5_003 = document.querySelector(".sp-chapter3pg5-003");
specialPanelsOpt.chapter3pg5_003 = { threshold: 0.9 };

function chapter3pg5_003_act(entries) {
  entries.forEach((e) => {
    console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      // element 1
      delay(500).then(() => {
        e.target.children[1].style.opacity = "1";
        e.target.children[1].classList.toggle("fadeIn_2s", true);
      });

      // delay(1000).then(() => {
      //   e.target.children[2].style.opacity = "1";
      //   e.target.children[2].classList.toggle("fadeIn_1s", true);
      // });
    }
  });
}

createObserver(
  specialPanels.chapter3pg5_003,
  chapter3pg5_003_act,
  specialPanelsOpt.chapter3pg5_003
);
/** end panel */

specialPanels.sp_chapter3pg5_001_2 = document.querySelector(
  ".sp-chapter3pg5-001-2-forSpace"
);

specialPanelsOpt.sp_chapter3pg5_001_2 = {
  triggerElement: specialPanels.sp_chapter3pg5_001_2,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_001_2_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_001_2,
  sp_chapter3pg5_001_2_act,
  specialPanelsOpt.sp_chapter3pg5_001_2
);
/** end panel */

specialPanels.sp_chapter3pg5_001_3 = document.querySelector(
  ".sp-chapter3pg5-001-3-forSpace"
);

specialPanelsOpt.sp_chapter3pg5_001_3 = {
  triggerElement: specialPanels.sp_chapter3pg5_001_3,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_001_3_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_001_3,
  sp_chapter3pg5_001_3_act,
  specialPanelsOpt.sp_chapter3pg5_001_3
);
/** end panel */

specialPanels.sp_chapter3pg5_001_4 = document.querySelector(
  ".sp-chapter3pg5-001-4-forSpace"
);

specialPanelsOpt.sp_chapter3pg5_001_4 = {
  triggerElement: specialPanels.sp_chapter3pg5_001_4,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_001_4_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_001_4,
  sp_chapter3pg5_001_4_act,
  specialPanelsOpt.sp_chapter3pg5_001_4
);
/** end panel */

specialPanels.sp_chapter3pg5_001_5 = document.querySelector(
  ".sp-chapter3pg5-001-5-forSpace"
);

specialPanelsOpt.sp_chapter3pg5_001_5 = {
  triggerElement: specialPanels.sp_chapter3pg5_001_5,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_001_5_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_001_5,
  sp_chapter3pg5_001_5_act,
  specialPanelsOpt.sp_chapter3pg5_001_5
);
/** end panel */

specialPanels.sp_chapter3pg5_001_6 = document.querySelector(
  ".sp-chapter3pg5-001-6-forSpace"
);

specialPanelsOpt.sp_chapter3pg5_001_6 = {
  triggerElement: specialPanels.sp_chapter3pg5_001_6,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_001_6_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  theScene.nextElementSibling.style.opacity = 0 + scrollProgres * 0.01;

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_001_6,
  sp_chapter3pg5_001_6_act,
  specialPanelsOpt.sp_chapter3pg5_001_6
);
/** end panel */

specialPanels.sp_chapter3pg5_002_1 = document.querySelector(
  ".sp-chapter3pg5-002-1"
);

specialPanelsOpt.sp_chapter3pg5_002_1 = {
  triggerElement: specialPanels.sp_chapter3pg5_002_1,
  duration: 100,
  triggerHook: "0",
  offset: "0",
  reverse: true,
};

function sp_chapter3pg5_002_1_act(scene) {
  let scrollProgres = this.progress().toFixed(2) * 100;
  // // console.log(scrollProgres);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 30)) {
    theScene.nextElementSibling.style.opacity = `${
      scrollProgres * 0.01 * 3.33333333333333
    } `;
  }

  // theScene.nextElementSibling.style.opacity = scrollProgres + "%";
  // theScene.previousElementSibling.style.opacity = 1 - scrollProgres + "%";
}

createScene(
  specialPanels.sp_chapter3pg5_002_1,
  sp_chapter3pg5_002_1_act,
  specialPanelsOpt.sp_chapter3pg5_002_1
);
/** end panel */
/******** end sp-chapter3pg5 ********/

/********************* start x *********************/

/******** end x ********/
