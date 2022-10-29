import subprocess
from os import chdir as cd
from urllib.request import urlopen as curl

print("Start Podcast Download")
cd('NASA/NASA Podcast')
#subprocess.call("cmd /c dir&&pause")

#from urllib.requests import urlopen as curl

def add(url, file):
    print("Sending "+url+" to "+file)
    try:
        f=open(file,'wb')
    except:
        f=open(file,'x')
        f.close()
        f=open(file,'wb')
    print("File Opened")
    res = curl(url)
    print("Request Complete")
    f.write(res.read())
    print("File Updated")


add("https://www.nasa.gov/rss/dyn/watch-this-space.rss", "watch_this_space.rss")
add("https://www.nasa.gov/rss/dyn/NASAEdge_vodcast.rss", "edge.rss")
add("https://www.nasa.gov/rss/dyn/nasa360_vodcast.rss", "nasa360.rss")
add("https://www.nasa.gov/rss/dyn/APPEL-Giant-Leaps.rss", "small_steps_giant_leaps.rss")
add("https://www.nasa.gov/rss/dyn/On-a-Mission.rss", "on_a_mission.rss")
add("https://www.nasa.gov/rss/dyn/Invisible-Network.rss", "invisible_network.rss")
add("https://www.nasa.gov/rss/dyn/Rocket-Ranch.rss", "rocket_ranch.rss")
add("https://www.nasa.gov/rss/dyn/Gravity-Assist.rss", "gravity_assist.rss")
add("https://www.nasa.gov/rss/dyn/Houston-We-Have-a-Podcast.rss", "houston-we-have-a-podcast.rss")
add("https://www.nasa.gov/rss/dyn/NASA-in-Silicon-Valley.rss", "silicon_valley.rss")
add("https://www.nasa.gov/rss/dyn/TWAN_vodcast.rss", "twan.rss")
add("https://www.nasa.gov/rss/dyn/spacetoground_vodcast.rss", "space_to_ground.rss")
add("http://feeds.feedburner.com/NasaSciencecasts", "scienceCast.rss")
add("https://www.nasa.gov/rss/dyn/nasa-explorers-apollo.rss", "apollo.rss")


cd('../..')
print("Start Database Update")
cd("observatory/database")

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

cd('../..')
print("Start RSS Download")
cd("rss")

#from urllib.requests import urlopen as curl

#def add(url, file):
 #   try:
  #      f=open(file,'wt')
   # except:
    #    f=open(file,'x')
     #   f.close()
      #  f=open(file,'wt')
  #  res = curl(url)
   # f.write(res.content)


add("https://blogs.nasa.gov/parkersolarprobe/feed/", "psp.rss")
add("https://blogs.nasa.gov/pluto/feed/", "new_horizons.rss")
add("https://spacetelescopelive.org/feed", "hubble.rss")
add("https://blogs.nasa.gov/spacestation/feed/", "iss.rss")
add("http://chandra.harvard.edu/photo/xml/photo.xml", "chandra.rss")
add("https://www.nasa.gov/rss/dyn/breaking_news.rss", "breaking_news.rss")
add("https://www.nasa.gov/rss/dyn/educationnews.rss", "education_news.rss")
add("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss", "iotd.rss")
add("https://www.nasa.gov/rss/dyn/chandra_images.rss", "chandra2.rss")
add("https://www.nasa.gov/rss/dyn/mission_pages/kepler/news/kepler-newsandfeatures-RSS.rss", "kepler.rss")
add("https://www.nasa.gov/rss/dyn/solar_system.rss", "solar.rss")



print("Start STI RSS Download")
cd("sti")

#from urllib.requests import urlopen as curl

#def add(url, file):
 #   try:
  #      f=open(file,'wt')
   # except:
    #    f=open(file,'x')
     #   f.close()
      #  f=open(file,'wt')
#    res = curl(url)
 #   f.write(res.content)


#add("http://www.sti.nasa.gov/scan/rss99-01.xml", "sti.rss")
#add("http://www.sti.nasa.gov/scan/rss99-02.xml", "sti_report.rss")

cd("..")
print("Start NASA Centers RSS Download")
cd("centers")

#from urllib.requests import urlopen as curl

#def add(url, file):
 #   try:
  #      f=open(file,'wt')
   # except:
    #    f=open(file,'x')
     #   f.close()
      #  f=open(file,'wt')
  #  res = curl(url)
   # f.write(res.content)


add("https://www.nasa.gov/rss/dyn/ames_news.rss", "ames.rss")
add("https://www.nasa.gov/rss/dyn/glenn_features.rss", "glenn.rss")
add("https://www.nasa.gov/rss/dyn/goddard-NewsFeature.rss", "gsfc.rss")
add("https://www.nasa.gov/rss/dyn/johnson_news.rss", "jsc.rss")
add("https://www.nasa.gov/rss/dyn/centers/stennis/news/latest_news.rss", "stennis.rss")
add("https://www.nasa.gov/rss/dyn/msfc_news.rss", "marshall.rss")
add("https://www.nasa.gov/rss/dyn/armstrong_news.rss", "armstrong.rss")

cd("..")
print("Start Chandra X-Ray Observatory Feed Download RSS Download")
cd("chandra_feed")

#from urllib.requests import urlopen as curl

#def add(url, file):
 #   try:
  #      f=open(file,'wt')
   # except:
    #    f=open(file,'x')
     #   f.close()
      #  f=open(file,'wt')
 #   res = curl(url)
  #  f.write(res.content)


add("http://chandra.harvard.edu/press/xml/press.xml", "news.rss")

cd("../../..")
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
