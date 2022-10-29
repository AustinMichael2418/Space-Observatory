function writeOptions(arr) {
document.getElementById("searchby").innerHTML = "";
for(iterator in arr) {

var o = document.createElement("OPTION");
o.value = arr[iterator];
o.innerHTML = arr[iterator];
document.getElementById("searchby").appendChild(o);
}
}
var success_indicator = {
successful: true,
Successful: true,
unsuccessful: false,
Unsuccessful: false
};

var activity_indicator = {
Active: true,
active: true,
inactive: false,
Inactive: false
};

var options = {
capsule: ["Type","Id"],
core: ["Status","Id"],
launch: ["Upcoming","Past","Site","Rocket","Flight Number","Successful/Unsuccessful","Name"],
ship: ["Id","Activity","Home Port","Type"/*,"Status"*/,"Name"],
launch_pad: ["Id","Status","Name","State","Vehicles"],
landing_pad: ["Name","Id","Landing Type","Status","Location","State"]
};
writeOptions(options["capsule"]);
String.prototype.includes = function(str) {
return this.search(str) != -1;
}

function search() {
document.getElementById("results").innerHTML="";
var obj_type = document.getElementById("obj_type").value;
if(obj_type=="capsule") {
searchCapsules();
}
if(obj_type=="core") {
searchCores();
}
if(obj_type=="launch") {
searchLaunches();
}
if(obj_type=="ship") {
searchShips();
}
if(obj_type=="landing_pad") {
searchLandP();
}
if(obj_type=="launch_pad") {
searchLaunchP();
}
}
var cores_results;
var capsule_results;
var launch_results;
var ship_results;
var launchP_results;
var landP_results;
function searchCapsules() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
capsule_results = [];
for(iterator in info.capsules) {
if(searchby == "Id") {
if(info.capsules[iterator].capsule_serial.includes(s)) {
capsule_results.push(info.capsules[iterator]);
}} else {
if(info.capsules[iterator].type.includes(s)) {
capsule_results.push(info.capsules[iterator]);
}
}
}
readResultCapsules();
}

function searchCores() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
cores_results = [];
for(iterator in info.cores) {
if(searchby == "Id") {
if(info.cores[iterator].core_serial.includes(s)) {
cores_results.push(info.cores[iterator]);
}} else {
if(info.cores[iterator].status.includes(s)) {
cores_results.push(info.cores[iterator]);
}
}
}
readResultCores();
}

function searchLaunches() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
launch_results = [];
for(iterator in info.launches.all) {
if(searchby == "Upcoming") {
if(info.launches.all[iterator].upcoming) {
launch_results.push(info.launches.all[iterator]);

}} else if (searchby == "Past") {

if(!(info.launches.all[iterator].upcoming)) {
launch_results.push(info.launches.all[iterator]);
}
} else if (searchby == "Site") {

if(info.launches.all[iterator].launch_site.site_name_long.includes(s) || info.launches.all[iterator].launch_site.site_name.includes(s) || info.launches.all[iterator].launch_site.site_id.includes(s)) {
launch_results.push(info.launches.all[iterator]);
}
} else if (searchby == "Rocket") {

if(info.launches.all[iterator].rocket.rocket_name.includes(s)) {
launch_results.push(info.launches.all[iterator]);
}
} else if (searchby == "Flight Number") {

if(info.launches.all[iterator].flight_number==s) {
launch_results.push(info.launches.all[iterator]);
}
} else if (searchby == "Name") {

if(info.launches.all[iterator].mission_name.includes(s)) {
launch_results.push(info.launches.all[iterator]);
}
} else {

if(info.launches.all[iterator].launch_success==success_indicator[s]) {
launch_results.push(info.launches.all[iterator]);
}
}

}
readResultLaunches();
}

function searchShips() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
ship_results = [];
for(iterator in info.ships) {
if(searchby == "Id") {
if(info.ships[iterator].ship_id.includes(s)) {
ship_results.push(info.ships[iterator]);

}} else if (searchby == "Activity") {

if(info.ships[iterator].active == activity_indicator[s]) {
ship_results.push(info.ships[iterator]);
}
} else if (searchby == "Home Port") {

if(info.ships[iterator].home_port.includes(s)) {
ship_results.push(info.ships[iterator]);
}
} else if (searchby == "Type") {

if(info.ships[iterator].ship_type.includes(s)) {
ship_results.push(info.ships[iterator]);
}
} else if (searchby == "Status") {

if(info.ships[iterator].status.includes(s)) {
ship_results.push(info.ships[iterator]);
}
} else {

if(info.ships[iterator].ship_name.includes(s)) {
ship_results.push(info.ships[iterator]);
}
}

}
readResultShips();
}

function searchLandP() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
landP_results = [];
for(iterator in info.landing_pads) {
if(searchby == "Name") {
if(info.landing_pads[iterator].full_name.includes(s)) {
landP_results.push(info.landing_pads[iterator]);

}} else if (searchby == "Id") {

if(info.landing_pads[iterator].id.includes(s)) {
landP_results.push(info.landing_pads[iterator]);
}
} else if (searchby == "Landing Type") {

if(info.landing_pads[iterator].landing_type.includes(s)) {
landP_results.push(info.landing_pads[iterator]);
}
} else if (searchby == "Status") {

if(info.landing_pads[iterator].status.includes(s)) {
landP_results.push(info.landing_pads[iterator]);
}
} else if (searchby == "Location") {

if(info.landing_pads[iterator].location.name.includes(s)) {
landP_results.push(info.landing_pads[iterator]);
}
} else {

if(info.landing_pads[iterator].location.region.includes(s)) {
landP_results.push(info.landing_pads[iterator]);
}
}

}
readResLandP();
}

function searchLaunchP() {
var searchby = document.getElementById("searchby").value;

var s = document.getElementsByTagName("input")[0].value;
launchP_results = [];
for(iterator in info.launch_pads) {
if(searchby == "Name") {
if(info.launch_pads[iterator].site_name_long.includes(s)) {
launchP_results.push(info.launch_pads[iterator]);

}} else if (searchby == "Id") {

if(info.launch_pads[iterator].site_id.includes(s)) {
launchP_results.push(info.launch_pads[iterator]);
}
} else if (searchby == "Status") {

if(info.launch_pads[iterator].status.includes(s)) {
launchP_results.push(info.launch_pads[iterator]);
}
} else if (searchby == "Vehicles") {

if(info.launch_pads[iterator].vehicles_launched.join().includes(s)) {
launchP_results.push(info.launch_pads[iterator]);
}
} else {

if(info.launch_pads[iterator].location.region.includes(s)) {
launchP_results.push(info.launch_pads[iterator]);
}
}

}
readResLaunchP();
}

function readResultCapsules() {
for(x in capsule_results) {
// Create capsule container
var d = document.createElement("DIV");
d.setAttribute("id",capsule_results[x].capsule_serial);
document.getElementById("results").appendChild(d);
// Create capsule title
var h = document.createElement("h1");
h.innerHTML = capsule_results[x].capsule_serial+" - "+capsule_results[x].type;
document.getElementById(capsule_results[x].capsule_serial).appendChild(h);
// Create status indicator
var status = document.createElement("p");
status.setAttribute("class","status");
status.innerHTML = "Status: "+capsule_results[x].status;
document.getElementById(capsule_results[x].capsule_serial).appendChild(status);
// Create stats
var stats = document.createElement("p");
status.setAttribute("class","stats");
status.innerHTML = "Landings: "+capsule_results[x].landings+" Times Reused: "+capsule_results[x].reuse_count;
if(capsule_results[x].original_launch != null) {
status.innerHTML += " Original Launch Date: "+capsule_results[x].original_launch;
}
document.getElementById(capsule_results[x].capsule_serial).appendChild(stats);
if(capsule_results[x].details != null) {
// Create details
var det = document.createElement("p");
det.setAttribute("class","det");
det.innerHTML = "Details: "+capsule_results[x].details;
document.getElementById(capsule_results[x].capsule_serial).appendChild(det);
}
// Create missions container
var m = document.createElement("DIV");
m.setAttribute("id",capsule_results[x].capsule_serial+"_missions");
document.getElementById(capsule_results[x].capsule_serial).appendChild(m);
// Create missions header
var mh = document.createElement("h3");
mh.innerHTML = "Missions Used";
document.getElementById(capsule_results[x].capsule_serial+"_missions").appendChild(mh);
// Render Mission Data
for(y in capsule_results[x].missions) {
renderMissionData(capsule_results[x].missions[y].flight-1,capsule_results[x].capsule_serial+"_missions","h4");
}
}
}

function readResultCores() {
var cores = cores_results;
for(j in cores) {
var core_container = document.createElement("DIV");
core_container.innerHTML = get("core_res_format.xml").replace(/{{j}}/gi,j);
document.getElementById("results").appendChild(core_container);
document.getElementById("res_core_name"+j).innerHTML = cores[j].core_serial;

document.getElementById("res_core_details"+j).innerHTML = cores[j].details;
document.getElementById("res_core_original"+j).innerHTML = cores[j].original_launch;
document.getElementById("res_core_status"+j).innerHTML = cores[j].status;
document.getElementById("res_core_rtls_a"+j).innerHTML = cores[j].rtls_attempts;
document.getElementById("res_core_rtls"+j).innerHTML = cores[j].rtls_landings;

document.getElementById("res_core_asds_a"+j).innerHTML = cores[j].asds_attempts;
document.getElementById("res_core_asds"+j).innerHTML = cores[j].asds_landings;
var cmc = document.createElement("DIV");
cmc.setAttribute("id","res_"+j+"_missions");
document.getElementById("results").appendChild(cmc);
for(y in cores[j].missions) {
renderMissionData(cores[j].missions[y].flight-1,"res_"+j+"_missions","h4");
}

}

}

function readResultLaunches() {
var uc_h = document.createElement("h1");
uc_h.innerHTML = "Results:";
document.getElementById("results").appendChild(uc_h);
for(i in launch_results) {
renderMissionData(launch_results[i].flight_number-1,"results","h2");
}

}

function readResultShips() {
for(j in ship_results) {
document.getElementById("results").innerHTML+=readFormatFile("ships_res_format.xml");
//readMissionsUsed(info.ships[j].missions,"ship"+j);
}
}

function readResLandP() {
for(j in landP_results) {
document.getElementById("results").innerHTML+=readFormatFile("landing_pad_res_format.xml");
}
}

function readResLaunchP() {
for(j in launchP_results) {
document.getElementById("results").innerHTML+=readFormatFile("launch_pad_res_format.xml");
}
}

document.getElementById("obj_type").addEventListener("change",function(){
writeOptions(options[document.getElementById("obj_type").value]);
})
document.getElementById("submit").addEventListener("click",search);


