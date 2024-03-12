// Write your JavaScript code here!

window.addEventListener("load", function() {
   
    console.log("loaded")

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
 
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    const button = document.querySelector('#formSubmit')

  button.addEventListener("click", (e)=>{
    e.preventDefault();
    const pilot = document.getElementById("pilotName").value;
const copilot = document.querySelector('input[name="copilotName"]').value;
const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
const cargoMass = document.querySelector('input[name="cargoMass"]').value;
const list = document.getElementById('faultyItems')
    formSubmission(document,list, pilot, copilot, fuelLevel, cargoMass)
         console.log("clink")
  })
 });