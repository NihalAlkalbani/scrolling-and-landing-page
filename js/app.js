 //Active section in the nav bar//
const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let activeSection ='home';
window.addEventListener('scroll', () =>{
    sectionEls.forEach(sectionEl =>{
        if (window.scrollY >= (sectionEl.offsetTop - 150)) {
            activeSection = sectionEl.id;}
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(activeSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});

//getBoundingClientRect//
const ulLink = document.querySelector(".nav_link");
window.addEventListener("scroll", function(){
    console.log(ulLink.getBoundingClientRect()); 
}); 

 
 
 
 
 
 
 
 
 
 
 