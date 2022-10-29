cd("v1")
print("Downloading data...")


#from urllib.requests import urlopen as curl

#def add(url, file):
#    try:
 #       f=open(file,'wt')
  #  except:
   #     f=open(file,'x')
    #    f.close()
     #   f=open(file,'wt')
    #res = curl(url)
    #f.write(res.content)


add("https://blogs.nasa.gov/parkersolarprobe/feed/", "psp.rss")
add("https://blogs.nasa.gov/pluto/feed/", "new_horizons.rss")
add("https://spacetelescopelive.org/feed", "hubble.rss")
add("https://blogs.nasa.gov/spacestation/feed/", "iss.rss")
add("http://chandra.harvard.edu/photo/xml/photo.xml", "chandra.rss")
add("https://www.nasa.gov/rss/dyn/breaking_news.rss", "news.rss")
add("https://www.nasa.gov/rss/dyn/educationnews.rss", "education_news.rss")
add("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss", "iotd.rss")
add("https://www.nasa.gov/rss/dyn/chandra_images.rss", "chandra2.rss")
add("https://www.nasa.gov/rss/dyn/mission_pages/kepler/news/kepler-newsandfeatures-RSS.rss", "kepler.rss")
add("https://www.nasa.gov/rss/dyn/solar_system.rss", "solar.rss")


print("Saving archives...")


from os import listdir
from os import getcwd
from os.path import isfile, join, splitext
onlyfiles = [f for f in listdir(getcwd()) if isfile(join(getcwd(), f))]

def readAll():
    for i in onlyfiles:
        print(i)
        #nothing = input()
        if splitext(i)[1] == ".rss":
            j=splitext(i)[0]
            readRSS(i,j+'.json')
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

