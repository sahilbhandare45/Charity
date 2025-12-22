const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const totalSlides = slides.length;

function autoSlide() {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Change slide every 4 seconds */
setInterval(autoSlide, 4000);

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Mouse Cursor

const slidesContainer = document.querySelector(".slides");

(function () {
  const follower = document.querySelector('#follower');

  let x = 0, y = 0;
  let mouseX = 0, mouseY = 0;
  const ease = 0.12;

  function animate() {
    x += (mouseX - x) * ease;
    y += (mouseY - y) * ease;

    follower.style.left = x + "px";
    follower.style.top = y + "px";

    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  animate();
})();


const hamburger = document.getElementById("hamburger");
  const navCenter = document.querySelector(".nav-center");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navCenter.classList.toggle("active");
  });