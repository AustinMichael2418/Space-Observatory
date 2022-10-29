var div_include_lib = document.createElement('div');
div_include_lib.setAttribute('id','lib');
document.body.appendChild(div_include_lib);
function include(path) {
document.getElementById('lib').innerHTML+=get(path+"/config.xml").replace(/{{path}}/gi,path);
}