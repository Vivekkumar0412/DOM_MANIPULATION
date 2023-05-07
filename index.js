// // alert("hi there");
// let h1s = ["one", "two", "three"];
// let addRed = document.getElementById("addRed");
// addRed.addEventListener("click", () => {
//   for (let i = 0; i < h1s.length; i++) {
//     let elem = document.getElementById(h1s[i]);
//     elem.className = "addRed";
//   }
// });

// let addGreen = document.getElementById("addGreen");
// addGreen.addEventListener("click", () => {
//   for (let i = 0; i < h1s.length; i++) {
//     let elem = document.getElementById(h1s[i]);
//     elem.className = "addGreen";
//   }
// });

// let removeStyle = document.getElementById("removeStyle");
// removeStyle.addEventListener("click", () => {
//   for (let i = 0; i < h1s.length; i++) {
//     let elem = document.getElementById(h1s[i]);
//     elem.className = "";
//   }
// });

// let products = [
//   { prod: "Pepsi", price: 15, stock: 20 },
//   { prod: "Coke", price: 18, stock: 30 },
//   { prod: "Maggi", price: 10, stock: 35 },
//   { prod: "Nescafe", price: 40, stock: 10 },
//   { prod: "Dairy Milk", price: 30, stock: 12 },
//   { prod: "Frito Lays", price: 20, stock: 15 },
// ];
// let show_red = false;
// let showData = document.getElementById("showData");
// let show = document.getElementById("show");
// let hide = document.getElementById("hide");
// let getPrice = (data)=>{
//     // console.log(data);
//     if(data > 27 && show_red){
//         return "addRed";
//     }else{
//       return "";
//     }
// };

// let filter_fun = ()=>{
//     show_red = true; 
//     show_Data();
// }
// let show_Data = ()=>{
//     // show_red = false;
//     let t_header = `<tr> <th>NAME</th> <th>PRICE</th> <th>STOCK</th> </tr>`;
//     let t_body = products.map((elem)=>{
//         let str = `<tr> <td>${elem.prod}</td> <td class = "${getPrice(elem.price)}">${elem.price}</td> <td class = "${getPrice(elem.stock)}">${elem.stock}</td></tr>`;
//         return str;
//     });
//     let table = `<table>${t_header} ${t_body}</table>`;
//     showData.innerHTML = table;
// };
// show.addEventListener("click",show_Data);
// hide.addEventListener("click",()=>{
//     showData.innerHTML = "";
// });

// let filter_Data = document.getElementById("filter_Data");
// filter_Data.addEventListener("click",filter_fun) 
let coloryes = false;
let showprod = false;
let products = [
  { prod: "Pepsi", price: 15, stock: 20 },
  { prod: "Coke", price: 18, stock: 30 },
  { prod: "Maggi", price: 10, stock: 35 },
  { prod: "Nescafe", price: 40, stock: 10 },
  { prod: "Dairy Milk", price: 30, stock: 12 },
  { prod: "Frito Lays", price: 20, stock: 15 },
];
let givePrise =(val)=>{
  if(val > 30 && coloryes){
    return "addRed";
  }else{
    return "";
  }
};

let giveStock = (val)=>{
  if(val > 15 && coloryes){
    return "addGreen";
  }
}

let showColor = ()=>{
  coloryes = true;
  showprod = false;
  showTable();
}

let getProducts =(elem)=>{
  let value = 0;
  value += elem.stock * elem.price;
  if(value < 350 && showprod){
    return "addOrange";
  }
};

let showProducts = ()=>{
  showprod = true;
  coloryes = false;
  showTable();
}

let sort = (elem)=>{
  if(elem == 0){
    products.sort((a,b)=>{
      return a.prod.length - b.prod.length;
    });
  }else if(elem == 1){
    products.sort((a,b)=>{
      // return a.prod[0] - b.prod[0];
      return a.price - b.price;
    });

  }else if(elem == 2){
    products.sort((a,b)=>{
      return a.stock - b.stock;
    })
  }
  showTable();
};

let removeRow = (name)=>{
  let index = products.findIndex((elem)=>{
    return elem.prod == name;
  });

  products.splice(index,1);
  showTable();
}
let showTable = ()=>{
  let t_head = `<tr> <th onClick = "sort(0)">NAME</th> <th onClick = "sort(1)">PRICE</th> <th onClick = "sort(2)">STOCK</th> <th>REMOVE</th></tr>`;
  let t_body = products.map((elem)=>{
    let str = `<tr class = "${getProducts(elem)}"> <td>${elem.prod}</td> <td class = "${givePrise(elem.price)}">${elem.price}</td> <td class = "${giveStock(elem.stock)}">${elem.stock}</td> <td><button onClick = "removeRow('${elem.prod}')">REMOVE</button></td></tr>`;
    return str;
  })
  let final_data = `<table>${t_head} ${t_body.join("")}</table>`;
  let data = document.getElementById("data");
  data.innerHTML = final_data;
  // return final_data;
};


let showData = document.getElementById("showData");
showData.addEventListener("click",showTable);

let colorData = document.getElementById("colorData");
colorData.addEventListener("click",showColor);

let hideData = document.getElementById("hideData");
hideData.addEventListener("click",()=>{
  coloryes = false;
  showTable();
})

let highlightValue = document.getElementById("highlightValue");
highlightValue.addEventListener("click",showProducts);


let removeallcolors = document.getElementById("removeallcolors");
removeallcolors.addEventListener("click",()=>{
  coloryes = false;
  showprod = false;
  showTable();

})