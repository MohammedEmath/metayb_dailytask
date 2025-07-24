//shallow
/*let shal={
    id:102,
    emname:"jack",
    atten:"present",
};
console.log(shal);
let clo=shal;
console.log(clo);
clo.id=105;
clo.atten="absent";
console.log(shal);
console.log(clo);*/

//deep
let shal={
    id:102,
    emname:"jack",
    atten:"present",
};
console.log(shal);
let clo=structuredClone(shal);
console.log(clo);
clo.id=105;
clo.atten="absent";
console.log(shal);
console.log(clo);
