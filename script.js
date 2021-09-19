//To verify the same json objects
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let flag = false;
for(key in obj1)
{
    if(obj1[key]!=obj2[key])
        flag = true;

}
if(flag)
    console.log("Different");
else
    console.log("Matched");


//To display all flag urls in console.

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', "https://restcountries.eu/rest/v2/all", true);
req.onload  = function() {
   var jsonResponse = req.response;
    let arr = jsonResponse.map(res=>res.flag);
    arr.forEach(element => {
        console.log(`flagURL: ${element}`);
    });


};
req.send(null);


//We can use XmlHttpReq as well as fetch method


//To display country,sub region,region, population
fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>{

    res.forEach(element => {
        console.log(`|| name: ${element.name} || region: ${element.region} || subregion: ${element.subregion} || population: ${element.population} ||`);
    });
})

