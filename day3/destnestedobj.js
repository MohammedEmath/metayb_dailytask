const amazon={
        orderid:13345,
        customer:{
            custid:5665,
            custname:"DAVID",
            phoneno:6754899806,
            email:"david@gmail.com"
        },
        items:{
            itemno:3425,
            itemname:"BOAT HEADPHONE",
            quantity:1,
            price:499
        },
        payment:{
            method:"GPAY",
            transid:582758298,
            status:"COMPLETED"
        },
        orderstatus:"DELIVERED"
    };

console.log("CUSTOMER DETAILS:");
const {customer:{custid,custname,phoneno,email}}=amazon;
console.log("CUSTOMER ID:",custid);
console.log("CUSTOMER NAME:",custname);
console.log("PHONE NUMBER:",phoneno);
console.log("EMAIL:",email,"\n");

console.log("PRODUCT DETAILS:");
const {items:{itemno:itemno1,itemname:itemn,quantity:quan,price:cost}}=amazon;
console.log("PRODUCT ID:",itemno1);
console.log("PRODUCT NAME:",itemn);
console.log("QUANTITY:",quan);
console.log("PRICE:",cost,"\n");

console.log("ORDER STATUS:");
const{orderstatus}=amazon;
console.log("The Product is",orderstatus,"to",custname,'\n');

//using spread operator
console.log("Merge array and clone object using Spread operator:")
const user = { name: 'Alice', age: 25 };
console.log("Shallow Copy:");
const user12=user;
console.log(user12);
console.log("Clone Object Using Spread Operator:")
const objclone={...user};
console.log(objclone,'\n');

const arr1=[221,234,355];
const arr2=['asd','asf'];
console.log(arr1);
console.log(arr2);
console.log("Merge two arrays:")
const arr3=[...arr1,'sjsc',...arr2];
console.log(arr3);
