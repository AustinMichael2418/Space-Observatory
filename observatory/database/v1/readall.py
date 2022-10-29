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
