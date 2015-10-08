'use strict';

// var house = {
// 	rooms: 7,
// 	sharedEntrance: false,
// 	lock: function() {},
// 	unlock: function() {}
// };

// console.log(house.rooms);
// console.log(house.sharedEntrance);

// house.lock();
// house.unlock();

// house.rooms = 8;

// house.floors = 4;

// console.log(house.rooms);
// console.log(house.floors);

// var apartment = {
// 	floors: 1,
// 	rooms: 4,
// 	sharedEntrance: true,
// 	lock: function() {},
// 	unlock: function() {}
// };

function Accommodation() {};
var house = new Accommodation();
var apartment = new Accommodation();
console.log(house.constructor === Accommodation);
console.log(apartment.constructor === Accommodation);
console.log(house instanceof Accommodation);
console.log(apartment instanceof Accommodation);
var trickApartment = new apartment.constructor();
console.log(trickApartment instanceof Accommodation);
console.log('JavaScript is a cool language that\'s not as cool as Swift right now, but maybe ECMAScript 6 will show it up a little?');

