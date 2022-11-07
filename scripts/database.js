const database = {
    locations: [{
        id: 1,
        name: "Lodge"
    },{
        id: 2,
        name: "Lost Wolf Hiking Trail"
    },{
        id: 3,
        name: "Chamfort River"
    },{
        id: 4,
        name: "Gander River"
    },{
        id: 5,
        name: "Campgrounds"
    },{
        id: 6,
        name: "Pine Bluffs Trails"
    }],
    services: [{
        id: 1,
        name: "Canoeing"
    },{
        id: 2,
        name: "Fishing"
    },{
        id: 3,
        name: "Hiking"
    },{
        id: 4,
        name: "Information"
    },{
        id: 5,
        name: "Lodging"
    },{
        id: 6,
        name: "Parking"
    },{
        id: 7,
        name: "Picnicking"
    },{
        id: 8,
        name: "Rafting"
    },{
        id: 9,
        name: "Rock Climbing"
    },{
        id: 10,
        name: "Zip Lines"
    }],
    guests: [{
        id: 1,
        name: "Neil Peart",
        locationId: 6
    },{
        id: 2,
        name: "Geddy Lee",
        locationId: 1
    },{
        id: 3,
        name: "Alex Lifeson",
        locationId: 5
    },{
        id: 4,
        name: "Matt Gartska",
        locationId: 2
    },{
        id: 5,
        name: "Tosin Abasi",
        locationId: 4
    },{
        id: 6,
        name: "Javier Reyes",
        locationId: 3
    },{
        id: 7,
        name: "Dean Ween",
        locationId: 3
    },{
        id: 8,
        name: "Gene Ween",
        locationId: 4
    },{
        id: 9,
        name: "Frank Zappa",
        locationId: 2
    },{
        id: 10,
        name: "Terry Bozzio",
        locationId: 5
    },{
        id: 11,
        name: "Roger Waters",
        locationId: 1       
    },{
        id: 12,
        name: "David Gilmour",
        locationId: 6
    }],
    servicesAtLocations: [
        { id: 1, serviceId: 1, locationId: 1 },
        { id: 2, serviceId: 2, locationId: 1 },
        { id: 3, serviceId: 2, locationId: 4 },
        { id: 4, serviceId: 3, locationId: 2 },
        { id: 5, serviceId: 3, locationId: 4 },
        { id: 6, serviceId: 3, locationId: 6 },
        { id: 7, serviceId: 4, locationId: 3 },
        { id: 8, serviceId: 4, locationId: 5 },
        { id: 9, serviceId: 5, locationId: 3 },
        { id: 10, serviceId: 5, locationId: 5 },
        { id: 11, serviceId: 6, locationId: 3 },
        { id: 12, serviceId: 6, locationId: 5 },
        { id: 13, serviceId: 7, locationId: 2 },
        { id: 14, serviceId: 7, locationId: 3 },
        { id: 15, serviceId: 7, locationId: 6 },
        { id: 16, serviceId: 8, locationId: 1 },
        { id: 17, serviceId: 9, locationId: 2 },
        { id: 18, serviceId: 10, locationId: 6 }
    ],
    guestsAtLocations : [
        { id: 1, locationId: 1, guestId: 2 },
        { id: 2, locationId: 1, guestId: 11 },
        { id: 3, locationId: 2, guestId: 4 },
        { id: 4, locationId: 2, guestId: 9 },
        { id: 5, locationId: 3, guestId: 6 },
        { id: 6, locationId: 3, guestId: 7 },
        { id: 7, locationId: 4, guestId: 5 },
        { id: 8, locationId: 4, guestId: 8 },
        { id: 9, locationId: 5, guestId: 3 },
        { id: 10, locationId: 5, guestId: 10 },
        { id: 11, locationId: 6, guestId: 1 },
        { id: 12, locationId: 6, guestId: 12 }
    ]
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuest = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServicesAtLocations = () => {
    return database.servicesAtLocations.map(serviceLocations => ({...serviceLocations}))
}

export const getGuestsAtLocations = () => {
    return database.guestsAtLocations.map(guestLocations => ({...guestLocations}))
}