function onRouteGoClick() {
  $("#route").show();
  setTimeout(function(){advanceMiles("fa-arrow-circle-up", "2 miles", "fa-arrow-circle-right", "9 miles", "ISIL Stronghold")}, 5000);
  setTimeout(function(){advanceMiles("fa-arrow-circle-up", "1 mile", "fa-arrow-circle-right", "8 miles", "ISIL Stronghold")}, 10000);
}

function advanceMiles(milesDirection, milesAway, threatDirection, threatMilesAway, threatType) {
  console.log("Timeout started");
  console.log($("#miles-direction").attr("class").split(' '));
  $("#miles-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#miles-direction").addClass(milesDirection);
  $("#miles-away").text(milesAway);
  $("#threat-direction").removeClass("fa-arrow-circle-up fa-arrow-circle-down fa-arrow-circle-left fa-arrow-circle-right");
  $("#threat-direction").addClass(threatDirection);
  $("#threat-miles-away").text(threatMilesAway);
  $("#threat-type").text(threatType);
}
