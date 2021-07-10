const { YooMath } = require("./lib/cjs/YooMath");

/*console.log(Math.cosh(4))
console.log(Math.acosh(27.308232836016487))
console.log(acosh(27.308232836016487))*/

// console.log(YooMath.signot(1, 4, (x) => { return x++ }))

// console.log(YooMath.abs(-23872))

console.log(YooMath.trig.coth(0.2793513191023334))
console.log(YooMath.trig.acoth(1.000001663058821))

console.log(Math.sign(0))
console.log(Math.sign(34342))
console.log(Math.sign(-34673848))

console.log(YooMath.sign(0))
console.log(YooMath.sign(34342))
console.log(YooMath.sign(-34673848))

/*Math.expm1()
Math.exp()

Math.E*/

function acosh(x) {
    return Math.log(x * 2) - (
        (1 / ((Math.pow(x, 2) * 2) * 2))
        + ((1 * 3) / ((Math.pow(x, 4) * 4) * 2 * 4))
        + ((1 * 3 * 5) / ((Math.pow(x, 6) * 6) * 2 * 4 * 6))
        + ((1 * 3 * 5 * 7) / ((Math.pow(x, 8) * 8) * 2 * 4 * 6 * 8))
        + ((1 * 3 * 5 * 7 * 9) / ((Math.pow(x, 10) * 10) * 2 * 4 * 6 * 8 * 10))
        + ((1 * 3 * 5 * 7 * 9 * 11) / ((Math.pow(x, 12) * 12) * 2 * 4 * 6 * 8 * 10 * 12))
        + ((1 * 3 * 5 * 7 * 9 * 11 * 13) / ((Math.pow(x, 14) * 14) * 2 * 4 * 6 * 8 * 10 * 12 * 14))
        + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / ((Math.pow(x, 16) * 16) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16))
        + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / ((Math.pow(x, 18) * 18) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18))
        + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / ((Math.pow(x, 20) * 20) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20))
    );
}