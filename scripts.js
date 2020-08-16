// Write your JavaScript code here.
// Remember to pay attention to page loading!
let btnTakeOff = null;
let btnLanding = null;
let bntMissionAbort = null;
let pFlightStatus = null;
let bkgShuttle = null;
let shuttleHeight = null;
let imgRocket = null;
let btnDown = null;
let btnUp = null;
let btnLeft = null;
let btnRight = null;

function init () {
    btnTakeOff = document.getElementById("takeoff");
    btnLanding = document.getElementById("landing");
    btnMissionAbort = document.getElementById("missionAbort");
    pFlightStatus = document.getElementById("flightStatus");
    bkgShuttle = document.getElementById("shuttleBackground");
	shuttleHeight = document.getElementById("spaceShuttleHeight");
	btnDown = document.getElementById("down");
	btnUp = document.getElementById("up");
	btnLeft = document.getElementById("left");
	btnRight = document.getElementById("right");
	imgRocket = document.getElementById('rocket')
	imgRocket.style.position = 'relative';
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
			pFlightStatus.innerHTML = "Mission aborted";
			bkgShuttle.style.backgroundColor = "green";
			shuttleHeight.innerHTML = "0";
		};
    });

function getX() {
	return (imgRocket.offsetLeft);
}

function getY() {
	return (imgRocket.offsetTop);
}

/*
 * Move down
 */
	btnDown.addEventListener("click", function (event) {
		let imgY = getY();
		imgRocket.style.top = imgY + 10 + 'px';
	});
 
/*
 * Move up
 */
	btnUp.addEventListener("click", function (event) {
		let imgY = parseInt(getY());
		imgY = imgY - 10;
		imgRocket.style.top = imgY + 'px';
	});
 
/*
 * Move left
 */
	btnLeft.addEventListener("click", function (event) {
		let imgX = parseInt(getX());
		imgX -= 10;
		imgRocket.style.left = imgX + 'px';
	});
 
/*
 * Move right
 */
	btnRight.addEventListener("click", function (event) {
		let imgX = getX();
console.log('imgX = ' + imgX);
let newLoc = imgX + 10;
console.log('newLoc = ' + newLoc);
		imgRocket.style.left = newLoc;
	});
 
}

window.onload = init;
