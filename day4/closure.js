function outfunc() {
    let count = 0;
    let innerfunc = () => {
        count++;
        console.log("COUNT:", count);
        return
    }
    return innerfunc;
}
const a = outfunc();
const b = outfunc();
b();
a();
a();
a();

function factorial() {

    let fact = (n) => {
        if (n <= 1) {
            return 1;
        }
        else {
            return n * fact(n - 1);
        }
    }
    return fact;
}
const final = factorial(5);
console.log(final(5));



