function array(){
    const mobiles=[
    {"brand":"samsang","model":"m1","price":10000},
    {"brand":"samsang","model":"m2","price":9000},
    {"brand":"Nokia","model":"m3","price":12000},
    {"brand":"Oppo","model":"m4","price":6000},
    {"brand":"Iphone","model":"m5","price":9200},
    {"brand":"realme","model":"m6","price":1500},
    {"brand":"readmi","model":"m7","price":10000},
    {"brand":"karbon","model":"m8","price":4852},
    {"brand":"micromax","model":"m9","price":18000},
    {"brand":"oneplus","model":"m10","price":45000},
    {"brand":"poco","model":"m11","price":20000},
    {"brand":"oneplus","model":"m12","price":10600}
    ];
const highEndMobiles=mobiles.filter(m=>m.price>15000);
console.log(highEndMobiles.length);
}