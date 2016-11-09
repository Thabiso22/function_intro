
function isFromBellville(Bellville) {
  registrationPlate = Bellville.startsWith('CY');
  return registrationPlate;
}
console.log(isFromBellville('CY123456789'));
