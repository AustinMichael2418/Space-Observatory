function get(url) {
var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
data = (new DOMParser()).parseFromString(this.responseText,"text/xml");

}
};
xhttp.open("GET", url, false);
xhttp.send(); 
return data;
}

var items;
// Doesn't work with NASA360 or ScienceCast
function read(url) {
var data = get(url);
var output = new Object();
output.title = data.getElementsByTagName("title")[0].innerHTML;
output.description = data.getElementsByTagName("description")[0].innerHTML;
output.subtitle = data.getElementsByTagName("itunes:subtitle")[0].innerHTML;
output.image = data.getElementsByTagName("itunes:image")[0].getAttribute("href");
output.source = data.getElementsByTagName("atom:link")[0].getAttribute("href");
output.items = new Array();
items = data.getElementsByTagName("item");
for(var i=0;i<items.length;i++) {
var item = new Object();
//console.log(i);
//console.log(items);
item.title = items[i].getElementsByTagName("title")[0].innerHTML;
item.link = items[i].getElementsByTagName("link")[0].innerHTML;
item.date = items[i].getElementsByTagName("pubDate")[0].innerHTML;
item.description = items[i].getElementsByTagName("description")[0].innerHTML;
item.file = items[i].getElementsByTagName("enclosure")[0].getAttribute("url");
item.type = items[i].getElementsByTagName("enclosure")[0].getAttribute("type");
output.items.push(item);
}
return output;
}

//For NASA360
function readVTwo(url) {
var data = get(url);
var output = new Object();
output.title = data.getElementsByTagName("title")[0].innerHTML;
//output.description = data.getElementsByTagName("description")[0].innerHTML;
output.subtitle = data.getElementsByTagName("itunes:subtitle")[0].innerHTML;
output.image = data.getElementsByTagName("itunes:image")[0].getAttribute("href");
output.source = data.getElementsByTagName("atom:link")[0].getAttribute("href");
output.items = new Array();
items = data.getElementsByTagName("item");
for(var i=0;i<items.length;i++) {
var item = new Object();
//console.log(i);
//console.log(items);
item.title = items[i].getElementsByTagName("title")[0].innerHTML;
item.link = items[i].getElementsByTagName("link")[0].innerHTML;
item.date = items[i].getElementsByTagName("pubDate")[0].innerHTML;
//item.description = items[i].getElementsByTagName("description")[0].innerHTML;
item.file = items[i].getElementsByTagName("enclosure")[0].getAttribute("url");

item.type = items[i].getElementsByTagName("enclosure")[0].getAttribute("type");
output.items.push(item);
}
return output;
}

// for ScienceCast
function readVThree(url) {
var data = get(url);
var output = new Object();
output.title = data.getElementsByTagName("title")[0].innerHTML;
//output.description = data.getElementsByTagName("description")[0].innerHTML;
output.subtitle = data.getElementsByTagName("itunes:subtitle")[0].innerHTML;
output.image = data.getElementsByTagName("itunes:image")[0].getAttribute("href");
//output.source = data.getElementsByTagName("atom:link")[0].getAttribute("href");
output.items = new Array();
items = data.getElementsByTagName("item");
for(var i=0;i<items.length;i++) {
var item = new Object();
//console.log(i);
//console.log(items);
item.title = items[i].getElementsByTagName("title")[0].innerHTML;
item.link = items[i].getElementsByTagName("link")[0].innerHTML;
item.date = items[i].getElementsByTagName("pubDate")[0].innerHTML;
item.description = items[i].getElementsByTagName("itunes:summary")[0].innerHTML;
item.file = items[i].getElementsByTagName("enclosure")[0].getAttribute("url");
item.type = items[i].getElementsByTagName("enclosure")[0].getAttribute("type");
output.items.push(item);
}
return output;
}