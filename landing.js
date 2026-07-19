// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

const navigationLinks =
    document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// NUMBER COUNTER ANIMATION
// ===============================

const counters =
    document.querySelectorAll(".counter");


function startCounter(counter) {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const duration = 1500;

    const steps = 60;

    const increment =
        target / steps;


    const timer = setInterval(function () {

        current += increment;


        if (current >= target) {

            counter.innerText =
                target.toLocaleString() + "+";

            clearInterval(timer);

        }

        else {

            counter.innerText =
                Math.floor(current).toLocaleString() + "+";

        }

    }, duration / steps);

}


// ===============================
// START COUNTER WHEN VISIBLE
// ===============================

const statsSection =
    document.querySelector(".stats-container");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    counters.forEach(function (counter) {

                        startCounter(counter);

                    });

                    observer.unobserve(
                        statsSection
                    );

                }

            });

        },

        {
            threshold: 0.4
        }

    );


if (statsSection) {

    observer.observe(statsSection);

}


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    }

    else {

        navbar.style.boxShadow =
            "0 2px 12px rgba(0,0,0,0.04)";

    }

});