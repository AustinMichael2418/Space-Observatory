import xml.dom.minidom as xml
import json

databasefiles = []

def readRSS(rss,JSON):
    
    try:
        f = open(JSON, "r")
        data = json.loads(f.read())
    except:
        try:
            d = open(JSON, "w")
        except:
            d = open(JSON, "x")
        d.write('{"data":{}}')
        d.close()
        f = open(JSON, "r")
        data = json.loads(f.read())
    f.close()
    r = open(rss,"rb")
    z = r.read()
    r.close()
    r = open(rss+".xml","wb")
    r.write(z)
    r.close()
    document = xml.parse(rss+".xml")
    items = document.getElementsByTagName("item")
    for i in items:
        current = (i.getElementsByTagName("title")[0].childNodes[0].data)
        data["data"][current] = dict()
        data["data"][current]["title"] = (i.getElementsByTagName("title")[0].childNodes[0].data)
        data["data"][current]["link"] = (i.getElementsByTagName("link")[0].childNodes[0].data)
        data["data"][current]["pubDate"] = (i.getElementsByTagName("pubDate")[0].childNodes[0].data)
        try:
            data["data"][current]["img"] = i.getElementsByTagName("enclosure")[0].getAttribute("url")
        except:
            print("No image")
        try:
            data["data"][current]["desc"] = (i.getElementsByTagName("description")[0].childNodes[0].data)
        except:
            print("No description")
    d = open(JSON, "w")
    databasefiles.append(JSON)
    d.write(json.dumps(data))
    d.close()

readRSS("breakingnews.rss","news.json")
readRSS("chandra2.rss","chandra.json")
readRSS("educationnews.rss","educationnews.json")
readRSS("hubble.rss","hubble.json")
readRSS("iotd.rss","iotd.json")
readRSS("kepler.rss","kepler.json")
readRSS("solar.rss","solar.json")

readAll()

try:
    f=open('files.json','w')
except:
    f=open('files.json','x')
    f.close()
    f=open('files.json','w')
f.write(json.dumps(databasefiles))
f.close()

