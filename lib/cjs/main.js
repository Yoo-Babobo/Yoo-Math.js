"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YooMath = void 0;
;
/**
 * The future of math.
 */
exports.YooMath = {
    E: 2.7182818284590451,
    PI: 3.1415926535897931,
    isNegative(x) { if (x < 0)
        return true;
    else
        return false; },
    pow(x, y) { return Math.pow(x, y); },
    root(x, y) { return exports.YooMath.pow(x, 1 / y); },
    sqrt(x) { return exports.YooMath.root(x, 2); },
    cbrt(x) { return exports.YooMath.root(x, 2); },
    qdrt(x) { return exports.YooMath.root(x, 2); },
    qirt(x) { return exports.YooMath.root(x, 2); },
    abs(x) { if (exports.YooMath.isNegative(x))
        return parseInt(x.toString().replace("-", ""));
    else
        return x; },
    fact(x) { var f = 1; for (var i = x; i >= 1; i--)
        f = f * i; return f; },
    trig: {
        sin(x) {
            return x - (exports.YooMath.pow(x, 3) / exports.YooMath.fact(3))
                + (exports.YooMath.pow(x, 5) / exports.YooMath.fact(5))
                - (exports.YooMath.pow(x, 7) / exports.YooMath.fact(7))
                + (exports.YooMath.pow(x, 9) / exports.YooMath.fact(9))
                - (exports.YooMath.pow(x, 11) / exports.YooMath.fact(11))
                + (exports.YooMath.pow(x, 13) / exports.YooMath.fact(13))
                - (exports.YooMath.pow(x, 15) / exports.YooMath.fact(15))
                + (exports.YooMath.pow(x, 17) / exports.YooMath.fact(17))
                - (exports.YooMath.pow(x, 19) / exports.YooMath.fact(19))
                + (exports.YooMath.pow(x, 21) / exports.YooMath.fact(21));
        },
        cos(x) {
            return 1 - (exports.YooMath.pow(x, 2) / exports.YooMath.fact(2))
                + (exports.YooMath.pow(x, 4) / exports.YooMath.fact(4))
                - (exports.YooMath.pow(x, 6) / exports.YooMath.fact(6))
                + (exports.YooMath.pow(x, 8) / exports.YooMath.fact(8))
                - (exports.YooMath.pow(x, 10) / exports.YooMath.fact(10))
                + (exports.YooMath.pow(x, 12) / exports.YooMath.fact(12))
                - (exports.YooMath.pow(x, 14) / exports.YooMath.fact(14))
                + (exports.YooMath.pow(x, 16) / exports.YooMath.fact(16))
                - (exports.YooMath.pow(x, 18) / exports.YooMath.fact(18))
                + (exports.YooMath.pow(x, 20) / exports.YooMath.fact(20));
        },
        tan(x) {
            return x + ((1 / 3) * exports.YooMath.pow(x, 3))
                + ((2 / 15) * exports.YooMath.pow(x, 5))
                + ((17 / 315) * exports.YooMath.pow(x, 7))
                + ((62 / 2835) * exports.YooMath.pow(x, 9));
        },
        sinh(x) { return (exports.YooMath.pow(exports.YooMath.E, x) - exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x))) / 2; },
        cosh(x) { return (exports.YooMath.pow(exports.YooMath.E, x) + exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x))) / 2; },
        tanh(x) {
            return (exports.YooMath.pow(exports.YooMath.E, x) - exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x)))
                / (exports.YooMath.pow(exports.YooMath.E, x) + exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x)));
        },
        asin(x) {
            return x + ((1 / 2) * (exports.YooMath.pow(x, 3) / 3))
                + (((1 * 3) / (2 * 4)) * (exports.YooMath.pow(x, 5) / 5))
                + (((1 * 3 * 5) / (2 * 4 * 6)) * (exports.YooMath.pow(x, 7) / 7))
                + (((1 * 3 * 5 * 7) / (2 * 4 * 6 * 8)) * (exports.YooMath.pow(x, 9) / 9))
                + (((1 * 3 * 5 * 7 * 9) / (2 * 4 * 6 * 8 * 10)) * (exports.YooMath.pow(x, 11) / 11))
                + (((1 * 3 * 5 * 7 * 9 * 11) / (2 * 4 * 6 * 8 * 10 * 12)) * exports.YooMath.pow(x, 13) / 13)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13) / (2 * 4 * 6 * 8 * 10 * 12 * 14)) * exports.YooMath.pow(x, 15) / 15)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16)) * exports.YooMath.pow(x, 17) / 17)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18)) * exports.YooMath.pow(x, 19) / 19)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)) * exports.YooMath.pow(x, 21) / 21);
        },
        acos(x) { return (exports.YooMath.PI / 2) - this.asin(x); },
        atan(x) {
            return (exports.YooMath.PI / 2)
                - (1 / x)
                + (1 / (exports.YooMath.pow(x, 3) * 3))
                - (1 / (exports.YooMath.pow(x, 5) * 5))
                + (1 / (exports.YooMath.pow(x, 7) * 7))
                - (1 / (exports.YooMath.pow(x, 9) * 9))
                + (1 / (exports.YooMath.pow(x, 11) * 11))
                - (1 / (exports.YooMath.pow(x, 13) * 13))
                + (1 / (exports.YooMath.pow(x, 15) * 15))
                - (1 / (exports.YooMath.pow(x, 17) * 17));
        },
        asinh(x) { return Math.asinh(x); },
        acosh(x) { return Math.acosh(x); },
        atanh(x) { return Math.atanh(x); },
        csc(x) { return 1 / this.sin(x); },
        sec(x) { return 1 / this.cos(x); },
        cot(x) { return 1 / this.tan(x); },
        csch(x) { return 2 / (exports.YooMath.pow(exports.YooMath.E, x) - exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x))); },
        sech(x) { return 2 / (exports.YooMath.pow(exports.YooMath.E, x) + exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x))); },
        coth(x) {
            return (exports.YooMath.pow(exports.YooMath.E, x) + exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x)))
                / (exports.YooMath.pow(exports.YooMath.E, x) - exports.YooMath.pow(exports.YooMath.E, -exports.YooMath.abs(x)));
        }
    }
};
