function isFromGauteng (registration)   {
var registrationNumber = registration.endsWith("GP");
return registrationNumber;

}
console.log (isFromGauteng("DR 122 TY GP"));
