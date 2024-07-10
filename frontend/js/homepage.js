/********************* click start reading ************************/
document.querySelector(".readComic").addEventListener("click", () => {
  if (this.location.hostname === "127.0.0.1") {
    this.location.replace("/comic.html");
  } else {
    this.location.replace("/comic");
  }
});

document.querySelector(".continueReadComic").addEventListener("click", () => {
  if (this.location.hostname === "127.0.0.1") {
    this.location.replace("/comic.html");
  } else {
    this.location.replace("/comic");
  }
});
