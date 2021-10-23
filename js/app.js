/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

 const navigation = document.getElementById('navbar__list');

 const sections = document.querySelectorAll('section');
 
 /**
  * End Global Variables
  * Start Helper Functions  
  * 
  */
 // generate the navigation menu dynamically
 
 const navGenetator = () => {
   // apply looping over the entire sections
 
   sections.forEach(section => {
     // create a list item and define variables
     let navContainer = document.createElement("li");
 
     const sectionID = section.id;
     const sectionDataNav = section.dataset.nav;
     // creat a link
     navContainer.innerHTML = `<a class ="menu__link"  href="#${sectionID}"> ${sectionDataNav} </a>`;
     // add the link to the navigation menu
     navigation.appendChild(navContainer);
 
   });
 };
 // implementation
 navGenetator();
 
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 // obtain the client window dimensions to recognize which section is being viewed right now
 sectionInViewport = (onScreen) => {
   const dimensions = onScreen.getBoundingClientRect();
   return (
     dimensions.top >= 0 &&
     dimensions.left >= 0 &&
     dimensions.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
     dimensions.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 };
 
 
 // Add class 'active' to the section when near top of viewport
 // add class 'active' to the link associated to the section on viewport
 
 setActiveClass = () => {
   // loop over all sections
   for (let i = 0; i < sections.length; i++) {
     // invoke the dimensions and set donditions
     if (sectionInViewport(sections[i])) {
       // add 'active' class since the section is in viewport
       sections[i].classList.add("your-active-class");
       // add 'active' class to the associated link
       links[i].classList.add("active");
 
     } else {
 
       // remove 'active' class from other sections and links
       sections[i].classList.remove("your-active-class");
       links[i].classList.remove("active");
     }
   }
 };
 // implement the function as per scroll action and get different section on the viewport
 document.addEventListener('scroll', function() {
   setActiveClass();
 });
 
 
 // Scroll to anchor ID using scrollTO event
 
 // call the links
 const links = document.querySelectorAll('header nav ul a');
 // apply looping over all links
 for (const link of links) {
   // set onclick event
   link.onclick = function clickHandler(c) {
     c.preventDefault();
     const href = this.getAttribute('href');
     // respond the event in a smooth behavior
     document.querySelector(href).scrollIntoView({
       behavior: 'smooth'
     });
   };
 }
 
 // /**
 //  * End Main Functions
 //  * Begin Events
 //  * 
 // */
 
 
 // To top button
 //Call the button by id
 let clickMe = document.getElementById("myButton");
 
 // set the button appearence conditions
 // the button appears after scrolling down 50px of document top
 window.onscroll = function() {
   scrollFunction();
 };
 
 scrollFunction = () => {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     // button style
     clickMe.style.display = "block";
   } else {
     clickMe.style.display = "none";
   }
 };
 
 // clicks the button and scroll to the top of the document
 topFunction = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   
 };
 
