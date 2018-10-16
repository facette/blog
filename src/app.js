import {dom, library} from "@fortawesome/fontawesome-svg-core";

import {
    faFacebookSquare,
    faGithub,
    faGooglePlusSquare,
    faTwitter,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
    faCalendar,
    faClock,
} from "@fortawesome/free-regular-svg-icons";

import {
    faAngleDoubleRight,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faLink,
    faMapMarkerAlt,
    faRss,
} from "@fortawesome/free-solid-svg-icons";

library.add(
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
    faRss,
    faTwitter,
    faTwitterSquare,
);

import smoothscroll from "smoothscroll-polyfill";

import "./assets";
import "./style";

dom.watch();
smoothscroll.polyfill();

// Attach scroll event
let scroll = document.body.querySelector("header .scroll");

if (scroll) {
    scroll.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.querySelector("main").scrollIntoView({behavior: "smooth", block: "start"});
    });
}
