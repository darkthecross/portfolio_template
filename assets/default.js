/*jshint esversion: 6 */

// Navbar animation

function showNav() {
    document.getElementById('nav-bar').classList.remove('nav-hidden');
    document.getElementById('nav-bar').classList.add('nav-show');
}

function hideNav() {
    document.getElementById('nav-bar').classList.remove('nav-show');
    document.getElementById('nav-bar').classList.add('nav-hidden');
}

var lastScrollPos = window.pageYOffset;

document.addEventListener('scroll', function () {
    var currScrollPos = window.pageYOffset;
    if (currScrollPos > lastScrollPos && currScrollPos > 200){
        hideNav();
     } else {
        showNav();
     }
     lastScrollPos = currScrollPos;
});

// Project cards action

var projectCards = document.getElementsByClassName('project-card');
for(var el of projectCards)
{
    el.addEventListener('mouseenter', function(e) {
        this.classList.remove('shadow-sm');
        this.classList.add('shadow-lg');
    });
    el.addEventListener('mouseleave', function(e) {
        this.classList.remove('shadow-lg');
        this.classList.add('shadow-sm');
    });
}
