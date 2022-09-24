let carToHide = document.querySelector(".cardToHide");
let carToHide1 = document.querySelector(".cardToHide1");
let carToHide2 = document.querySelector(".cardToHide2");
let carToHide3 = document.querySelector(".cardToHide3");
let carToHide4 = document.querySelector(".cardToHide4");
let carToHide5 = document.querySelector(".cardToHide5");

carToHide.addEventListener("click", () => {
    carToHide.style.height = "0px"
    carToHide1.style.height = "8rem"
    carToHide2.style.height = "8rem"
    carToHide3.style.height = "8rem"
    carToHide4.style.height = "8rem"
    carToHide5.style.height = "8rem"

});
carToHide1.addEventListener("click", () => {
    carToHide1.style.height = "0px"
    carToHide.style.height = "8rem"
    carToHide2.style.height = "8rem"
    carToHide3.style.height = "8rem"
    carToHide4.style.height = "8rem"
    carToHide5.style.height = "8rem"

});
carToHide2.addEventListener("click", () => {
    carToHide2.style.height = "0px"
    carToHide1.style.height = "8rem"
    carToHide.style.height = "8rem"
    carToHide3.style.height = "8rem"
    carToHide4.style.height = "8rem"
    carToHide5.style.height = "8rem"

});
carToHide3.addEventListener("click", () => {
    carToHide3.style.height = "0px"
    carToHide1.style.height = "8rem"
    carToHide2.style.height = "8rem"
    carToHide.style.height = "8rem"
    carToHide4.style.height = "8rem"
    carToHide5.style.height = "8rem"

});
carToHide4.addEventListener("click", () => {
    carToHide4.style.height = "0px"
    carToHide1.style.height = "8rem"
    carToHide2.style.height = "8rem"
    carToHide3.style.height = "8rem"
    carToHide.style.height = "8rem"
    carToHide5.style.height = "8rem"

});
carToHide5.addEventListener("click", () => {
    carToHide5.style.height = "0px"
    carToHide1.style.height = "8rem"
    carToHide2.style.height = "8rem"
    carToHide3.style.height = "8rem"
    carToHide4.style.height = "8rem"
    carToHide.style.height = "8rem"

});
