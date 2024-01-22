
let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;  
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;


alert("Fecha y hora actual:", formattedDate);
