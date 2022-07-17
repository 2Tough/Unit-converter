// Master value
let masterEl = document.getElementById("master-id")  

// Imperial values
let gallonsEl = document.getElementById("gallon-id")
let poundsEl = document.getElementById("pound-id")
let feetEl = document.getElementById("feet-id")
// IS values

let meterEl = document.getElementById("meter-id")
let literEl = document.getElementById("liter-id")
let kiloEl = document.getElementById("kilogramm-id")

function toFeetEl() {
    let feet = document.getElementById("master-id").value * 3.28084
    //console.log(Math.round((num + Number.EPSILON) * 100) / 100)
    // let num = numberEl * 3.28084
  meterEl.textContent = "Meter: " + document.getElementById("master-id").value
  feetEl.textContent = "Feet: " + (Math.round((feet + Number.EPSILON) * 1000) / 1000)
  
  
}

function toGallonsEl() {
    let gallons = document.getElementById("master-id").value * 0.264172
    literEl.textContent = "Liters: " + document.getElementById("master-id").value
    gallonsEl.textContent = "Gallons: " + (Math.round((gallons + Number.EPSILON) * 1000) / 1000)
    
}

function toPoundsEl() {
    let pounds = document.getElementById("master-id").value * 2.2
    kiloEl.textContent = "Kilogramms: " + document.getElementById("master-id").value
    poundsEl.textContent = "Pounds: " + (Math.round((pounds + Number.EPSILON) * 1000) / 1000) 
}
