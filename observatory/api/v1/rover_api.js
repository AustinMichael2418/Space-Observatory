function curiosityPhoto(sol,camera,page,key,index,mode) {
if(mode == 1) {
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol;
} else {
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+sol;
}
if(camera == "all") {
// do nothing
} else {
url+="&camera="+camera;
}

if(page == "all") {
// do nothing
} else {
url+="&page="+page;
}

url += "&api_key="+key

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = JSON.parse(this.responseText);

}
};
xhttp.open("GET", url, false);
xhttp.send(); 
if(index=="all") {
return data.photos;
} else {
return data.photos[index];
}
}