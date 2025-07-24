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
console.log("The Product is",orderstatus,"to",custname);

