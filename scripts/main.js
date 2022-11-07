import { getLocations, getServices, getGuest } from "./database.js";

const locations = getLocations();
const services = getServices();
const guests = getGuest ();