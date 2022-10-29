window.key = "KHAukPpfnhIygAQZUgAVQUZm6ZO5fTNVcGfm1KRg";
function get(url,params) {
var data;
var _url = url;
for(i in params) {
_url=_url.replace(i,params[i]);
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = this.responseText;

}
};
xhttp.open("GET", _url.replace("API_KEY",window.key), false);
xhttp.send(); 
return data;
}

// Not all APIs added, see https://api.nasa.gov/ for more endpoints
var endpoints = {
NASA_API: {
APOD: "https://api.nasa.gov/planetary/apod?api_key=API_KEY",
NeoWs: {
feed: "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY",
lookup: "https://api.nasa.gov/neo/rest/v1/neo/ID?api_key=API_KEY",
browse: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=API_KEY"
},
DONKI:{
CME:"https://api.nasa.gov/DONKI/CME?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
CMEAnalysis:"https://api.nasa.gov/DONKI/CMEAnalysis?startDate=START_DATE&endDate=END_DATE&mostAccurateOnly=MOSTACCURATEONLY&speed=SPEED&halfAngle=HALFANGLE&catalog=CATALOG&api_key=API_KEY",
GST:"https://api.nasa.gov/DONKI/GST?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
IPS:"https://api.nasa.gov/DONKI/IPS?startDate=START_DATE&endDate=END_DATE&location=LOCATION&catalog=CATALOG&api_key=API_KEY",
FLR:"https://api.nasa.gov/DONKI/FLR?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
SEP:"https://api.nasa.gov/DONKI/SEP?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
MPC:"https://api.nasa.gov/DONKI/MPC?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
RBE:"https://api.nasa.gov/DONKI/RBE?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
HSS:"https://api.nasa.gov/DONKI/HSS?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
WSAplusES:"https://api.nasa.gov/DONKI/WSAEnlilSimulations?startDate=START_DATE&endDate=END_DATE&api_key=API_KEY",
Notifications:"https://api.nasa.gov/DONKI/notifications?startDate=START_DATE&endDate=END_DATE&type=TYPE&api_key=API_KEY"
},
Earth: "https://api.nasa.gov/planetary/earth/imagery?lat=LAT&lon=LON&dim=DIM&date=DATE&cloud_score=CLOUD_SCORE&api_key=API_KEY",
EONET:null,
EPIC:null,
Exoplanet:null,
GeneLab:null,
Insight:null,
Mars_Rover_Photos:{
Photo:{
By_Earth:{
All_Cams:"https://api.nasa.gov/mars-photos/api/v1/rovers/ROVER/photos?earth_date=EARTH_DATE&page=PAGE&api_key=API_KEY",
One_Cam:"https://api.nasa.gov/mars-photos/api/v1/rovers/ROVER/photos?earth_date=EARTH_DATE&camera=CAMERA&page=PAGE&api_key=API_KEY"
},
By_Sol:{
All_Cams:"https://api.nasa.gov/mars-photos/api/v1/rovers/ROVER/photos?sol=SOL&page=PAGE&api_key=API_KEY",
One_Cam:"https://api.nasa.gov/mars-photos/api/v1/rovers/ROVER/photos?sol=SOL&camera=CAMERA&page=PAGE&api_key=API_KEY"
}
},
Manifest:"https://api.nasa.gov/mars-photos/api/v1/manifests/ROVER?api_key=API_KEY"
},
NASA_Image_and_Video_Library:null,
Patents:null,
Satellite_Situation_Center:null,
SSD_CNEOS:null,
Techport:null,
TLE_API:null,
Vesta_Moon_Mars_Trek_WMTS:null
},
launch_api: "https://launchlibrary.net/1.4/launch?limit=3000"
};
var params = {
Rover: {
Cams: {
FHAZ:'fhaz',
RHAZ:'rhaz',
MAST:'mast',
CHEMCAM:'chemcam',
MAHLI:'mahli',
MARDI:'mardi',
NAVCAM:'navcam',
PANCAM:'pancam',
MINITES:'minites'
},
Spirit:'spirit',
Opportunity:'opportunity',
Curiosity:'curiosity'
}
};
