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

