function randomSellActive() {
  const sells = Array.from(document.querySelectorAll(".cell"))

  if(document.querySelector(".goblin")) {
    document.querySelector(".goblin").classList.remove("goblin")
  }

  let randomIndex = Math.floor(Math.random() * sells.length)

  sells[randomIndex].classList.add("goblin")
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => randomSellActive(), 2000);
});