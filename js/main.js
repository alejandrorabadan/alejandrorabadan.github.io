
document.addEventListener("DOMContentLoaded",function(){
    const navMenu = document.getElementById("nav_menu"),
    toggleMenu = document.getElementById("nav_toggle")
    closeMenu = document.getElementById("nav_close")
   toggleMenu.addEventListener("click", () => {
       navMenu.className = navMenu.className+" show"
   })
   closeMenu.addEventListener("click", () =>{
       navMenu.classList.remove('show')
   })
   const navLink = document.querySelectorAll(".link");
   function linkfuncionamiento(){
       navMenu.classList.remove('show')
   }
   navLink.forEach(n=>n.addEventListener("click",linkfuncionamiento));
   
   const sections = document.querySelectorAll("section[id]");
   window.addEventListener("scroll",scrollActive);
   function scrollActive(){
       const scrollY = window.pageYOffset;
       
   }
})