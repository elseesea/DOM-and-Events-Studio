// Write your JavaScript code here.
// Remember to pay attention to page loading!
let btnTakeOff = null;
let btnLanding = null;
let bntMissionAbort = null;
let pFlightStatus = null;
let bkgShuttle = null;
let shuttleHeight = null;

function init () {
    btnTakeOff = document.getElementById("takeoff");
    btnLanding = document.getElementById("landing");
    btnMissionAbort = document.getElementById("missionAbort");
    pFlightStatus = document.getElementById("flightStatus");
    bkgShuttle = document.getElementById("shuttleBackground");
	shuttleHeight = document.getElementById("spaceShuttleHeight");
/*
 * Take off
 */

    btnTakeOff.addEventListener("click", function (event) {
        let confirmTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirmTakeOff) {
			pFlightStatus.innerHTML = "Shuttle in flight";
			bkgShuttle.style.backgroundColor = "blue";
			shuttleHeight.innerHTML = "10000";
		};
    });

/*
 * Landing
 */
 
    btnLanding.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged");
		pFlightStatus.innerHTML = "The shuttle has landed";
		document.getElementById("shuttleBackground").style.backgroundColor = "green";
		document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

/*
 * Abort mission
 * 
 * 
 */
    btnMissionAbort.addEventListener("click", function (event) {
        let confirmMissionAbort = window.confirm("Confirm that you want to abort the mission");
        if (confirmMissionAbort) {
			pFlightStatus.innerHTML = "Shuttle in flight";
			bkgShuttle.style.backgroundColor = "blue";
			shuttleHeight.innerHTML = "10000";
		};
    });
 
    /*
    3. When the user clicks the "Abort Mission" button, make a confirmation window that says "Are you sure you want to abort the mission?".
    */

    missionAbort.addEventListener("click", function (event) {
      window.confirm("Are you sure you want to abort the mission?");
    });
}

window.onload = init;
