const menuBtn = document.getElementById("menuBtn"),
heartIcon = document.querySelector(".bx-heart"),
menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("bx-menu");
    menuBtn.classList.toggle("bx-x");
    menuContainer.classList.toggle("active");
});

heartIcon.addEventListener("click",()=>{
    heartIcon.classList.toggle("like");
})

