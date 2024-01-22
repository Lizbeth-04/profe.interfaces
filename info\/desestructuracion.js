
let arr = ["John", "Smith"];

let [firstName, surname] = arr;

alert(firstName); 
alert(surname);  

let [Name, name] = "John Smith".split(' ');

alert(Name); 
alert(name);  


let [name1, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(title); 
 
let [name11, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(rest[0]); 
alert(rest[1]); 
alert(rest.length); 
let guest = "Jane";
let admin = "Pete";


[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); 
//objetos
let option = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  
  let { itle, width, height } = options;
  
  alert(itle);  
  alert(width);  
  alert(height); 
  
  let opti = {
    tittle: "Menu"
  };
  
  
  let { width: w = 100, height: h = 200, tittle } = options;
  
  alert(title); 
  alert(w);    
  alert(h);     
  let optio = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  
  let {
    size: {
      widtha,
      heightl
    },
    items: [item1, item2],
    titttle = "Menu"
  } = optio;
  
  alert(titttle);  
  alert(widtha);  
  alert(heightl); 
  alert(item1);  
  alert(item2);  
  



