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

function orbitMove() {
  const radius = 120;

  const centerX = main.offsetLeft + main.offsetWidth / 2;
  const centerY = main.offsetTop + main.offsetHeight / 2;

  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  orbit.style.left = x - orbit.offsetWidth / 2 + "px";
  orbit.style.top = y - orbit.offsetHeight / 2 + "px";

  angle += 0.03;
  requestAnimationFrame(orbitMove);
}

orbitMove();
