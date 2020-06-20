// Initializing our filter value

let filter = 'byName'

// Function which creates a random timestamp - we will use this later to generate a random createdAt value in our Classes

const randomDate = (start: Date, end: Date) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.getTime()
}

// Creating a custom type for locations array

type LocationType = {
    name: string
    city: string
    zipCode: string
    address: string
    img: string
    html: string
    createdAt: number
    type?: string
    phoneNumber?: string
    webAddress?: string
    eventDate?: string
    eventTime?: string
    price?: number
}

// initializing an empty array which we will use later to push our objects

const locationArray: LocationType[] = []

// Creating our base Location Class

class LocationClass {
    name: string
    city: string
    zipCode: string
    address: string
    img: string
    html: string
    createdAt: number = randomDate(new Date(2012, 0, 1), new Date())
    constructor(name: string, city: string, zipCode: string, address: string, img: string) {
        this.name = name
        this.city = city
        this.zipCode = zipCode
        this.address = address
        this.img = img
        this.html = this.display()

        locationArray.push(this)
    }

    display(): string {
        // We are using moment js library to have an easy way for formatting our timestamp
        const time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a')
        return `<div class="col-12 col-md-6 col-lg-3">
                    <div class="card mb-4 bg-dark text-white"> 
                        <img src=${this.img} class="d-none d-md-inline-block d-none d-md-inline-block card-img-top img-same" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.address}</p>
                            <p class="card-text">${this.zipCode} ${this.city}</p>
                            <a class="btn btn-warning show-modal-button" data-toggle="modal" data-target="#modal" data-pic=${this.img}>Show</a>
                        </div>
                        <div class="card-footer text-muted font-italic">
                            ${time}
                        </div>
                    </div>
                </div>`
    }
}

// Creating our Restaurant Class

class Restaurant extends LocationClass {
    type: string
    phoneNumber: string
    webAddress: string

    constructor(name: string, city: string, zipCode: string, address: string, img: string, type: string, phoneNumber: string, webAddress: string) {
        super(name, city, zipCode, address, img)
        this.type = type
        this.phoneNumber = phoneNumber
        this.webAddress = webAddress
        this.html = this.display()
    }

    display(): string {
        const time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a')

        return `<div class="col-12 col-md-6 col-lg-3">
                    <div class="card mb-4 bg-dark text-white"> 
                        <img src=${this.img} class="d-none d-md-inline-block card-img-top img-same" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.address}</p>
                            <p class="card-text">${this.zipCode} ${this.city}</p>
                            <p class="card-text">${this.type}</p>
                            <p class="card-text">${this.phoneNumber}</p>
                            <p><a href=${this.webAddress}>${this.webAddress}</a></p>
                            <a class="btn btn-warning show-modal-button" data-toggle="modal" data-target="#modal" data-pic=${this.img}>Show</a>
                        </div>
                        <div class="card-footer text-muted font-italic">
                            ${time}
                        </div>
                    </div>
                </div>`
    }
}

// Creating our Events Class

class Events extends LocationClass {
    eventDate: string
    eventTime: string
    price: number
    webAddress: string

    constructor(name: string, city: string, zipCode: string, address: string, img: string, eventDate: string, eventTime: string, price: number, webAddress: string) {
        super(name, city, zipCode, address, img)
        this.eventDate = eventDate
        this.eventTime = eventTime
        this.price = price
        this.webAddress = webAddress
        this.html = this.display()
    }

    display(): string {

        const time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a')

        return `<div class="col-12 col-md-6 col-lg-3">
                    <div class="card mb-4 bg-dark text-white"> 
                        <img src=${this.img} class="d-none d-md-inline-block card-img-top img-same" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.address}</p>
                            <p class="card-text">${this.zipCode} ${this.city}</p>
                            <p class="card-text">${this.eventDate} ${this.eventTime}</p>
                            <p class="card-text">${this.price} €</p>
                            <p><a href=${this.webAddress}>${this.webAddress}</a></p>
                            <a class="btn btn-warning show-modal-button" data-toggle="modal" data-target="#modal" data-pic=${this.img}>Show</a>
                        </div>
                        <div class="card-footer text-muted font-italic">
                            ${time}
                        </div>
                    </div>
                </div>`
    }
}


// Creating our Location instances

const location1 = new LocationClass(
    'St. Charles Church', 
    'Vienna', '1010', 'Karlsplatz 1', 
    'img/stcharles.jpg'
    )
const location2 = new LocationClass(
    'Schönbrunn Park', 
    'Vienna', 
    '1130', 
    'Maxingstraße 13b', 
    '/img/schonbrunn.png'
    )
const location3 = new LocationClass(
    'Rathausplatz', 
    'Vienna', '1010', 
    'Rathausplatz', 
    '/img/rathaus.jpg'
    )
const location4 = new LocationClass(
    'Volksgarten', 
    'Vienna', '1010', 
    'Volksgarten', 
    '/img/volksgarten.jpg'
    )

// Creating our Restaurant instances

const restaurant1 = new Restaurant(
    'ON Restaurant', 
    'Vienna', '1050', 
    'Wehrgasse 8', 
    '/img/on.jpg', 
    'Chinese', 
    '+43(1)5854900', 
    'http://www.restaurant-on.at/'
    )
const restaurant2 = new Restaurant(
    'BioFrische', 
    'Vienna', 
    '1150', 
    'Stutterheimstraße 6', 
    '/img/biofrische.jpeg', 
    'Indian', 
    '+43(1) 9529215', 
    'biofrische.wien'
    )
const restaurant3 = new Restaurant(
    'Beaver Brewing Company', 
    'Vienna', 
    '1090', 
    'Liechtensteinstraße 69', 
    '/img/beawer.jpg', 
    'International', 
    '+43(677) 61012253', 
    'https://www.beaverbrewing.at/'
    )
const restaurant4 = new Restaurant(
    'Regina Margherita', 
    'Vienna', 
    '1010', 
    'Liechtensteinstraße 69', 
    '/img/reggina.jpg', 
    'Italian', 
    '+43(01) 5330812', 
    'https://www.barbaro.at/reginamargherita'
    )

// Creating our Events instances

const event1 = new Events(
    'Cats - the musical', 
    'Vienna', 
    '1010', 
    'Ronacher Theater, Seilerstätte 9', 
    'img/cats.jpg', 
    'Fr., 15.12.2020', 
    '20:00', 
    120, 
    'http://catsmusical.at'
    )
const event2 = new Events(
    'Guns ‘n Roses', 
    'Vienna', 
    '1020', 
    'Ernst-Happel Stadion, Meiereistraße 7', 
    'img/guns.jpg', 
    'Sat, 09.06.2020', 
    '19:30', 
    95.50, 
    'www.gunsandroses.com/')
const event3 = new Events(
    'VIECC Vienna Comic Con 2020', 
    'Vienna', 
    '1021', 
    'Messe Wien, Messeplatz 1', 
    'img/comic.jpg', 
    'Sat, 21.11.2020', 
    '11:00', 
    55.50, 
    'https://www.viecc.com/')
const event4 = new Events(
    'ERSTE Bank Open 500', 
    'Vienna', 
    '1150', 
    'Wiener Stadthalle, Roland-Rainer-Platz 1,', 
    'img/ersteopen.jpg', 
    'Fri, 30.10.2020', 
    '11:00', 
    85.50, 
    'https://www.erstebank-open.com/')


// appandHTMLToDOM is a function which takes an array as an argument loops through it and generates our HTML to the DOM to show it

const appendHTMLToDOM = (locations: LocationType[]): void => {
    $('.events').html('')
    $('.restaurants').html('')
    $('.places').html('')
    locations.map((location: object) => {
        if (location instanceof Events) {
            $('.events').append(location.html)
        } else if (location instanceof Restaurant) {
            $('.restaurants').append(location.html)
        } else if (location instanceof LocationClass) {
            $('.places').append(location.html)
        }
    })
}

// here we call our appendHTMLToDOM

appendHTMLToDOM(locationArray)

// sort is our function which calls sortLocations with the data provided to sort our locationsArray and after it generates the HTML to the DOM with the help of appendHTMLtoDOM function, the trigger of the sort function is the dropdown menu in the header navigation

const sort = (sortBy: string) => {
    sortLocations(locationArray, sortBy)
    appendHTMLToDOM(locationArray)
}

// sortLocations takes the locations array and the sortBy parameter which is a string what represents our sorting type, the function will then decide how do we want to sort and sorts the array

const sortLocations = (locations: any[], sortBy: string) => {
    if (sortBy === 'byName') {
        return locations.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            }
            return 0;
        })
    } else if (sortBy === 'descending') {
        return locations.sort((a, b) => b.createdAt - a.createdAt)
    } else if (sortBy === 'ascending') {
        return locations.sort((a, b) => a.createdAt - b.createdAt)
    }
    else {
        return locations
    }
}

// Adds event listeners to the Show buttons to show the modal

$('.show-modal-button').on('click', (e) => {
    const pictureSource = e.target.dataset.pic
    $('.modal-body').html('')
    $('.modal-body').append(`<img src=${pictureSource} id="modal" class="card-img-top img-same" alt="picutre of the clikced element">`)
})

