//To verify the same json objects
let bodyObj = document.querySelector("body");

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let flag = false;
for(key in obj1)
{
    if(obj1[key]!=obj2[key])
        flag = true;

}
let elem = document.createElement('h3');
if(flag){
    console.log("Different");
    elem.innerText = "Two objects are Different";
    bodyObj.append(elem);
}
   
else{
    console.log("Matched");
    elem.innerText = "Two Objects Matched";
    bodyObj.append(elem);
}

//We can use XmlHttpReq as well as fetch method
//Here fetch method used, in next example XMLHTTPREQUEST OBJECT used.
//To display country,sub region,region, population
fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>{

    let table = document.createElement('table');
    bodyObj.appendChild(table);
    let heading = 
    `<tr align="left">
        <th>Name </th>
        <th>Region </th>
        <th>Subregion </th>
        <th>Population </th>
    </tr>`;
    table.innerHTML+=heading;
    res.forEach(element => {
        let aElem = 
        `
        <tr>
            <td>${element.name}</td>
            <td>${element.region}</td>
            <td>${element.subregion}</td>
            <td>${element.population}</td>
        </tr>

        `;
        //To get link of flags on html page
        table.querySelector("tbody").innerHTML+=aElem;
        //To print in console
        console.log(`|| name: ${element.name} || region: ${element.region} || subregion: ${element.subregion} || population: ${element.population} ||`);
    });
})


//To display all flag urls in console.
//Done using XML HTTP REQUEST

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', "https://restcountries.eu/rest/v2/all", true);
req.onload  = function() {
   var jsonResponse = req.response;
    let arr = jsonResponse.map(res=>res.flag);
    arr.forEach(element => {
        //console.log(`flagURL: ${element}`);
        let aElem = `<a href="${element}">${element}</a></br>`;
        //To print in console
        console.log(aElem);
        //To get link of flags on html page
        bodyObj.innerHTML+=aElem;
        });
    };
 req.send(null);




