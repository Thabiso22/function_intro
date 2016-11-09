function isFromCapeTown (CapeTown) {
var registrationPlate = CapeTown.endsWith('CY');
return registrationPlate;
}
console.log(isFromCapeTown('12345CY'));
