let navlink_menu = document.getElementById("nav_link");
let button_navlink_menu_toggler = document.getElementById("nav_link_toggler");


let sidebar_toggler = document.getElementById("sidebar_toggler");
let aside = document.getElementById("aside");


button_navlink_menu_toggler.addEventListener('click',()=>{
    navlink_menu.classList.toggle("navbar-show");
    
})
// button_navlink_menu_toggler.addEventListener('click',()=>{
//     navlink_menu.classList.toggle("navbar-show");
    
// })

let sidebar_show_hide = document.querySelectorAll(".sidebar_show_hide");

 


sidebar_show_hide.forEach( e => 
{
    e.addEventListener("click",(  )=>{
        //aside.classList.toggle("toggle");
        console.log( e.parentNode.classList.toggle("toggle") );
    })
})
sidebar_toggler.addEventListener('click',()=>{
  
  
    //aside.classList.toggle("toggle");
  
    let allElements = document.querySelectorAll(".sidebar_size");
    console.log(allElements);
    allElements.forEach( e => {
        e.classList.toggle("toggle");
    })

})