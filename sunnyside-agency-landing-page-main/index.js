

var bars = document.querySelector(".bars");

var menu = document.querySelector(".menu");

var header_text = document.querySelector(".header-text");




bars.addEventListener("click", function(ev){
        ev.preventDefault(); 
})

bars.addEventListener("click", function(){
   
    let visibility_switch = "hidden";
     
    if (menu.style.visibility === visibility_switch ) {
        menu.style.visibility = "visible"
        visibility_switch = "visible";
    } else {
        menu.style.visibility = "hidden"
        visibility_switch = "hidden";
    }
})

