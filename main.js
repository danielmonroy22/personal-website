
var firsth1 = document.querySelector(".firsth1");
var first_h1 = document.querySelector(".first-h1");
var secondh1 = document.querySelector(".secondh1");
var thirdh1 = document.querySelector(".thirdh1");
var name_tag = document.querySelector(".nametag");
var x = window.matchMedia("(max-width:375px)");



// firsth1 event listeners
firsth1.addEventListener("mouseover", () => {
    firsth1.innerHTML = "About";
    firsth1.style.color = "yellow"
})
firsth1.addEventListener('mouseout', () => {
    firsth1.innerHTML = "Hello.";
    firsth1.style.color = "red"
})
// secondh1 event listeners
secondh1.addEventListener("mouseover", () => {
    secondh1.innerHTML = "Work";
    secondh1.style.color = "blue"
})
secondh1.addEventListener('mouseout', () => {
    secondh1.innerHTML = "I am";
    secondh1.style.color = "white"
})
// thirdh1 event listeners
thirdh1.addEventListener("mouseover", () => {
    thirdh1.innerHTML = "Contact";
    thirdh1.style.color = "red"
})
thirdh1.addEventListener('mouseout', () => {
    thirdh1.innerHTML = "Daniel";
    thirdh1.style.color = "white"
})
//name_tag eventlisteners
name_tag.addEventListener("mouseover", () => {
    // name_tag.innerHTML = "DanielDev.works";



})
name_tag.addEventListener('mouseout', () => {
    name_tag.innerHTML = "Daniel.";

})
