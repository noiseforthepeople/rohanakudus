/********************* create observer ************************/
function createObserver(element, act, options) {
  if (element === null) return console.log("no element to be observed");

  const observer = new IntersectionObserver(act, options);
  observer.observe(element);
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

/********************* start chapter1pg2_001 *********************/
specialPanels.chapter1pg2_002 = document.querySelector(".sp-chapter1pg2-002");

specialPanelsOpt.chapter1pg2_002 = {
  triggerElement: specialPanels.chapter1pg2_002,
  duration: countHeightPanel(specialPanels.chapter1pg2_002),
  triggerHook: "0.2",
  reverse: true,
};

function chapter1pg2_002_act() {
  // triggerDOM.innerText = this.progress().toFixed(2);
  // triggerDOM.style.backgroundColor = "rgba(244, 244, 10," + this.progress().toFixed(2)+ ")";

  let scrollProgres = this.progress().toFixed(2);
  const theScene = this.triggerElement();

  if (between(scrollProgres, 0, 0)) {
    console.log("30-59%");

    theScene.children[0].style.opacity = "1";
    theScene.children[1].style.opacity = "0";
    theScene.children[2].style.opacity = "0";
  }
  if (between(scrollProgres, 0.1, 0.5)) {
    console.log("30-59%");

    theScene.children[0].style.opacity = "0";
    theScene.children[1].style.opacity = "1";
    theScene.children[2].style.opacity = "0";
  }
  if (between(scrollProgres, 0.51, 1)) {
    console.log("60-100%");

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
