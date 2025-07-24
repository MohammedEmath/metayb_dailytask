//stringfy
let shal={
    id:102,
    emname:"jack",
    atten:"present",
};
let stringfy1=JSON.stringify(shal);
console.log("JS OBJECT:");
console.log(shal);
console.log("JSON STRINGFY");
console.log(stringfy1);
console.log(typeof stringfy1);
console.log(typeof shal);
//parse
console.log("CONVERT JSON STRINGFY TO PARSE");
let strparse=JSON.parse(stringfy1);
console.log(strparse);

