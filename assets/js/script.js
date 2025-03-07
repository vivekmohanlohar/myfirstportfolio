//>>>>> Javascript for background change when scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

//>>>>> Loading animation on page load

var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);

function hides() {
  loader.classList.add("hide");
  loaderImg.classList.add("ImgNone");
}

//>>>>> Menu Button Event Listener

const Menu = document.querySelector(".nav-navigation");
const Nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("menu-active");
  Menu.classList.toggle("active");
  Nav.classList.toggle("NavBgColor")
})


//>>>>>> Greetings section starts here

// Automatically changing greetings

/* var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('greetings').innerHTML = greet;
*/
//spacial background and styling addded to greetings....