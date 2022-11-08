import { getGuest } from "./database.js"

const guests = getGuest();

export const guestList = () => {
    let guestHTML = "<ol>"

    for (const guest of guests) {
        guestHTML += `<li>${guest.name}</li>`
    }
    
    guestHTML += "</ol>"
    return guestHTML
}