let personData = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Nick", country: "France", age: 32 },
  { name: "Francis", country: "France", age: 44 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];

// funtion that will display tha data in the html dom
let showData2 = ()=>{
    let data = personData.map((elem)=>{
        let str = ` <ul><li>Name : ${elem.name} Country : ${elem.country}  Age : ${elem.age} </ul>`;
        return str;
    });

    let final_data = `${data.join("")}`;
    let data2 = document.getElementById("data2");
    data2.innerHTML = final_data;
};

// sorting function that is responsibel to sort the data acording to the country name
let sortByCountryFunction = ()=>{
    personData.sort((a,b)=>{
        return a.country.length - b.country.length;
    });

    showData2();
};

// sorting using age

let sortByAgeFunction = ()=>{
    personData.sort((a,b)=>{
        return a.age - b.age;
    });

    showData2();
};

// sorting by country and within that sorting by age

let sortBycountryAndAgeFunction = ()=>{
    let data = personData.sort((a,b)=>{
        return a.country.length - b.country.length;
    });

    let data2 = data.sort((a,b)=>{
        return a.age - b.age;
    });
    console.log(data2);
}
// sortin for india only

let indiaFunction = ()=>{
    let indiaOnly = personData.filter((elem)=>{
        return elem.country == "India";
    });

    let data2 = document.getElementById("data2");

    let final = indiaOnly.map((elem)=>{
        let str = `<ul>  <li> Name :${elem.name} Country : ${elem.country} Age : ${elem.age}</li> </ul>`;
        return str;
    });

    data2.innerHTML = final;
}

// all the buttons and eventlisteers
let show2 = document.getElementById("show2");
show2.addEventListener("click",showData2);

let hide2 = document.getElementById("hide2");
hide2.addEventListener("click",()=>{
    let data2 = document.getElementById("data2");
    data2.innerHTML ="";
});


let sortByCountry = document.getElementById("sortByCountry");
sortByCountry.addEventListener("click",sortByCountryFunction);

let sortByAge = document.getElementById("sortByAge");
sortByAge.addEventListener("click",sortByAgeFunction);

let sortBycountryAndAge = document.getElementById("sortBycountryAndAge");
sortBycountryAndAge.addEventListener("click",sortBycountryAndAgeFunction);

let india = document.getElementById("india");
india.addEventListener("click",indiaFunction);