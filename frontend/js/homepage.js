/********************* click start reading ************************/
document.querySelector(".readComic").addEventListener("click", () => {
  if (this.location.hostname === "127.0.0.1") {
    this.location.replace("/comic.html");
  } else {
    this.location.replace("/comic");
  }
});

document.querySelector(".continueReadComic").addEventListener("click", () => {
  if (this.location.hostname !== "https://komikroehanakoeddoes.com") {
    this.location.replace("/comic.html");
  } else {
    this.location.replace("/comic");
  }
});

const rohanaPupils = document.querySelector(".homepageCharacterMoving");

window.addEventListener("mousemove", (e) => {
  // get x and y postion of cursor
  var rect = rohanaPupils.getBoundingClientRect();
  var x = (e.pageX - rect.left) / 130 + "px";
  var y = (e.pageY - rect.top) / 130 + "px";
  rohanaPupils.style.transform = "translate3d(" + x + "," + y + ", 0px)";
});
