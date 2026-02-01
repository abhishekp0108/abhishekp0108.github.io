window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    const top = card.getBoundingClientRect().top
    if(top < window.innerHeight){
      card.style.opacity = 1
      card.style.transform = "translateY(0)"
    }
  })
})

const main = document.getElementById("mainBtn");
const orbit = document.getElementById("orbitBtn");

let angle = 0;
let active = false;

// Detect mouse near the orbit button
document.addEventListener("mousemove", (e) => {
  const rect = orbit.getBoundingClientRect();
  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  active = distance < 120; // triggers when cursor is close
});

function moveOrbit() {
  if (active) {
    const radiusX = 200;   // wide horizontal
    const radiusY = 90;    // short vertical → cylindrical oval

    const centerX = main.offsetLeft + main.offsetWidth / 2;
    const centerY = main.offsetTop + main.offsetHeight / 2;

    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    orbit.style.left = x - orbit.offsetWidth / 2 + "px";
    orbit.style.top = y - orbit.offsetHeight / 2 + "px";

    angle += 0.05;
  }

  requestAnimationFrame(moveOrbit);
}

moveOrbit();

