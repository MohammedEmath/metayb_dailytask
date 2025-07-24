/*let ob1={name:"hari",age:21};
console.log(ob1);
ob1.age=23;
ob1.weight=76;
console.log(ob1);
delete ob1.age;
console.log(ob1);
let ob2=new Object();
ob2.name="alan";
ob2.gender="male";
console.log(ob2);
ob2["age"]=22;
delete ob2["gender"];
console.log(ob2);
console.log(ob1);
console.log(ob2);
console.log(Object.keys(ob1));
console.log(Object.keys(ob1).length);*/
/*let a={name:"abc"};
let b={num:123};
let c={...a,...b};
console.log(c);*/
const student = {
  name: "Alice",
  age: 20,
  grade: 85
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
Object.keys(student).forEach(key => {
  console.log(`${key}: ${student[key]}`);
});
Object.values(student).forEach(key => {
  console.log(`${key}: ${student[key]}`);
});
