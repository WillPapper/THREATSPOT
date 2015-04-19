function onRouteGoClick() {
  $("#route").show();
  setTimeout(function(){advanceMiles("fa-arrow-circle-up", 2, "fa-arrow-circle-right", 9, "ISIL Stronghold")}, 5000);
  setTimeout(function(){advanceMiles("fa-arrow-circle-up", 1, "fa-arrow-circle-right", 8, "ISIL Stronghold")}, 10000);
}

function advanceMiles(milesDirection, milesAway, threatDirection, threatMilesAway, threatType) {
  console.log("Timeout started");
  $("#miles-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#miles-direction").addClass(milesDirection);
  $("#miles-away").val(milesAway);
  $("#threat-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#threat-direction").addClass(threatDirection);
  $("#threat-miles-away").val(threatMilesAway);
  $("#threat-type").val(threatType);
}
