/********************* create observer ************************/
function createObserver(element, act, options) {
  if (element === null) {
  } else {
    const observer = new IntersectionObserver(act, options);
    observer.observe(element);
  }
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

/********************* start chapter1_000 *********************/
specialPanels.chaper1_000 = document.querySelector(".sp-chapter1-000");
specialPanelsOpt.chaper1_000 = { threshold: 0.5 };

function chaper1_000_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 1) {
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
    }
  });
}

createObserver(
  specialPanels.chaper1_000,
  chaper1_000_act,
  specialPanelsOpt.chaper1_000
);
/******** end chapter1_000 ********/

/********************* start chapter1_001 *********************/
specialPanels.chaper1_001 = document.querySelector(".sp-chapter1-001");
specialPanelsOpt.chaper1_001 = { threshold: 0.3 };

function chaper1_001_act(entries) {
  entries.forEach((e) => {
    // console.log(e.intersectionRatio + " " + e.isIntersecting);
    if (e.isIntersecting) {
      if (e.intersectionRatio < 0.9) {
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
  specialPanels.chaper1_001,
  chaper1_001_act,
  specialPanelsOpt.chaper1_001
);
/******** end chapter1_001 ********/

/********************* start chapter1_002 *********************/
specialPanels.chaper1_002 = document.querySelector(".sp-chapter1-002");
specialPanelsOpt.chaper1_002 = { threshold: 0.5 };

function chaper1_002_act(entries) {
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
  specialPanels.chaper1_002,
  chaper1_002_act,
  specialPanelsOpt.chaper1_002
);
/******** end chapter1_002 ********/

/********************* start chapter1_003 *********************/
specialPanels.chaper1_003 = document.querySelector(".sp-chapter1-003");
specialPanelsOpt.chaper1_003 = { threshold: 0.5 };

function chaper1_003_act(entries) {
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
  specialPanels.chaper1_003,
  chaper1_003_act,
  specialPanelsOpt.chaper1_003
);
/******** end chapter1_003 ********/
