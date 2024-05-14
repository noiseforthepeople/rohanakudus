const siteTitle = "Komik Roehana Koeddoes";
const routeURL = false;
let currentHash = window.location.hash;
let comicsPage = document.querySelector(".main-comics");

/********************* element variables ************************/
const firstButton = document.querySelector(".end-of-page-first");
const prevButton = document.querySelector(".end-of-page-prev");
const nextButton = document.querySelector(".end-of-page-next");
const lastButton = document.querySelector(".end-of-page-last");
const selectButton = document.querySelector(".end-of-page-select");
const loadingBlock = document.getElementById("loading");

/********************* fetch page function ************************/

// loading
function showLoading() {
  loadingBlock.classList.toggle("hide");
  loadingBlock.classList.add("fadeIn_05s");
  loadingBlock.classList.remove("fadeOut_05s");
}

function hideLoading() {
  loadingBlock.classList.remove("fadeIn_05s");
  loadingBlock.classList.add("fadeOut_05s");
  delay(500).then(() => {
    loadingBlock.classList.toggle("hide");
  });
}

// fetch
function fetchPage1(pageURL) {
  showLoading();
  fetch(/*window.location.origin + "/" + */ pageURL)
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      hideLoading();
    });
}

// fetch
function fetchPage(pageURL) {
  showLoading();
  fetch(window.location.origin + "/" + pageURL)
    .then((res) => res.text())
    .then((data) => {
      //   document.write(data);
      console.log(data);
      hideLoading();
    });
}

/********************* initializing contents ************************/

let specialPanels = {};
let specialPanelsOpt = {};

const error404 =
  '<div class="chapter-title">(404) konten tidak ditemukan / belum ada.</div>';

// first page
if (currentHash === "#" || currentHash === "") {
  // mulai insert page
  showLoading();
  selectButton.children[0].value = "prolog_1";
  fetch("/comics/prolog_1.html")
    .then((res) => res.text())
    .then((data) => {
      // parse html data
      let comicPageHTML = new DOMParser().parseFromString(
        data,
        "text/html"
      ).body;

      // add childs from comics file
      for (let index = 0; index < comicPageHTML.childNodes.length; index++) {
        let element = comicPageHTML.childNodes[index];
        // console.log(element);
        comicsPage.appendChild(element);
      }

      // add interactions scripts
      let interactionsScript = document.createElement("script");
      interactionsScript.src = "frontend/interactions.js";
      comicsPage.appendChild(interactionsScript);

      // selesai insert page
      specialPanels = {};
      specialPanelsOpt = {};
      hideLoading();
    });
}

// all pages
else {
  // mulai insert page
  showLoading();
  selectButton.children[0].value = window.location.hash.replace("#", "");
  fetch("/comics/" + window.location.hash.replace("#", "") + ".html")
    .then((res) => {
      if (res.status === 200) return res.text();
      if (res.status === 404) return (res = error404);
    })
    .then((data) => {
      // parse html data
      let comicPageHTML = new DOMParser().parseFromString(
        data,
        "text/html"
      ).body;

      // add childs from comics file
      for (let index = 0; index < comicPageHTML.childNodes.length; index++) {
        let element = comicPageHTML.childNodes[index];
        // console.log(element);
        comicsPage.appendChild(element);
      }

      // add interactions scripts
      let interactionsScript = document.createElement("script");
      interactionsScript.src = "frontend/interactions.js";
      comicsPage.appendChild(interactionsScript);

      // selesai insert page
      specialPanels = {};
      specialPanelsOpt = {};
      hideLoading();
    });
}

/********************* url hash change listener ************************/
window.addEventListener("hashchange", (e) => {
  if (window.location.hash === "" || window.location.hash === "#") {
    selectButton.children[0].value = "prolog_1";
  } else {
    selectButton.children[0].value = window.location.hash.replace("#", "");
  }

  showLoading();

  fetch("/comics/" + window.location.hash.replace("#", "") + ".html")
    .then((res) => {
      if (res.status === 200) return res.text();
      if (res.status === 404) return (res = error404);
    })
    .then((data) => {
      console.log(data);
      // parse html data
      let comicPageHTML = new DOMParser().parseFromString(
        data,
        "text/html"
      ).body;

      // clear all existing childs
      while (comicsPage.firstChild) {
        comicsPage.firstChild.remove();
      }

      // add childs from comics file
      for (let index = 0; index < comicPageHTML.childNodes.length; index++) {
        let element = comicPageHTML.childNodes[index];
        // console.log(element);
        comicsPage.appendChild(element);
      }

      // add interactions scripts
      let interactionsScript = document.createElement("script");
      interactionsScript.src = "frontend/interactions.js";
      comicsPage.appendChild(interactionsScript);

      // selesai insert page
      comicsPage.scrollIntoView();
      specialPanels = {};
      specialPanelsOpt = {};
      hideLoading();
    });
});

/********************* delay function ************************/
function delay(time) {
  // in ms
  return new Promise((resolve) => setTimeout(resolve, time));
}

/********************* check URL function ************************/

let currentPage = selectButton.children[0].value;

/********************* navigate page function ************************/

function goTo(pageID) {
  let htmlExt = ".html";

  if (routeURL) {
    htmlExt = "";
  }

  if (pageID === "prolog_1") {
    window.location.pathname = "/";
  } else {
    window.location.pathname = "/" + pageID + htmlExt;
  }
}

/********************* page navigation listener ************************/
// goto first page
firstButton.addEventListener("click", (e) => {
  const firstPage = selectButton.children[0].firstElementChild;
  window.location.hash = firstPage.value;
  //   console.log("first");
});

// goto last page
lastButton.addEventListener("click", (e) => {
  const lastPage = selectButton.children[0].lastElementChild;
  window.location.hash = lastPage.value;
});

// goto next page
nextButton.addEventListener("click", (e) => {
  const nextPage =
    selectButton.children[0].selectedOptions[0].nextElementSibling;

  if (nextPage === null) {
    console.log("already on the end page");
  } else {
    window.location.hash = nextPage.value;

    //   goTo(nextPage.value);
  }
});

// goto prev page
prevButton.addEventListener("click", (e) => {
  const prevPage =
    selectButton.children[0].selectedOptions[0].previousElementSibling;

  if (prevPage === null) {
    console.log("already on the first page");
  } else {
    window.location.hash = prevPage.value;
  }
});

// goto selected page
selectButton.children[0].addEventListener("change", (e) => {
  //
  window.location.hash = e.target.value;
  //   goTo(e.target.value);
  //
  document.getElementsByTagName("title")[0].innerText =
    siteTitle + " / " + e.target.selectedOptions[0].innerText;
});
