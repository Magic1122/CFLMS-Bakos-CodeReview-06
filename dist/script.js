"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var randomDate = function (start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.getTime();
};
var locationArray = [];
var filter = 'byName';
var LocationClass = (function () {
    function LocationClass(name, city, zipCode, address, img) {
        this.createdAt = randomDate(new Date(2012, 0, 1), new Date());
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        this.html = this.display();
        locationArray.push(this);
    }
    LocationClass.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-sm-6 col-md-4 col-lg-3\">\n                    <div class=\"card mb-4 bg-dark text-white\"> \n                        <img src=" + this.img + " class=\"card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <a href=\"#\" class=\"btn btn-warning\">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return LocationClass;
}());
var Restaurant = (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, address, img, type, phoneNumber, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.type = type;
        _this.phoneNumber = phoneNumber;
        _this.webAddress = webAddress;
        _this.html = _this.display();
        return _this;
    }
    Restaurant.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-sm-6 col-md-4 col-lg-3\">\n                    <div class=\"card mb-4 bg-dark text-white\"> \n                        <img src=" + this.img + " class=\"card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <p class=\"card-text\">" + this.type + "</p>\n                            <p class=\"card-text\">" + this.phoneNumber + "</p>\n                            <p><a href=" + this.webAddress + ">" + this.webAddress + "</a></p>\n                            <a href=\"#\" class=\"btn btn-warning\">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return Restaurant;
}(LocationClass));
var Events = (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, img, eventDate, eventTime, price, webAddress) {
        var _this = _super.call(this, name, city, zipCode, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.webAddress = webAddress;
        _this.html = _this.display();
        return _this;
    }
    Events.prototype.display = function () {
        var time = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
        return "<div class=\"col-sm-6 col-md-4 col-lg-3\">\n                    <div class=\"card mb-4 bg-dark text-white\"> \n                        <img src=" + this.img + " class=\"card-img-top img-same\" alt=\"...\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + this.name + "</h5>\n                            <p class=\"card-text\">" + this.address + "</p>\n                            <p class=\"card-text\">" + this.zipCode + " " + this.city + "</p>\n                            <p class=\"card-text\">" + this.eventDate + " " + this.eventTime + "</p>\n                            <p class=\"card-text\">" + this.price + " \u20AC</p>\n                            <p><a href=" + this.webAddress + ">" + this.webAddress + "</a></p>\n                            <a href=\"#\" class=\"btn btn-warning\">Show</a>\n                        </div>\n                        <div class=\"card-footer text-muted font-italic\">\n                            " + time + "\n                        </div>\n                    </div>\n                </div>";
    };
    return Events;
}(LocationClass));
var location1 = new LocationClass('St. Charles Church', 'Vienna', '1010', 'Karlsplatz 1', 'img/stcharles.jpg');
var location2 = new LocationClass('Schönbrunn Park', 'Vienna', '1130', 'Maxingstraße 13b', '/img/schonbrunn.png');
var location3 = new LocationClass('Rathausplatz', 'Vienna', '1010', 'Rathausplatz', '/img/rathaus.jpg');
var location4 = new LocationClass('Volksgarten', 'Vienna', '1010', 'Volksgarten', '/img/volksgarten.jpg');
console.log(locationArray[0]);
var restaurant1 = new Restaurant('ON Restaurant', 'Vienna', '1050', 'Wehrgasse 8', '/img/on.jpg', 'Chinese', '+43(1)5854900', 'http://www.restaurant-on.at/');
var restaurant2 = new Restaurant('BioFrische', 'Vienna', '1150', 'Stutterheimstraße 6', '/img/biofrische.jpeg', 'Indian', '+43(1) 9529215', 'biofrische.wien');
var restaurant3 = new Restaurant('Beaver Brewing Company', 'Vienna', '1090', 'Liechtensteinstraße 69', '/img/beawer.jpg', 'International', '+43(677) 61012253', 'https://www.beaverbrewing.at/');
var restaurant4 = new Restaurant('Regina Margherita', 'Vienna', '1010', 'Liechtensteinstraße 69', '/img/reggina.jpg', 'Italian', '+43(01) 5330812', 'https://www.barbaro.at/reginamargherita');
var event1 = new Events('Cats - the musical', 'Vienna', '1010', 'Ronacher Theater, Seilerstätte 9', 'img/cats.jpg', 'Fr., 15.12.2020', '20:00', 120, 'http://catsmusical.at');
var event2 = new Events('Guns ‘n Roses', 'Vienna', '1020', 'Ernst-Happel Stadion, Meiereistraße 7', 'img/guns.jpg', 'Sat, 09.06.2020', '19:30', 95.50, 'www.gunsandroses.com/');
var event3 = new Events('VIECC Vienna Comic Con 2020', 'Vienna', '1021', 'Messe Wien, Messeplatz 1', 'img/comic.jpg', 'Sat, 21.11.2020', '11:00', 55.50, 'https://www.viecc.com/');
var event4 = new Events('ERSTE Bank Open 500', 'Vienna', '1150', 'Wiener Stadthalle, Roland-Rainer-Platz 1,', 'img/ersteopen.jpg', 'Fri, 30.10.2020', '11:00', 85.50, 'https://www.erstebank-open.com/');
console.log('LOCATION ARRAY', locationArray);
console.log(locationArray[0] instanceof LocationClass);
var appendHTMLToDOM = function (locations) {
    locations.map(function (location) {
        if (location instanceof Events) {
            $('.events').append(location.html);
        }
        else if (location instanceof Restaurant) {
            $('.restaurants').append(location.html);
        }
        else if (location instanceof LocationClass) {
            $('.places').append(location.html);
        }
    });
};
appendHTMLToDOM(locationArray);
//# sourceMappingURL=script.js.map