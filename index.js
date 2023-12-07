//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

}


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    
}

//toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Project section
var A = true
// Get the paragraph and header elements
var resultParagraph = document.getElementById("projectPara");
var resultHeader = document.getElementById("projectHeader");
var resultTools = document.getElementById("pc");

// Check if A has a value
if (A) {
    resultHeader.innerText = "Sports-Faclity-App";
    resultParagraph.innerText ="This application is designed to help users locate turfs, courts, and other recreational spaces in Fort Kochi.Currently, there is a lack of such dedicated apps within the Fort Kochi region."
    resultTools.innerText = `Tools Used : React Native,MongoDB`
 
} else {
    resultHeader.innerText = "Currently no projects ongoing";
}