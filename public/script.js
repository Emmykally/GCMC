const menubtn = document.getElementById("menu-open");
const navMenu = document.getElementById("nav-menu")

navMenu.classList.add("invisible");

menubtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // navMenu.classList.toggle("hidden");
    if(navMenu.classList.contains("invisible")){
        navMenu.classList.remove("invisible");
        menubtn.setAttribute("src", "img/icon-menu-close.svg");
    }else{
        navMenu.classList.add("invisible");
        menubtn.setAttribute("src", "img/icon-menu.svg");
    }
})

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
const [x] = numbers
console.log(y)
console.log(x)