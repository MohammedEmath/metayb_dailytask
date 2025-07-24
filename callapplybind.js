let student_1={
    name:"ram",
    dept:"bca",
    printboth:function(roll){
        console.log(this.name+"-"+this.dept+"-"+roll);
    }
}
let student_2={
    name:"vimal",
    dept:"bcom"
}
let student_3={
    name:"sathya",
    dept:"bsc"
}
let student_4={
    name:"faizal",
    dept:"b.tech"
}
student_1.printboth(30);
student_1.printboth.call(student_2,21);
student_1.printboth.apply(student_3,[23]);
let sfunc=student_1.printboth.bind(student_4,32);
sfunc();