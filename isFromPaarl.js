
function isFromPaarl(Paarl) {
  registrationPlate = Paarl.startsWith('CJ');
  return registrationPlate;
}
console.log(isFromPaarl('CJ 2255'));
