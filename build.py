import json

manifestData = dict()

def readManifest():
    manifest = open("manifest.json","rt")
    manifestData = json.loads(manifest.read())
    build_files = manifestData["build_files"]
    for i in build_files:
        name=i["name"]
        dependencies=i["dependencies"]
        try:
            f=open(name,"x")
        except:
            f=open(name,"w")
            f.write("")
        current_build_file = open(name,"a")
        for ii in dependencies:
            z = open(ii,"rt")
            current_build_file.write(z.read())

readManifest()
