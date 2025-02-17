let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {

    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");

}

const sr = ScrollReveal ({

    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal(".hero-text",{delay:200, origin:"top"});
sr.reveal(".hero-img",{delay:450, origin:"top"});
sr.reveal(".icons",{delay:500, origin:"left"});
sr.reveal(".scroll-down",{delay:200, origin:"right"});
sr.reveal(".about-text",{delay:200, origin:"top"});
sr.reveal(".about-img",{delay:450, origin:"top"});
sr.reveal(".townhall-text",{delay:200, origin:"top"});
sr.reveal(".members",{delay:200, origin:"top"});
sr.reveal(".member-img",{delay:450, origin:"top"});
sr.reveal(".troops-text",{delay:200, origin:"top"});
sr.reveal(".troop",{delay:200, origin:"top"});
sr.reveal(".troop-img",{delay:200, origin:"top"});


