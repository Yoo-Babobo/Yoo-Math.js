"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YooMath = void 0;
;
/** A simple math library that adds extra and useful functions to your project. */
exports.YooMath = {
    E: 2.7182818284590451,
    LN10: 2.302585092994046,
    LN2: .6931471805599453,
    LOG2E: 1.4426950408889634,
    LOG10E: .4342944819032518,
    PI: 3.1415926535897931,
    SQRT1_2: .7071067811865476,
    SQRT2: 1.4142135623730951,
    GR: 1.618033988749895,
    isNegative(x) { return x < 0 ? true : false; },
    pow(x, y) { return Math.pow(x, y); },
    sqed(x) { return this.pow(x, 2); },
    cbed(x) { return this.pow(x, 3); },
    qded(x) { return this.root(x, 4); },
    qied(x) { return this.root(x, 5); },
    root(x, y) { return this.pow(x, 1 / y); },
    sqrt(x) { return this.root(x, 2); },
    cbrt(x) { return this.root(x, 3); },
    qdrt(x) { return this.root(x, 4); },
    qirt(x) { return this.root(x, 5); },
    abs(x) { return this.isNegative(x) ? parseInt(x.toString().replace("-", "")) : x; },
    fact(x) { var f = 1; for (var i = x; i >= 1; i--)
        f = f * i; return f; },
    signot(x, y, z) { var s = 0, i = x; do {
        s += z(i);
        i++;
    } while (x < y); return s; },
    sign(x) { return x == 0 ? 0 : x > 0 ? 1 : -1; },
    exp(x) { return this.pow(this.E, x); },
    expm1(x) { return this.exp(x) - 1; },
    logBase(x, y) { return this.ln(x) / this.ln(y); },
    ln(x) { return Math.log(x); },
    log10(x) { return this.logBase(x, 10); },
    log2(x) { return this.logBase(x, 2); },
    log1p(x) { return this.ln(x) + 1; },
    trig: {
        sin(x) {
            return x - (exports.YooMath.cbed(x) / exports.YooMath.fact(3))
                + (exports.YooMath.qied(x) / exports.YooMath.fact(5))
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
            return 1 - (exports.YooMath.sqed(x) / exports.YooMath.fact(2))
                + (exports.YooMath.qded(x) / exports.YooMath.fact(4))
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
            return x + ((1 / 3) * exports.YooMath.cbed(x))
                + ((2 / 15) * exports.YooMath.qied(x))
                + ((17 / 315) * exports.YooMath.pow(x, 7))
                + ((62 / 2835) * exports.YooMath.pow(x, 9));
        },
        sinh(x) { return (exports.YooMath.exp(x) - exports.YooMath.exp(-exports.YooMath.abs(x))) / 2; },
        cosh(x) { return (exports.YooMath.exp(x) + exports.YooMath.exp(-exports.YooMath.abs(x))) / 2; },
        tanh(x) {
            return (exports.YooMath.exp(x) - exports.YooMath.exp(-exports.YooMath.abs(x)))
                / (exports.YooMath.exp(x) + exports.YooMath.exp(-exports.YooMath.abs(x)));
        },
        asin(x) {
            return x + ((1 / 2) * (exports.YooMath.cbed(x) / 3))
                + (((1 * 3) / (2 * 4)) * (exports.YooMath.qied(x) / 5))
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
                + (1 / (exports.YooMath.cbed(x) * 3))
                - (1 / (exports.YooMath.qied(x) * 5))
                + (1 / (exports.YooMath.pow(x, 7) * 7))
                - (1 / (exports.YooMath.pow(x, 9) * 9))
                + (1 / (exports.YooMath.pow(x, 11) * 11))
                - (1 / (exports.YooMath.pow(x, 13) * 13))
                + (1 / (exports.YooMath.pow(x, 15) * 15))
                - (1 / (exports.YooMath.pow(x, 17) * 17));
        },
        asinh(x) {
            return x - ((1 / 2) * (exports.YooMath.cbed(x) / 3))
                + (((1 * 3) / (2 * 4)) * (exports.YooMath.qied(x) / 5))
                - (((1 * 3 * 5) / (2 * 4 * 6)) * (exports.YooMath.pow(x, 7) / 7))
                + (((1 * 3 * 5 * 7) / (2 * 4 * 6 * 8)) * (exports.YooMath.pow(x, 9) / 9))
                - (((1 * 3 * 5 * 7 * 9) / (2 * 4 * 6 * 8 * 10)) * (exports.YooMath.pow(x, 11) / 11))
                + (((1 * 3 * 5 * 7 * 9 * 11) / (2 * 4 * 6 * 8 * 10 * 12)) * exports.YooMath.pow(x, 13) / 13)
                - (((1 * 3 * 5 * 7 * 9 * 11 * 13) / (2 * 4 * 6 * 8 * 10 * 12 * 14)) * exports.YooMath.pow(x, 15) / 15)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16)) * exports.YooMath.pow(x, 17) / 17)
                - (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18)) * exports.YooMath.pow(x, 19) / 19)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)) * exports.YooMath.pow(x, 21) / 21);
        },
        acosh(x) {
            return exports.YooMath.ln(x * 2) - ((1 / ((exports.YooMath.sqed(x) * 2) * 2))
                + ((1 * 3) / ((exports.YooMath.qded(x) * 4) * 2 * 4))
                + ((1 * 3 * 5) / ((exports.YooMath.pow(x, 6) * 6) * 2 * 4 * 6))
                + ((1 * 3 * 5 * 7) / ((exports.YooMath.pow(x, 8) * 8) * 2 * 4 * 6 * 8))
                + ((1 * 3 * 5 * 7 * 9) / ((exports.YooMath.pow(x, 10) * 10) * 2 * 4 * 6 * 8 * 10))
                + ((1 * 3 * 5 * 7 * 9 * 11) / ((exports.YooMath.pow(x, 12) * 12) * 2 * 4 * 6 * 8 * 10 * 12))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13) / ((exports.YooMath.pow(x, 14) * 14) * 2 * 4 * 6 * 8 * 10 * 12 * 14))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / ((exports.YooMath.pow(x, 16) * 16) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / ((exports.YooMath.pow(x, 18) * 18) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / ((exports.YooMath.pow(x, 20) * 20) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)));
        },
        atanh(x) {
            return (exports.YooMath.PI / 2)
                + (1 / x)
                + (1 / (exports.YooMath.cbed(x) * 3))
                + (1 / (exports.YooMath.qied(x) * 5))
                + (1 / (exports.YooMath.pow(x, 7) * 7))
                + (1 / (exports.YooMath.pow(x, 9) * 9))
                + (1 / (exports.YooMath.pow(x, 11) * 11))
                + (1 / (exports.YooMath.pow(x, 13) * 13))
                + (1 / (exports.YooMath.pow(x, 15) * 15))
                + (1 / (exports.YooMath.pow(x, 17) * 17));
        },
        csc(x) { return 1 / this.sin(x); },
        sec(x) { return 1 / this.cos(x); },
        cot(x) { return 1 / this.tan(x); },
        csch(x) { return 2 / (exports.YooMath.exp(x) - exports.YooMath.exp(-exports.YooMath.abs(x))); },
        sech(x) { return 2 / (exports.YooMath.exp(x) + exports.YooMath.exp(-exports.YooMath.abs(x))); },
        coth(x) {
            return (exports.YooMath.exp(x) + exports.YooMath.exp(-exports.YooMath.abs(x)))
                / (exports.YooMath.exp(x) - exports.YooMath.exp(-exports.YooMath.abs(x)));
        },
        acsc(x) { return this.asin(1 / x); },
        asec(x) { return this.acos(1 / x); },
        acot(x) { return (exports.YooMath.PI / 2) - this.atan(x); },
        acsch(x) {
            return exports.YooMath.LN2 - exports.YooMath.ln(x)
                + (1 / 4) * exports.YooMath.sqed(x)
                - (3 / 32) * exports.YooMath.qded(x)
                + (5 / 96) * exports.YooMath.pow(x, 6);
        },
        asech(x) {
            return exports.YooMath.LN2 - exports.YooMath.ln(x)
                - (1 / 4) * exports.YooMath.sqed(x)
                - (3 / 32) * exports.YooMath.qded(x)
                - (5 / 96) * exports.YooMath.pow(x, 6);
        },
        acoth(x) {
            return (1 / x)
                + (1 / (exports.YooMath.cbed(x) * 3))
                + (1 / (exports.YooMath.qied(x) * 5))
                + (1 / (exports.YooMath.pow(x, 7) * 7))
                + (1 / (exports.YooMath.pow(x, 9) * 9))
                + (1 / (exports.YooMath.pow(x, 11) * 11))
                + (1 / (exports.YooMath.pow(x, 13) * 13))
                + (1 / (exports.YooMath.pow(x, 15) * 15))
                + (1 / (exports.YooMath.pow(x, 17) * 17))
                + (1 / (exports.YooMath.pow(x, 19) * 19))
                + (1 / (exports.YooMath.pow(x, 21) * 21));
        }
    }
};
