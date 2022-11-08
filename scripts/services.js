import { getServices , getLocations , getServicesAtLocations } from "./database.js"

let services = getServices();
let locations = getLocations();
let servicesAtLocations = getServicesAtLocations();

export const serviceList = () => {
    let serviceHTML = "<ol>"

    for (const serviceLocations of servicesAtLocations) {
        for (const service of services) {
            if (service.id === serviceLocations.serviceId) {
                for (const location of locations) {
                    if (location.id === serviceLocations.locationId) {
                        serviceHTML += `<li>${service.name}</li>`
                    }
                }
            }
        }
    }
    return serviceHTML
}


export const servicesOffered = () => {
    let serviceHTML = `<ol class="test-class">`

    for (const service of services) {
        serviceHTML += `<h4 id="service--${service.id}">${service.name}</h4>`
    }
    serviceHTML += "</ol>"
    return serviceHTML
}

document.addEventListener("click",(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("service")) {
        const [,serviceIdKey] = itemClicked.id.split("--")
        for (const service of services) {
            if (service.id === parseInt(serviceIdKey)) {
                for (const serviceLocations of servicesAtLocations) {
                    if (serviceLocations.serviceId === parseInt(serviceIdKey)) {
                        for (const location of locations) {
                            if (serviceLocations.locationId === location.id) {
                                window.alert(`${service.name} is available at ${location.name}`)
                            }
                        }
                    }
                }
            }
        }
    }
})