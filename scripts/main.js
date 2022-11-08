import { locationList } from "./locations.js";
import { serviceList , servicesOffered } from "./services.js";
import { guestList } from "./guests.js";

const mainCOntainer = document.querySelector("#container")

const locations = locationList();
const services = serviceList();
const guests = guestList();
const serviceOffer = servicesOffered();


const applicationHTML = `
<h1>Cider Falls Park</h1>
${serviceOffer}
<article class="firstLocations">
    ${locations}
    <section class="locations-info">
    <h3>${services}</h3>
    </section>
    <section class="guest-info">
    <h3>${guests}</h3>
    `

    mainCOntainer.innerHTML = applicationHTML

    