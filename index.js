// Code your solution in this file
function findMatching (drivers, name){
  console.log("drivers="+JSON.stringify(drivers)+" name="+name);
  return drivers.filter (function (driver) { console.log("filter "+JSON.stringify(driver)); return driver.name === name; });
}
