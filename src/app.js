import "./assets/favicon.png";
import "./assets/logo.png";

import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

// Load icons
import fontawesome from "@fortawesome/fontawesome";
import faAngleDoubleRight from "@fortawesome/fontawesome-free-solid/faAngleDoubleRight";
import faCalendar from "@fortawesome/fontawesome-free-regular/faCalendar";
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import faClock from "@fortawesome/fontawesome-free-regular/faClock";
import faFacebookSquare from "@fortawesome/fontawesome-free-brands/faFacebookSquare";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faGooglePlusSquare from "@fortawesome/fontawesome-free-brands/faGooglePlusSquare";
import faLink from "@fortawesome/fontawesome-free-solid/faLink";
import faMapMarkerAlt from "@fortawesome/fontawesome-free-solid/faMapMarkerAlt";
import faRSS from "@fortawesome/fontawesome-free-solid/faRSS";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faTwitterSquare from "@fortawesome/fontawesome-free-brands/faTwitterSquare";

fontawesome.library.add(
    faAngleDoubleRight,
    faCalendar,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faClock,
    faFacebookSquare,
    faGithub,
    faGooglePlusSquare,
    faLink,
    faMapMarkerAlt,
    faRSS,
    faTwitter,
    faTwitterSquare,
);

import "./style";

// Attach scroll event
let scroll = document.body.querySelector("header .scroll");

if (scroll) {
    scroll.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.querySelector("main").scrollIntoView({behavior: "smooth", block: "start"});
    });
}