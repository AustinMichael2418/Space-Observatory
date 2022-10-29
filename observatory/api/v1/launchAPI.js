function get(url) {
var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = this.responseText;

}
};
xhttp.open("GET", url, false);
xhttp.send(); 
return data;
}

var data = JSON.parse(get("https://launchlibrary.net/1.4/launch?limit=2000"));

function readLaunch(id) {
return data.launches[id];
}

function renderLaunches(renderFunction) {
for(i in data.launches) {
renderFunction(readLaunch(i));
}
}