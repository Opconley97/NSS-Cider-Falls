import { getLocations , getGuestsAtLocations , getGuest } from "./database.js"

const locations = getLocations();
const guests = getGuest();
const guestsAtLocations = getGuestsAtLocations();

export const locationList = () => {
    let locationHTML = ""

    for (const location of locations) {
        locationHTML += `<h2 id="location--${location.id}">${location.name}</h2>`
    }
    return locationHTML
}

document.addEventListener("click",(clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("location")) {
        let counter = 0
        let locationName = ""
        const [,locationPrimaryKey] = itemClicked.id.split("--")

        for (const location of locations) {
            if (location.id === parseInt(locationPrimaryKey))
            for (const guestLocations of guestsAtLocations) {
                if (guestLocations.locationId === location.id) {
                    for (const guest of guests) {
                        if (guest.id === guestLocations.guestId) {
                        counter ++
                        locationName = location.name
                        }
                    }
                }
            }
        }
        window.alert(`There are ${counter} people at ${locationName}`)
    }
})