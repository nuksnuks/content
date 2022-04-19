document.addEventListener("scroll", function(){
  if (window.scrollY == 0){
    document.getElementById('desktop-menu-container').style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById('desktop-menu-container').style.position = "relative";
  }
  else if (window.scrollY > 0){
    document.getElementById('desktop-menu-container').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    document.getElementById('desktop-menu-container').style.position = "fixed";
  }

});
