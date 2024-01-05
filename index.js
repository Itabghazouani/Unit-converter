/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const unitEl = document.getElementById("unit-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function multiplication(unit, multiplicator) {
  return (unit * multiplicator).toFixed(3)
}
function division(unit, dividor) {
  return (unit * dividor).toFixed(3)
}

function conversion(type) {
  convertBtn.addEventListener("click", function() {
    const result = unitEl.value
    if (type === "length") {
      lengthEl.innerText = `${result} meters = ${multiplication(result, 3.281)} feet | ${result} feet = ${division(result, 3.28)} meters`
    } else if (type === "volume") {
      volumeEl.innerText = `${result} liters = ${multiplication(result, 0.264)} gallons | ${result} gallons = ${division(result, 0.264)} liters`
    } else if (type === "mass") {
      massEl.innerText = `${result} kilos = ${multiplication(result, 44.092)} pounds | ${result} pounds = ${division(result, 44.092)} kilos`
    }
  })
}

conversion("length")
conversion("volume")
conversion("mass")
