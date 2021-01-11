// $('[data-target="#privacyModal"]').click(function(){
//     console.log(document.querySelector('#privacyModal'));
//     $("#privacyModal").modal('show');
// });

//$('[data-toggle="tooltip"]').tooltip()

// When the user scrolls the page, execute toggleTopMenu
window.onscroll = function() {toggleTopMenu()};

// Get the menu bar
const menu = document.querySelector(".topMenu");

// Add the scrolled class to the menu when you start scrolling. Remove "scrolled" when you are at the top
function toggleTopMenu() {
  if (window.pageYOffset > 0) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}

// Get the page sections

const downloads = document.querySelector("#downloads");
const features = document.querySelector("#features");
const contacts = document.querySelector(".new-friends");

// Get the menu elements

const downloadsMenu =  document.querySelector('[scroll="#downloads"]');
const featuresMenu = document.querySelector('[scroll="#features"]');
const contactsMenu = document.querySelector('[scroll=".new-friends"]');

//Add event listener

[].forEach.call(document.getElementsByTagName("a"),function(el){
  el.addEventListener("click",function(event){
    console.log(document.querySelector(event.target.getAttribute("scroll")));
    document.querySelector(event.target.getAttribute("scroll")).scrollIntoView({behavior: "smooth"});
  });
});

 

