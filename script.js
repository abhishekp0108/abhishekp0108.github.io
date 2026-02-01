window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    const top = card.getBoundingClientRect().top
    if(top < window.innerHeight){
      card.style.opacity = 1
      card.style.transform = "translateY(0)"
    }
  })
})

const button = document.getElementById("runaway");

document.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distance = Math.hypot(mouseX - btnX, mouseY - btnY);

  if (distance < 120) {
    const moveX = (btnX - mouseX) * 2;
    const moveY = (btnY - mouseY) * 2;

    let newX = rect.left + moveX;
    let newY = rect.top + moveY;

    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    newX = Math.max(0, Math.min(maxX, newX));
    newY = Math.max(0, Math.min(maxY, newY));

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }
});
