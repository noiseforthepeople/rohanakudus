/********************* click start reading ************************/

const dialogMulaiBaca = document.getElementById("mulaiBaca");
const cancelMulaiBaca = document.querySelector("#mulaiBaca #cancelMulaiBaca");
const acceptMulaiBaca = document.querySelector("#mulaiBaca #acceptMulaiBaca");

cancelMulaiBaca.addEventListener("click", (e) => {
  dialogMulaiBaca.close();
});

acceptMulaiBaca.addEventListener("click", (e) => {
  if (this.location.hostname === "komikroehanakoeddoes.com") {
    this.location.replace("/comic#");
  } else {
    this.location.replace("/comic.html#");
  }
});

document.querySelector(".readComic").addEventListener("click", () => {
  dialogMulaiBaca.showModal();
});

/********************* click contiue ************************/
document.querySelector(".continueReadComic").addEventListener("click", () => {
  if (this.location.hostname === "komikroehanakoeddoes.com") {
    this.location.replace("/comic#" + checkLastPage());
  } else {
    this.location.replace("/comic.html#" + checkLastPage());
  }
});

/********************* gimmick ************************/

const rohanaPupils = document.querySelector(".homepageCharacterMoving");

window.addEventListener("mousemove", (e) => {
  // get x and y postion of cursor
  var rect = rohanaPupils.getBoundingClientRect();
  var x = (e.pageX - rect.left) / 130 + "px";
  var y = (e.pageY - rect.top) / 130 + "px";
  rohanaPupils.style.transform = "translate3d(" + x + "," + y + ", 0px)";
});

function checkLastPage() {
  const last = localStorage.RoehanaKoeddoes_progress;

  if (last) {
    return last.replace("#", "");
  } else {
    return "";
  }
}
