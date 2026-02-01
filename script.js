window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    const top = card.getBoundingClientRect().top
    if(top < window.innerHeight){
      card.style.opacity = 1
      card.style.transform = "translateY(0)"
    }
  })
})
