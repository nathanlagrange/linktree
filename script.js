AOS.init();

const Top = document.querySelector("#ligne1");
const Middle = document.querySelector("#ligne2");
const Bottom = document.querySelector("#ligne3");
const Burger = document.querySelector("#burger");
const navVertial = document.querySelector("navVertical");

Burger.addEventListener("click", () => {
    Middle.classList.toggle("off");
    Top.classList.toggle("transformLine1");
    Bottom.classList.toggle("transformLine2");
    navVertical.classList.toggle("slide")
})

const close = document.querySelector("#close");
const modal = document.querySelector("#modal");
const connexion = document.querySelector("#connexion")


connexion.addEventListener("click", function(){
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, "100")
})

close.addEventListener("click", function(){
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, "310")
})