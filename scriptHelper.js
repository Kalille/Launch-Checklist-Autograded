// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (isNaN(testInput)){
        return "Not a Number"
    }else if (testInput === ""){
        return "Empty"
    }else if (!isNaN(testInput)){
       return "Is a Number"
    }else 
    return testInput
 }
 function validator(pilot, copilot, fuelLevel, cargoMass){
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoMassValidation = validateInput(cargoMass);
    if (pilotValidation === "Empty"|| copilotValidation === "Empty"|| fuelLevelValidation === "Empty"|| cargoMassValidation === "Empty"){
        console.log(`${pilotValidation}`)
        alert("please fill in all boxes")
    }
    else if (fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number" ){
        console.log(fuelLevelValidation)
        alert("please enter a Number in the Fuel Level or Cargo Mass")
    }else if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number"){
        console.log(`"Is a Number" ${pilotValidation}`)
        alert("Pilot or Copilot is a number")
    } else
    console.log("data is good")
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    validator(pilot, copilot, fuelLevel, cargoMass)
    const fuelListItem = list.querySelector('#fuelStatus');
    const pilotStatusLi = list.querySelector('#pilotStatus');
    const copilotStatusLi = list.querySelector('#copilotStatus');
    const statusMessage = document.getElementById("launchStatus");
    const cargoStatusLi= list.querySelector('#cargoStatus');
    pilotStatusLi.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatusLi.textContent = `Co-pilot ${copilot} is ready for launch`
    // Check if any input field is empty or not a number
if (fuelLevel >= 10000 && cargoMass <= 10000) {
    statusMessage.textContent = "Shuttle is Ready for Launch";
    statusMessage.style.color = "green";
    fuelListItem.textContent = "Fuel level high enough for launch"; 
    cargoStatusLi.textContent = "Cargo mass low enough for launch";
    list.style.visibility = "visible";
} else {
    if (fuelLevel < 10000 && cargoMass > 10000) {
        statusMessage.textContent = "Shuttle Not Ready for Launch";
        statusMessage.style.color = "red";
        fuelListItem.textContent = "Fuel level too low for launch";
        cargoStatusLi.textContent = "Cargo mass too heavy for launch";
    } else if (fuelLevel < 10000) {
        statusMessage.textContent = "Shuttle Not Ready for Launch";
        statusMessage.style.color = "red";
        fuelListItem.textContent = "Fuel level too low for launch";
        cargoStatusLi.textContent = "Cargo mass low enough for launch";
    } else if (cargoMass > 10000) {
        statusMessage.textContent = "Shuttle Not Ready for Launch";
        statusMessage.style.color = "red";
        fuelListItem.textContent = "Fuel level high enough for launch"; 
        cargoStatusLi.textContent = "Cargo mass too heavy for launch";
    }
    list.style.visibility = "visible";
}
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch(`https://handlers.education.launchcode.org/static/planets.json`).then( function(response) {
        response.json() }).then(response => planetsReturned = response);
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;