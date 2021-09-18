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
fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>{

    let arr = res.map(res=>res.flag);
    arr.forEach(element => {
        console.log(`flagURL: ${element}`);
    });
})

//To display country,sub region,region, population
fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>{

    res.forEach(element => {
        console.log(`|| name: ${element.name} || region: ${element.region} || subregion: ${element.subregion} || population: ${element.population} ||`);
    });
})