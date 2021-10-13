// ! DARK THEME ;

let darkMood = document.querySelector(".darkmoodIcon");

let darkMoodLogo = document.querySelector(".topHeader2Logo");

let sec1bg = document.querySelector("#sec1");

darkMood.onclick = function() {

    let closeSidebar = document.querySelector("#navCloseIcon");

    document.body.classList.toggle("darkTheme");

    if (document.body.classList.contains("darkTheme")) {

        darkMood.src = "IMAGES/icons8-sun-100 (1).png"; // ! for icon;

        darkMoodLogo.src = "IMAGES/logo2.png"; // todo: for logo;

        sec1bg.style.background = ` url("IMAGES/1092758.jpg") `; // ! section 1 background image;

        closeSidebar.src = "IMAGES/icons8-delete-48.png"; // todo: for nav close icon;


    } else {

        darkMood.src = "IMAGES/icons8-moon-man-100.png"; // ! for icon;

        darkMoodLogo.src = "IMAGES/logo.png"; // todo: for logo;

        sec1bg.style.background = ` url("IMAGES/ss-bg.jpg") `; // ! section 1 background image;

        closeSidebar.src = "IMAGES/icons8-delete-32.png"; // todo: for nav close icon;

    };

};

// ! PRELOADER ;

let preload = document.querySelector("#preloader");

let preloadNav = document.querySelector(".bottomHeader"); // todo: navigation bar ( menu );

preloadNav.style.display = "none"; // ! hide navigation bar ( menu ) when its preload;

window.addEventListener("load", function() {

    preloadNav.style.display = "block"; // ! unhide navigation bar ( menu ) when its preload;

    preload.style.display = "none";

});

// ! FOR ONCLICK SCROLL TO TOP;

window.addEventListener("scroll", function() {

    let scrollToTop = this.document.querySelector(".scrollTop");

    scrollToTop.classList.toggle("show", window.scrollY > 200);

}); // todo: IT IS FOR VISIBLE ICON AFTER SCROLL ;

let scrollToTop = this.document.querySelector(".scrollTop");

scrollToTop.addEventListener("click", () => {

    document.documentElement.scrollTop = 0;

}); // todo: IT IS FOR GO TO TOP ;

// ! AUTO WRITE ( SECTION 2 ) ;

let typed = new Typed(".autoWrite", {

    strings: ["IT services", "Web Development", "Security services"],
    typeSpeed: 55,
    backSpeed: 50,
    loop: true,

});

// ! STICKY NAVIGATION ( HEADER > BOTTOMHEADER ) ;

window.addEventListener("scroll", function() {

    let stickyLogo = document.querySelector(".topHeader2Logo");

    let headSticky = document.querySelector(".bottomHeader");

    headSticky.classList.toggle("sticky", window.scrollY > 0);

    if (headSticky.classList.contains("sticky", window.scrollY > 0)) {


        stickyLogo.src = "IMAGES/logo2.png"; // todo: for logo;

    } else {

        stickyLogo.src = "IMAGES/logo.png"; // todo: for logo;

    }

});

// ! side navigation;

let openSidebar = document.querySelector("#navOpenIcon");

let closeSidebar = document.querySelector("#navCloseIcon");

let sideNav = document.querySelector(".navigation");

openSidebar.onclick = function() {

    sideNav.style.left = "0px";
};

closeSidebar.onclick = function() {

    sideNav.style.left = "-100%";

};


// ! FOR SLICK SLIDER ( SECTION 3 our service section ) ;


$('.slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});