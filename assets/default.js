function showNav() {
    document.getElementById('nav-bar').classList.remove('nav-hidden');
    document.getElementById('nav-bar').classList.add('nav-show');
}

function hideNav() {
    document.getElementById('nav-bar').classList.remove('nav-show');
    document.getElementById('nav-bar').classList.add('nav-hidden');
}

var lastScrollPos = window.pageYOffset;

document.onscroll = function () {
    var currScrollPos = window.pageYOffset;
    if (currScrollPos > lastScrollPos && currScrollPos > 200){
        hideNav();
     } else {
        showNav();
     }
     lastScrollPos = currScrollPos;
};