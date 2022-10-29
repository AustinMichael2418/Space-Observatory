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


