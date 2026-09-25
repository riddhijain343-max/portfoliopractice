
const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");


        const icon =
            menuBtn.querySelector("i");


        if (
            navLinks.classList.contains("active")
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section");


const navLinksItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinksItems.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const scrollTopButton =
    document.createElement("button");


scrollTopButton.classList.add(
    "scroll-top"
);


scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


scrollTopButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


document.body.appendChild(
    scrollTopButton
);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add(
            "show"
        );

    } else {

        scrollTopButton.classList.remove(
            "show"
        );

    }

});


scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

