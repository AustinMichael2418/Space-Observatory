var VoyagerTelem = new Object();

VoyagerTelem.getPos = function() {
var t = Math.floor(new Date().getTime() / 1000);

let epoch_0 = 1572537600;
let epoch_1 = 1572451200;

let dist_0_v1 = 22136006423.9759;
let dist_1_v1 = 22133224874.7539;

let dist_0_v2 = 18308379449.7819;
let dist_1_v2 = 18305101864.6089;

let dist_0_v1s = 22041281749.6949;
let dist_1_v1s = 22039820127.7087;

let dist_0_v2s = 18273447392.0943;
let dist_1_v2s = 18272148291.4820;
let au_conversion = 149597870.691;

current_dist_km_v1 = ( ( ( t - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v1 - dist_0_v1 ) ) + dist_0_v1;
current_dist_km_v2 = ( ( ( t - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v2 - dist_0_v2 ) ) + dist_0_v2;

current_dist_km_v1s = ( ( ( t - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v1s - dist_0_v1s ) ) + dist_0_v1s;
current_dist_km_v2s = ( ( ( t - epoch_0 ) / ( epoch_1 - epoch_0 ) ) * ( dist_1_v2s - dist_0_v2s ) ) + dist_0_v2s;

current_dist_au_v1 = current_dist_km_v1/au_conversion;
current_dist_au_v2 = current_dist_km_v2/au_conversion;
current_dist_au_v1s = current_dist_km_v1s/au_conversion;
current_dist_au_v2s = current_dist_km_v2s/au_conversion;
return {
voyager1: {
distances: {
earth: {
km: current_dist_km_v1,
au: current_dist_au_v1
},
sun:{
km: current_dist_km_v1s,
au: current_dist_au_v1s
}
}
},

voyager2: {distances: {
earth: {
km: current_dist_km_v2,
au: current_dist_au_v2
},
sun:{
km: current_dist_km_v2s,
au: current_dist_au_v2s
}
}}
};
}
