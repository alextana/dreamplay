
//Countdown
(function() {
    
var countDownDate = new Date("Aug 7, 2019 20:00:00").getTime();
var x = setInterval(function() {
    var today = new Date().getTime();
    var delta = countDownDate - today;

    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes =  Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);

    document.getElementById("countdownText").innerHTML = days + "d : " + hours + "h : "
    + minutes + "m : " + seconds + "s";

});


window.onscroll = function() {stickyHeaderOnScroll(); revealAnimations();};
var header = document.querySelector('.main-nav');
var sticky = header.offsetTop;
var laptop = document.querySelector('.laptop');
var video = document.querySelector('.video-hero');
var logoText = document.querySelector('.logo-text');

function stickyHeaderOnScroll() {
    if (window.pageYOffset > 220) {
        header.classList.add('sticky', 'nav-fixed_style');
        laptop.classList.add('negative-margin-140');
        video.style.opacity = 0; 


    }
    else { header.classList.remove('sticky', 'nav-fixed_style');
    laptop.classList.remove('negative-margin-140');
    video.style.opacity = .25; 
    
    }
}

var sectionOneHeight = document.querySelector('.section-1').offsetHeight;
var sectionTwoHeight = document.querySelector('.section-2').offsetHeight;
var sectionThreeHeight = document.querySelector('.section-3').offsetHeight;
var profileImage = document.querySelector('.profile-img');
var storeImage = document.querySelector('.store-img');

function revealAnimations() {
    if (window.pageYOffset >= (sectionOneHeight + sectionTwoHeight) - 500 ) {

        profileImage.classList.add('perspective');
        storeImage.classList.add('perspective-negative');
    }
    
}


})();


// scroll 
