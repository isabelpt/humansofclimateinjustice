//bahamas
var bahamasPin = $(".bahamas");
var bahamasInfo = $(".bahamasInfo");
bahamasPin.on("mouseover", displayInfo1);
bahamasPin.on("mouseout", displayInfo1);

function displayInfo1(event){
  event.preventDefault();
  bahamasInfo.toggleClass("hidden");
}

//bangladesh
var bangladeshPin = $(".bangladesh");
var bangladeshInfo = $(".bangladeshInfo");
bangladeshPin.on("mouseover", displayInfo2);
bangladeshPin.on("mouseout", displayInfo2);

function displayInfo2(event){
  event.preventDefault();
  bangladeshInfo.toggleClass("hidden");
}

//madagascar
var madagascarPin = $(".madagascar");
var madagascarInfo = $(".madagascarInfo");
madagascarPin.on("mouseover", displayInfo3);
madagascarPin.on("mouseout", displayInfo3);

function displayInfo3(event){
  event.preventDefault();
  madagascarInfo.toggleClass("hidden");
}

//japan
var japanPin = $(".japan");
var japanInfo = $(".japanInfo");
japanPin.on("mouseover", displayInfo4);
japanPin.on("mouseout", displayInfo4);

function displayInfo4(event){
  event.preventDefault();
  japanInfo.toggleClass("hidden");
}