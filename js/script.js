function onRouteGoClick() {
  $("#route").show();
  console.log("Waiting for timeout");
  setTimeout(advanceMiles("fa-arrow-circle-up", 2, "fa-arrow-circle-right", 9, "ISIL Stronghold"), 5000);
  console.log("Timeout 1 finished");
  setTimeout(advanceMiles("fa-arrow-circle-up", 1, "fa-arrow-circle-right", 8, "ISIL Stronghold"), 10000);
  console.log("Timeout 2 finished");
}

function advanceMiles(milesDirection, milesAway, threatDirection, threatMilesAway, threatType) {
  alert("Test");
  $("#miles-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#miles-direction").addClass(milesDirection);
  $("#miles-away").val(milesAway);
  $("#threat-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#threat-direction").addClass(threatDirection);
  $("#threat-miles-away").val(threatMilesAway);
  $("#threat-type").val(threatType);
}
