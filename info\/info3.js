'use strict'
let student = {
    name: "Alice",
    age: 20,
    grade: "A",
    subjects: ["Math", "English", "History"]
  };
  
  
  let properties = Object.keys(student);
  alert("Propiedades del estudiante:", properties);

  let values = Object.values(student);
  alert("Valores de las propiedades:", values);

  let entries = Object.entries(student);
  alert("Pares clave/valor como arrays:", entries);
 
  for (let key of properties) {
    alert(`Propiedad: ${key}, Valor: ${student[key]}`);
  }
  
  for (let [key, value] of entries) {
    alert(`Propiedad: ${key}, Valor: ${value}`);
  }
  