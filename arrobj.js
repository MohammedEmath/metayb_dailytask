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
const above70 = students.filter(std => std.grade > 70);
console.log(above70);

//find (by id)
const studentIdToFind = 103;
const foundStudent = students.find(s => s.id === studentIdToFind);
console.log(`\nStudent with ID ${studentIdToFind}:`, foundStudent);

//every
const check = (std) => std.age > 18
let adults = students.every(check);
console.log("All the students are adults or not..", adults);

//slice
console.log("Slicing Methods");
console.log(students.slice(1, 4));
console.log(students.slice(-2));

//sort
const sortedByGrade = students.sort((a, b) => a.grade - b.grade);
console.log(sortedByGrade);

//some
let fail = students.some(std => std.grade < 60);
console.log("Some students have less than 60 grade..", fail);

//map
console.log("Maapped Student Names:");
let mapstd = students.map(std => std.name);
console.log(mapstd);

//shift and unshift

let std = [
  { name: "babu", roll: 32, grade: "A" },
  { name: "abdul", roll: 42, grade: "C" }
];
std.shift();
console.log(std);
std.unshift({ name: "babu", roll: 32, grade: "A" });
console.log(std);

//push and pop
std.push({ name: "arun", roll: 21, grade: "B" });
console.log(std);
std.pop();
console.log(std);