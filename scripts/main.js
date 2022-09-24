
let firsth1 = document.querySelector(".firsth1");
let first_h1 = document.querySelector(".first-h1");
let secondh1 = document.querySelector(".secondh1");
let thirdh1 = document.querySelector(".thirdh1");
let name_tag = document.querySelector(".nametag");
let phonePortrait = window.matchMedia("(min-device-width: 320px) and (max-device-width: 480px) and (orientation:portrait)");
let phoneLandscape = window.matchMedia("(min-device-width: 320px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)");
let ipadPro = window.matchMedia("(min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (hover: none)");
let home_page = document.querySelector("main");

var clicks = 0;

// Then we set the value in the --vh custom property to the root of the document
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

if (phonePortrait.matches || phoneLandscape.matches || ipadPro.matches) {

    home_page.addEventListener("click", () => {
        if (clicks === 0) {
            firsth1.innerHTML = "About";
            secondh1.innerHTML = "Work";
            thirdh1.innerHTML = "Contact";
            clicks++;
        }
        else {
            firsth1.innerHTML = "Hello.";
            secondh1.innerHTML = "I am";
            thirdh1.innerHTML = "Daniel";
            clicks = 0;

        }


    });

}



else {


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
}
