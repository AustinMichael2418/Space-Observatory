function getData() {
var d = new Object();
d.capsules = require("https://api.spacexdata.com/v3/capsules");
d.cores = require("https://api.spacexdata.com/v3/cores");
d.dragons = require("https://api.spacexdata.com/v3/dragons");
d.history = require("https://api.spacexdata.com/v3/history");
d.info = new Object();
d.info.api = require("https://api.spacexdata.com/v3");
d.info.info = require("https://api.spacexdata.com/v3/info");
d.landing_pads = require("https://api.spacexdata.com/v3/landpads");
d.launches = new Object();
d.launches.all = require("https://api.spacexdata.com/v3/launches");
d.launches.upcoming = require("https://api.spacexdata.com/v3/launches/upcoming");
d.launches.next = require("https://api.spacexdata.com/v3/launches/next");
d.launches.latest = require("https://api.spacexdata.com/v3/launches/latest");
d.launch_pads = require("https://api.spacexdata.com/v3/launchpads");
d.missions = require("https://api.spacexdata.com/v3/missions");
d.payloads = require("https://api.spacexdata.com/v3/payloads");
d.rockets = require("https://api.spacexdata.com/v3/rockets");
d.roadster = require("https://api.spacexdata.com/v3/roadster");
d.ships = require("https://api.spacexdata.com/v3/ships");
return d;
}

function require(url) {
try {
var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = JSON.parse(this.responseText);

}
};
xhttp.open("GET", url, false);
xhttp.send(); 
return data;
} catch {
var urla = document.createElement('a');
urla.href = location.href;
urla.port = 8080;
urla.pathname = "/api/"+url;
console.log(urla.href);

var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = JSON.parse(this.responseText);

}
};
xhttp.open("GET", urla.href, false);
xhttp.send(); 
return data;


}
}