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
