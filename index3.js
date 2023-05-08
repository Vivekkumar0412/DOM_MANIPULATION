let personData3 = [
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
  let removeBtn = (name)=>{
    console.log(name);
    let index = personData3.findIndex((elem)=>{
        console.log(elem);
        return elem.name == name;
    });

    personData3.splice(index,1);
    showTableData();
  };

  let increaseAge = (agee)=>{
    console.log(agee);
    let index = personData3.find((elem)=>{
        return elem.age == agee;
    });
    index.age = +index.age + 1;
    console.log(index);
    showTableData();
  };
//   let colorAge = false;
//   let getAgeClass = (agee)=>{
//     colorAge = true;
//     if(agee > 18 && colorAge){
//         return "addRed";
//     }
//   }
  let showTableData = ()=>{
    let tableHeader = `<tr> <th>NAME</th> <th>COUNTRY</th> <th onClick = "sortAgeTable()">AGE</th> <th>REMOVE</th> <th>ADD 1 TO AGE</th></tr>`;
    let tableBody = personData3.map((elem)=>{
        let str = `<tr> <td>${elem.name}</td> <td>${elem.country}</td> <td>${elem.age}</td> <td><button onClick = "removeBtn('${elem.name}')">REMOVE</button></td> <td><button onClick = "increaseAge('${elem.age}')">ADD 1 TO AGE</button></td></tr>`;
        return str;
    });

    let completeTable = `<table>${tableHeader} ${tableBody}</table>`;
    let tableData = document.getElementById("tableData");
    tableData.innerHTML = completeTable;
  };

  let sortAgeTable= ()=>{
    personData3.sort((a,b)=>{
        return a.age - b.age;
    });

    showTableData();
  };

  
  let showTable2 = document.getElementById("showTable");
  showTable2.addEventListener("click",showTableData);

  let hideTable3 = document.getElementById("hideTable3");
  console.log(hideTable3);
  hideTable3.addEventListener("click",()=>{
    let tableData = document.getElementById("tableData");
    tableData.innerHTML = "";
  })
  
  