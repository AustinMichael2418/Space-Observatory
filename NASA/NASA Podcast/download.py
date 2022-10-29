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


