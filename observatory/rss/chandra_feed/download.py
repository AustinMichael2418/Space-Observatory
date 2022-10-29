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

