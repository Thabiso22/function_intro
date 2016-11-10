function isFromCapeTown (CapeTown) {
var registrationPlate = CapeTown.endsWith('CA');
return registrationPlate;
}
console.log(isFromCapeTown('12345CA'));
