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


    } else {

        darkMood.src = "IMAGES/icons8-moon-man-100.png"; // ! for icon;

        darkMoodLogo.src = "IMAGES/logo.png"; // todo: for logo;

    };

};


// ! Sidebar DARK THEME ;

let darkMoodSide = document.querySelector(".darkmoodIconSide");

darkMoodSide.onclick = function() {

    document.body.classList.toggle("darkTheme");

    if (document.body.classList.contains("darkTheme")) {

        darkMoodSide.src = "IMAGES/icons8-sun-100 (1).png"; // ! for icon;

        darkMoodLogo.src = "IMAGES/logo2.png"; // todo: for logo;


    } else {

        darkMoodSide.src = "IMAGES/icons8-moon-man-100.png"; // ! for icon;

        darkMoodLogo.src = "IMAGES/logo.png"; // todo: for logo;

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


// ! For show & Hide sidenav;


let showMenu = () => {

    let cng = false;

    let sideBar = document.querySelector(".resnavigation");

    let sideBarIcon = document.querySelector(".navIcons");

    if (sideBarIcon) {

        sideBarIcon.addEventListener("click", () => {

            sideBar.classList.toggle("expander");

            if (cng) {

                sideBarIcon.innerHTML = `<i class="fas fa-bars" id="navOpenIcon"></i>`;

                cng = false;

            } else {

                sideBarIcon.innerHTML = `<i class="fas fa-times" id="navOpenIcon"></i>`;

                cng = true;

            };

        });

    };

};

showMenu();


// ! For show submemu in sidenav; 

let showSub = document.querySelectorAll("#collapse");

for (let i = 0; i < showSub.length; i++) {

    showSub[i].addEventListener("click", function() {

        let colMenu = this.nextElementSibling;

        colMenu.classList.toggle("show_col");

        let rotate = colMenu.previousElementSibling;

        rotate.classList.toggle("rotate");

    });

};



// ! For show submemu2 in sidenav ;


let showSub2 = document.querySelector("#collapse2");

showSub2.addEventListener("click", function() {

    let colMenu2 = this.nextElementSibling;

    colMenu2.classList.toggle("show_col");

    showSub2.classList.toggle("rotate");

});

// todo: FOR SIGN UP FORM ;

// ! for email validation ;

let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let email = document.querySelector(".mail");

let mailIcon = document.querySelector("#validMailIcon");

let mailErr = document.querySelector(".mailErr");

email.oninput = function() {

    mailIcon.style.display = "inline-block";

    if (email.value.match(mailRegex)) {

        let emailIcon = document.querySelector("#errIcon");

        mailIcon.innerHTML = `<i class="fas fa-check-circle"></i>`;

        mailIcon.style.color = "#07ac07"

        email.style.border = "none";

        mailErr.style.display = "none";

    } else if (email.value == "") {

        mailIcon.style.display = "none";

        mailErr.style.display = "none";

        email.style.border = "none";

    } else {

        let emailIcon = document.querySelector("#errIcon");

        mailIcon.innerHTML = `<i class="fas fa-exclamation-circle"></i>`;

        mailIcon.style.color = "#FF2851";

        email.style.border = "2px solid #FF2851";

        mailErr.style.display = "block";

    };


};




// todo: For password ;


let state = false;

let state2 = false;

let password = document.querySelector(".pass");

let conPassword = document.querySelector(".conPass");

let passShowIcon1 = document.querySelector("#passIcon1");

let passShowIcon2 = document.querySelector("#passIcon2");

let strength = document.querySelector(".str");

let passwordErr = document.querySelector(".passErr");

let passParaMeters = {

    count: false,

    letters: false,

    numbers: false,

    special: false

};


// ! FOR SHOW AND HIDE PASSWORDS ;

passShowIcon1.onclick = function() {

    if (state) {

        password.setAttribute("type", "password");

        passShowIcon1.style.color = `var(--tenth-color)`;

        state = false;

    } else {

        password.setAttribute("type", "text");

        passShowIcon1.style.color = `#3a81ed`;

        state = true;

    }

};



passShowIcon2.onclick = function() {

    if (state2) {

        conPassword.setAttribute("type", "password");

        passShowIcon2.style.color = `var(--tenth-color)`;

        state2 = false;

    } else {

        conPassword.setAttribute("type", "text");

        passShowIcon2.style.color = `#3a81ed`;

        state2 = true;

    }

};


// ! FOR PASSWORD STRENGTH ;


password.oninput = function() {

    passParaMeters.letters = (/[A-Za-z]+/.test(password.value)) ? true : false;

    passParaMeters.numbers = (/[0-9]+/.test(password.value)) ? true : false;

    passParaMeters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password.value)) ? true : false;

    passParaMeters.count = (password.value.length > 6) ? true : false;

    let scaleLength = Object.values(passParaMeters).filter(value => value);

    strength.innerHTML = "";

    for (let i in scaleLength) {

        let passSpan = document.createElement("span");

        passSpan.classList.add("passStr");

        strength.appendChild(passSpan);

    };


    let spansRef = document.getElementsByClassName("passStr");

    for (let i = 0; i < spansRef.length; i++) {

        switch (spansRef.length - 1) {

            case 0:

                spansRef[i].style.background = `#ff3e36`;

                break;

            case 1:

                spansRef[i].style.background = `#ff691f`;

                break;

            case 2:

                spansRef[i].style.background = `#ffda36`;

                break;

            case 3:

                spansRef[i].style.background = `#0be881`;

                break;

        };

    };

};


conPassword.oninput = function() {

    if (password.value == conPassword.value) {

        passwordErr.style.display = "none";

        conPassword.style.border = "2px solid transparent";

    } else {

        passwordErr.style.display = "inline-block";

        passwordErr.style.background = "#ff4d4d";

        conPassword.style.border = "2px solid #ff4d4d";

    };

};

// ! FOR PHONE START ;

let country = document.querySelector("#country");

let pNumber = document.querySelector(".code");

country.onchange = function() {

    if (country.value == "af") {

        pNumber.value = "93";

    } else if (country.value == "al") {

        pNumber.value = "355";

    } else if (country.value == "dz") {

        pNumber.value = "213";

    } else if (country.value == "asm") {

        pNumber.value = "1-684";

    } else if (country.value == "and") {

        pNumber.value = "376";

    } else if (country.value == "ago") {

        pNumber.value = "244";

    } else if (country.value == "aia") {

        pNumber.value = "1-264";

    } else if (country.value == "ata") {

        pNumber.value = "672";

    } else if (country.value == "arg") {

        pNumber.value = "54";

    } else if (country.value == "atg") {

        pNumber.value = "1-268";

    } else if (country.value == "arm") {

        pNumber.value = "374";

    } else if (country.value == "abw") {

        pNumber.value = "297";

    } else if (country.value == "aus") {

        pNumber.value = "61";

    } else if (country.value == "aut") {

        pNumber.value = "43";

    } else if (country.value == "aze") {

        pNumber.value = "994";

    } else if (country.value == "bhs") {

        pNumber.value = "1-242";

    } else if (country.value == "bhr") {

        pNumber.value = "973";

    } else if (country.value == "bd") {

        pNumber.value = "880";

    } else if (country.value == "brb") {

        pNumber.value = "1-246";

    } else if (country.value == "blr") {

        pNumber.value = "375";

    } else if (country.value == "bel") {

        pNumber.value = "32";

    } else if (country.value == "blz") {

        pNumber.value = "501";

    } else if (country.value == "ben") {

        pNumber.value = "229";

    } else if (country.value == "bmu") {

        pNumber.value = "1-441";

    } else if (country.value == "btn") {

        pNumber.value = "975";

    } else if (country.value == "bol") {

        pNumber.value = "591";

    } else if (country.value == "bih") {

        pNumber.value = "387";

    } else if (country.value == "bwa") {

        pNumber.value = "267";

    } else if (country.value == "bra") {

        pNumber.value = "55";

    } else if (country.value == "brn") {

        pNumber.value = "673";

    } else if (country.value == "bgr") {

        pNumber.value = "359";

    } else if (country.value == "bfa") {

        pNumber.value = "226";

    } else if (country.value == "bdi") {

        pNumber.value = "257";

    } else if (country.value == "khm") {

        pNumber.value = "855";

    } else if (country.value == "cmr") {

        pNumber.value = "237";

    } else if (country.value == "can") {

        pNumber.value = "1";

    } else if (country.value == "cpv") {

        pNumber.value = "238";

    } else if (country.value == "cym") {

        pNumber.value = "1-345";

    } else if (country.value == "caf") {

        pNumber.value = "236";

    } else if (country.value == "tcd") {

        pNumber.value = "235";

    } else if (country.value == "chl") {

        pNumber.value = "56";

    } else if (country.value == "chn") {

        pNumber.value = "86";

    } else if (country.value == "cxr") {

        pNumber.value = "61";

    } else if (country.value == "cck") {

        pNumber.value = "61";

    } else if (country.value == "col") {

        pNumber.value = "57";

    } else if (country.value == "com") {

        pNumber.value = "269";

    } else if (country.value == "cok") {

        pNumber.value = "682";

    } else if (country.value == "cri") {

        pNumber.value = "506";

    } else if (country.value == "hrv") {

        pNumber.value = "385";

    } else if (country.value == "cub") {

        pNumber.value = "53";

    } else if (country.value == "cuw") {

        pNumber.value = "599";

    } else if (country.value == "cyp") {

        pNumber.value = "357";

    } else if (country.value == "cze") {

        pNumber.value = "420";

    } else if (country.value == "cod") {

        pNumber.value = "243";

    } else if (country.value == "dnk") {

        pNumber.value = "45";

    } else if (country.value == "dji") {

        pNumber.value = "253";

    } else if (country.value == "dma") {

        pNumber.value = "1-767";

    } else if (country.value == "tls") {

        pNumber.value = "670";

    } else if (country.value == "ecu") {

        pNumber.value = "593";

    } else if (country.value == "egy") {

        pNumber.value = "20";

    } else if (country.value == "slv") {

        pNumber.value = "503";

    } else if (country.value == "gnq") {

        pNumber.value = "240";

    } else if (country.value == "eri") {

        pNumber.value = "291";

    } else if (country.value == "est") {

        pNumber.value = "372";

    } else if (country.value == "eth") {

        pNumber.value = "251";

    } else if (country.value == "flk") {

        pNumber.value = "500";

    } else if (country.value == "fro") {

        pNumber.value = "298";

    } else if (country.value == "fji") {

        pNumber.value = "679";

    } else if (country.value == "fin") {

        pNumber.value = "358";

    } else if (country.value == "fra") {

        pNumber.value = "33";

    } else if (country.value == "gab") {

        pNumber.value = "241";

    } else if (country.value == "gmb") {

        pNumber.value = "220";

    } else if (country.value == "geo") {

        pNumber.value = "995";

    } else if (country.value == "deu") {

        pNumber.value = "49";

    } else if (country.value == "gha") {

        pNumber.value = "233";

    } else if (country.value == "gib") {

        pNumber.value = "350";

    } else if (country.value == "grc") {

        pNumber.value = "30";

    } else if (country.value == "grl") {

        pNumber.value = "299";

    } else if (country.value == "grd") {

        pNumber.value = "1-473";

    } else if (country.value == "gum") {

        pNumber.value = "1-671";

    } else if (country.value == "gtm") {

        pNumber.value = "502";

    } else if (country.value == "ggy") {

        pNumber.value = "44-1481";

    } else if (country.value == "gin") {

        pNumber.value = "224";

    } else if (country.value == "guy") {

        pNumber.value = "592";

    } else if (country.value == "hti") {

        pNumber.value = "509";

    } else if (country.value == "hnd") {

        pNumber.value = "504";

    } else if (country.value == "hkg") {

        pNumber.value = "852";

    } else if (country.value == "hun") {

        pNumber.value = "36";

    } else if (country.value == "isl") {

        pNumber.value = "354";

    } else if (country.value == "ind") {

        pNumber.value = "91";

    } else if (country.value == "idn") {

        pNumber.value = "62";

    } else if (country.value == "irn") {

        pNumber.value = "98";

    } else if (country.value == "irq") {

        pNumber.value = "964";

    } else if (country.value == "irl") {

        pNumber.value = "353";

    } else if (country.value == "ita") {

        pNumber.value = "39";

    } else if (country.value == "civ") {

        pNumber.value = "225";

    } else if (country.value == "jam") {

        pNumber.value = "1-876";

    } else if (country.value == "jpn") {

        pNumber.value = "81";

    } else if (country.value == "jey") {

        pNumber.value = "44-1534";

    } else if (country.value == "jor") {

        pNumber.value = "962";

    } else if (country.value == "kaz") {

        pNumber.value = "7";

    } else if (country.value == "ken") {

        pNumber.value = "254";

    } else if (country.value == "kir") {

        pNumber.value = "686";

    } else if (country.value == "xkx") {

        pNumber.value = "383";

    } else if (country.value == "kwt") {

        pNumber.value = "965";

    } else if (country.value == "kgz") {

        pNumber.value = "996";

    } else if (country.value == "lao") {

        pNumber.value = "856";

    } else if (country.value == "lva") {

        pNumber.value = "971";

    } else if (country.value == "lbn") {

        pNumber.value = "961";

    } else if (country.value == "lso") {

        pNumber.value = "266";

    } else if (country.value == "lbr") {

        pNumber.value = "231";

    } else if (country.value == "lby") {

        pNumber.value = "218";

    } else if (country.value == "lie") {

        pNumber.value = "423";

    } else if (country.value == "ltu") {

        pNumber.value = "370";

    } else if (country.value == "lux") {

        pNumber.value = "352";

    } else if (country.value == "mac") {

        pNumber.value = "853";

    } else if (country.value == "mkd") {

        pNumber.value = "389";

    } else if (country.value == "mdg") {

        pNumber.value = "261";

    } else if (country.value == "mwi") {

        pNumber.value = "265";

    } else if (country.value == "mys") {

        pNumber.value = "60";

    } else if (country.value == "mdv") {

        pNumber.value = "960";

    } else if (country.value == "mli") {

        pNumber.value = "223";

    } else if (country.value == "mlt") {

        pNumber.value = "356";

    } else if (country.value == "mrt") {

        pNumber.value = "222";

    } else if (country.value == "mus") {

        pNumber.value = "230";

    } else if (country.value == "myt") {

        pNumber.value = "262";

    } else if (country.value == "mex") {

        pNumber.value = "52";

    } else if (country.value == "fsm") {

        pNumber.value = "691";

    } else if (country.value == "mda") {

        pNumber.value = "373";

    } else if (country.value == "mco") {

        pNumber.value = "377";

    } else if (country.value == "mng") {

        pNumber.value = "976";

    } else if (country.value == "mne") {

        pNumber.value = "382";

    } else if (country.value == "msr") {

        pNumber.value = "1-664";

    } else if (country.value == "mar") {

        pNumber.value = "212";

    } else if (country.value == "moz") {

        pNumber.value = "258";

    } else if (country.value == "mmr") {

        pNumber.value = "95";

    } else if (country.value == "nam") {

        pNumber.value = "264";

    } else if (country.value == "nru") {

        pNumber.value = "674";

    } else if (country.value == "npl") {

        pNumber.value = "977";

    } else if (country.value == "nld") {

        pNumber.value = "31";

    } else if (country.value == "ncl") {

        pNumber.value = "687";

    } else if (country.value == "nzl") {

        pNumber.value = "64";

    } else if (country.value == "nic") {

        pNumber.value = "505";

    } else if (country.value == "ner") {

        pNumber.value = "227";

    } else if (country.value == "nga") {

        pNumber.value = "234";

    } else if (country.value == "niu") {

        pNumber.value = "683";

    } else if (country.value == "prk") {

        pNumber.value = "850";

    } else if (country.value == "mnp") {

        pNumber.value = "1-670";

    } else if (country.value == "nor") {

        pNumber.value = "47";

    } else if (country.value == "omn") {

        pNumber.value = "968";

    } else if (country.value == "pak") {

        pNumber.value = "92";

    } else if (country.value == "plw") {

        pNumber.value = "680";

    } else if (country.value == "pse") {

        pNumber.value = "970";

    } else if (country.value == "pan") {

        pNumber.value = "507";

    } else if (country.value == "png") {

        pNumber.value = "675";

    } else if (country.value == "pry") {

        pNumber.value = "595";

    } else if (country.value == "per") {

        pNumber.value = "51";

    } else if (country.value == "phl") {

        pNumber.value = "63";

    } else if (country.value == "pcn") {

        pNumber.value = "64";

    } else if (country.value == "pol") {

        pNumber.value = "48";

    } else if (country.value == "prt") {

        pNumber.value = "351";

    } else if (country.value == "qat") {

        pNumber.value = "974";

    } else if (country.value == "reu") {

        pNumber.value = "262";

    } else if (country.value == "rou") {

        pNumber.value = "40";

    } else if (country.value == "rus") {

        pNumber.value = "7";

    } else if (country.value == "rwa") {

        pNumber.value = "250";

    } else if (country.value == "wsm") {

        pNumber.value = "685";

    } else if (country.value == "smr") {

        pNumber.value = "378";

    } else if (country.value == "sau") {

        pNumber.value = "966";

    } else if (country.value == "sen") {

        pNumber.value = "221";

    } else if (country.value == "srb") {

        pNumber.value = "381";

    } else if (country.value == "syc") {

        pNumber.value = "248";

    } else if (country.value == "sgp") {

        pNumber.value = "65";

    } else if (country.value == "svk") {

        pNumber.value = "421";

    } else if (country.value == "svn") {

        pNumber.value = "386";

    } else if (country.value == "som") {

        pNumber.value = "252";

    } else if (country.value == "zaf") {

        pNumber.value = "27";

    } else if (country.value == "kor") {

        pNumber.value = "82";

    } else if (country.value == "ssd") {

        pNumber.value = "221";

    } else if (country.value == "esp") {

        pNumber.value = "34";

    } else if (country.value == "lka") {

        pNumber.value = "94";

    } else if (country.value == "sdn") {

        pNumber.value = "249";

    } else if (country.value == "sur") {

        pNumber.value = "597";

    } else if (country.value == "swz") {

        pNumber.value = "268";

    } else if (country.value == "swe") {

        pNumber.value = "46";

    } else if (country.value == "che") {

        pNumber.value = "41";

    } else if (country.value == "syr") {

        pNumber.value = "963";

    } else if (country.value == "twn") {

        pNumber.value = "886";

    } else if (country.value == "tjk") {

        pNumber.value = "992";

    } else if (country.value == "tza") {

        pNumber.value = "255";

    } else if (country.value == "tha") {

        pNumber.value = "66";

    } else if (country.value == "tgo") {

        pNumber.value = "228";

    } else if (country.value == "tkl") {

        pNumber.value = "690";

    } else if (country.value == "ton") {

        pNumber.value = "676";

    } else if (country.value == "tun") {

        pNumber.value = "216";

    } else if (country.value == "tur") {

        pNumber.value = "90";

    } else if (country.value == "tkm") {

        pNumber.value = "993";

    } else if (country.value == "tuv") {

        pNumber.value = "688";

    } else if (country.value == "uga") {

        pNumber.value = "256";

    } else if (country.value == "ukr") {

        pNumber.value = "380";

    } else if (country.value == "are") {

        pNumber.value = "971";

    } else if (country.value == "gbr") {

        pNumber.value = "44";

    } else if (country.value == "usa") {

        pNumber.value = "1";

    } else if (country.value == "ury") {

        pNumber.value = "598";

    } else if (country.value == "uzb") {

        pNumber.value = "998";

    } else if (country.value == "vut") {

        pNumber.value = "678";

    } else if (country.value == "vat") {

        pNumber.value = "379";

    } else if (country.value == "ven") {

        pNumber.value = "58";

    } else if (country.value == "vnm") {

        pNumber.value = "84";

    } else if (country.value == "esh") {

        pNumber.value = "212";

    } else if (country.value == "yem") {

        pNumber.value = "967";

    } else if (country.value == "zmb") {

        pNumber.value = "260";

    } else if (country.value == "zwe") {

        pNumber.value = "263";

    } else {

        pNumber.value = "";

    };


};




// todo: AGE VALIDATION ;


const yearMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let datePicker = document.querySelector(".dob");

let ageError = document.querySelector(".ageErr");


datePicker.oninput = function() {

    let today = new Date();

    let inputDate = new Date(datePicker.value);

    let birthDetails = {

        day: inputDate.getDate(),

        month: inputDate.getMonth() + 1,

        year: inputDate.getFullYear()

    };

    let crntDay = today.getDate();

    let crntMonth = today.getMonth() + 1;

    let crntYear = today.getFullYear();

    leapChecker(crntYear);


    // ! if given date is future ;

    if ((birthDetails.year > crntYear) || (birthDetails.month > crntMonth && birthDetails.year == crntYear) || (birthDetails.day > crntDay && birthDetails.month == crntMonth && birthDetails.year == crntYear)) {

        alert("Sorry,sir. You entered a Future Date");

        return;

    };


    // ! FOR CALCULATE AGE ;

    birthYear = crntYear - birthDetails.year;

    if (crntMonth >= birthDetails.month) {

        birthMonth = crntMonth - birthDetails.month;

    } else {

        birthYear--;

        birthMonth = 12 + crntMonth - birthDetails.month;

    };

    if (crntDay >= birthDetails.day) {

        birthDay = crntDay - birthDetails.day;

    } else {

        birthMonth--;

        let days = yearMonths[crntMonth - 2];

        birthDay = days + crntDay - birthDetails.day;


        if (birthMonth < 0) {

            birthMonth = 11;

            birthYear--;

        };

    };


    dsplRslt(birthDay, birthMonth, birthYear);

};



// ! FOR CHECK LEAP YEAR ;

function leapChecker(year) {

    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {

        yearMonths[1] = 29;

    } else {

        yearMonths[1] = 28;

    };

};

function dsplRslt(bDay, bMon, bYear) {

    if (bYear < 18) {

        ageError.style.display = "inline-block"

    } else {

        ageError.style.display = "none"

    }

};