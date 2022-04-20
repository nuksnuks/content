<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
=======
//* nav Bar

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

burger_menu.addEventListener('click',()=>{
  // toggle nav
  nav.classList.toggle('nav-active');

  //animate navLinks
  navLinks.forEach((link, index) => {
  if(link.style.animation) {
    link.style.animation = '';
    }
    else{
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
      }
      });

      // burger animation
      burger.classList.toggle('toggle');
    });
  }

navSlide();
>>>>>>> 00f2fb06f81612bb8275fd16fe453a46403bcebb
