const students = [
  { id: 101, name: "Alan", age: 20, grade: 85 },
  { id: 102, name: "Arun", age: 19, grade: 67 },
  { id: 103, name: "Dinesh", age: 22, grade: 92 },
  { id: 104, name: "Faizal", age: 19, grade: 73 },
  { id: 105, name: "Vikash", age: 16, grade: 58 }
];
//foreach()
console.log("All Students:");
students.forEach(student => {
  console.log(`${student.id}: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});

//filter
console.log("Stuents who has more than grade 70");
const above70=students.filter(std=>std.grade>70);
console.log(above70);

//find (by id)
console.log("Stuents who has id number=103");
const id103=students.find(std=>std.id=103);
console.log(id103);

//every
let adults=students.every(std=>std.age>18);
console.log("All the students are adults or not..",adults);

//slice
console.log("Slicing Methods");
console.log(students.slice(1,4));
console.log(students.slice(-2));

//sort
/*console.log("Names sorted by descing order");
let desc=students.sort((a,b)=>b.name.localeCompare(a.name));
console.log(desc);*/

//reverse
console.log("Reversed student data");
let rev=students.reverse();
console.log(rev);
