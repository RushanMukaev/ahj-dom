import "./cursor.css";

const cursor = document.querySelector(".cursor");

const mouseMove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x - 20 + "px";
  cursor.style.top = y - 20 + "px";
};

document.addEventListener("mousemove", mouseMove);
