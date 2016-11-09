function isFromCapeTown (CapeTown) {
var registrationPlate = CapeTown.endsWith("CY");
return registrationPlate;
}
console.log(registrationPlate ("12345CY"));
