const menuBtn = document.getElementById("menuBtn"),
heartIcon = document.querySelector(".bx-heart"),
menuContainer = document.querySelector(".menu-container"),
moodBtn = document.getElementById("mood"),
Body = document.getElementById("Body");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("bx-menu");
    menuBtn.classList.toggle("bx-x");
    menuContainer.classList.toggle("active");
});

heartIcon.addEventListener("click",()=>{
    heartIcon.classList.toggle("like");
});

moodBtn.addEventListener("click",()=>{
   Body.classList.contains("dark") ? moodBtn.setAttribute("title","Drak Mood") :  moodBtn.setAttribute("title","Light Mood") ;
   Body.classList.toggle("dark");
   moodBtn.classList.toggle("bxs-moon");
   moodBtn.classList.toggle("bxs-sun");
  
});

