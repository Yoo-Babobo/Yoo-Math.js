interface YooMath {
    /** The mathematical constant `e`. This is Euler's number, the base of natural logarithms. */
    readonly E: number,
    /** The natural logarithm of `10`. */
    readonly LN10: number,
    /** The natural logarithm of `2`. */
    readonly LN2: number,
    /** The base-2 logarithm of `e`. */
    readonly LOG2E: number,
    /** The base-10 logarithm of `e`. */
    readonly LOG10E: number,
    /** Also known as `π`. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number,
    /** The square root of `.5`, or, equivalently, one divided by the square root of `2`. */
    readonly SQRT1_2: number,
    /** The square root of `2`. */
    readonly SQRT2: number,
    /**
     * Returns true if `x` is negative.
     * @param {number} x A numeric expression.
     */
    isNegative: (x: number) => boolean,
    /**
     * Returns the `y` power of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The power for `x`.
     */
    pow: (x: number, y: number) => number,
    /**
     * Returns the square (second power) of `x`.
     * @param {number} x A numeric expression.
     */
    sqed: (x: number) => number,
    /**
     * Returns the cube (third power) of `x`.
     * @param {number} x A numeric expression.
     */
    cbed: (x: number) => number,
    /**
     * Returns the quad (fourth) power of `x`.
     * @param {number} x A numeric expression.
     */
    qded: (x: number) => number,
    /**
     * Returns the quin (fifth) power of `x`.
     * @param {number} x A numeric expression.
     */
    qied: (x: number) => number,
    /**
     * Returns the `y` root of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The root for `x`.
     */
    root: (x: number, y: number) => number,
    /**
     * Returns the square (second) root of `x`.
     * @param {number} x A numeric expression.
     */
    sqrt: (x: number) => number,
    /**
     * Returns the cubic (third) root of `x`.
     * @param {number} x A numeric expression.
     */
    cbrt: (x: number) => number,
    /**
     * Returns the quad (fourth) root of `x`.
     * @param {number} x A numeric expression.
     */
    qdrt: (x: number) => number,
    /**
     * Returns the quin (fifth) root of `x`.
     * @param {number} x A numeric expression.
     */
    qirt: (x: number) => number,
    /**
     * Returns the absolute value of `x`.
     * @param {number} x A numeric expression.
     */
    abs: (x: number) => number,
    /**
     * Returns the factorial of `x`.
     * @param {number} x A numeric expression.
     */
    fact: (x: number) => number,
    /**
     * Returns the sum of a series over a given interval (Sigma Notation or Summation).
     * @param {number} x The starting number.
     * @param {number} y The ending number.
     * @param {number} z The calculation.
     */
    signot: (x: number, y: number, z: any) => number,
    /**
     * Returns the sign of the `x`, indicating whether `x` is positive, negative or zero.
     * @param {number} x A numeric expression.
     */
    sign: (x: number) => number,
    /**
     * Returns the `x` power of `e` (the base of natural logarithms).
     * @param {number} x A numeric expression representing the power of `e`.
     */
    exp: (x: number) => number,
    /**
     * Returns the result of `(e^x - 1)`, which is an implementation-dependent approximation to subtracting 1 from the exponential function of `x` (`e` to the `x` power, where `e` is the base of the natural logarithms).
     * @param {number} x A numeric expression.
     */
    expm1: (x: number) => number,
    /**
     * Returns the base-`y` logarithm of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The base for `x`.
     */
    logBase: (x: number, y: number) => number,
    /**
     * Returns the natural logarithm (base e) of `x`.
     * @param {number} x A numeric expression.
     */
    ln: (x: number) => number,
    /**
     * Returns the base-10 logarithm of `x`.
     * @param {number} x A numeric expression.
     */
    log10: (x: number) => number,
    /**
     * Returns the base-2 logarithm of `x`.
     * @param {number} x A numeric expression.
     */
    log2: (x: number) => number,
    /**
     * Returns the natural logarithm of 1 + `x`.
     * @param {number} x A numeric expression.
     */
    log1p: (x: number) => number,
    /** Trigonometric Functions */
    trig: {
        /**
         * Returns the sine of `x`.
         * @param {number} x A numeric expression.
         */
        sin: (x: number) => number,
        /**
         * Returns the cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cos: (x: number) => number,
        /**
         * Returns the tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tan: (x: number) => number,
        /**
         * Returns the hyperbolic sine of `x`.
         * @param {number} x A numeric expression.
         */
        sinh: (x: number) => number,
        /**
         * Returns the hyperbolic cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cosh: (x: number) => number,
        /**
         * Returns the hyperbolic tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tanh: (x: number) => number,
        /**
         * Returns the arcsine of `x`.
         * @param {number} x A numeric expression.
         */
        asin: (x: number) => number,
        /**
         * Returns the arc cosine (or inverse cosine) of `x`.
         * @param {number} x A numeric expression.
         */
        acos: (x: number) => number,
        /**
         * Returns the arctangent of `x`.
         * @param {number} x A numeric expression.
         */
        atan: (x: number) => number,
        /**
         * Returns the inverse hyperbolic sine of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        asinh: (x: number) => number,
        /**
         * Returns the inverse hyperbolic cosine of `x`.
         * **This is a work in progress and currently uses the default function.**
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acosh: (x: number) => number,
        /**
         * Returns the inverse hyperbolic tangent of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        atanh: (x: number) => number,
        /**
         * Returns the cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csc: (x: number) => number,
        /**
         * Returns the secant of `x`.
         * @param {number} x A numeric expression.
         */
        sec: (x: number) => number,
        /**
         * Returns the cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        cot: (x: number) => number,
        /**
         * Returns the hyperbolic cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csch: (x: number) => number,
        /**
         * Returns the hyperbolic secant of `x`.
         * @param {number} x A numeric expression.
         */
        sech: (x: number) => number,
        /**
         * Returns the hyperbolic cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        coth: (x: number) => number,
        /**
         * Returns the arc cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        acsc: (x: number) => number,
        /**
         * Returns the arcsecant of `x`.
         * @param {number} x A numeric expression.
         */
        asec: (x: number) => number,
        /**
         * Returns the arc cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        acot: (x: number) => number,
        /**
         * Returns the inverse hyperbolic cosecant of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acsch: (x: number) => number,
        /**
         * Returns the inverse hyperbolic secant of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        asech: (x: number) => number,
        /**
         * Returns the inverse hyperbolic cotangent of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acoth: (x: number) => number
    }
};

/** A simple math library that adds extra and useful functions to your project. */
export const YooMath: YooMath = {
    E: 2.7182818284590451,
    LN10: 2.302585092994046,
    LN2: .6931471805599453,
    LOG2E: 1.4426950408889634,
    LOG10E: .4342944819032518,
    PI: 3.1415926535897931,
    SQRT1_2: .7071067811865476,
    SQRT2: 1.4142135623730951,
    isNegative(x) { return x < 0 ? true : false; },
    pow(x, y) { return x ** y; },
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
    fact(x) { var f = 1; for (var i = x; i >= 1; i--) f = f * i; return f; },
    signot(x, y, z) { var s = 0, i = x; do { s += z(i); i++; } while(x < y); return s; },
    sign(x) { return x == 0 ? 0 : x > 0 ? 1 : -1; },
    exp(x) { return this.pow(this.E, x); },
    expm1(x) { return this.exp(x) - 1; },
    logBase(x, y) { return this.ln(x) / this.ln(y); },
    ln(x) { return Math.log(x); },
    log10(x) { return this.logBase(x, 10); },
    log2(x) { return this.logBase(x, 2); },
    log1p(x) {return this.ln(x) + 1; },
    trig: {
        sin(x) {
            return x - (YooMath.cbed(x) / YooMath.fact(3))
                + (YooMath.qied(x) / YooMath.fact(5))
                - (YooMath.pow(x, 7) / YooMath.fact(7))
                + (YooMath.pow(x, 9) / YooMath.fact(9))
                - (YooMath.pow(x, 11) / YooMath.fact(11))
                + (YooMath.pow(x, 13) / YooMath.fact(13))
                - (YooMath.pow(x, 15) / YooMath.fact(15))
                + (YooMath.pow(x, 17) / YooMath.fact(17))
                - (YooMath.pow(x, 19) / YooMath.fact(19))
                + (YooMath.pow(x, 21) / YooMath.fact(21));
        },
        cos(x) {
            return 1 - (YooMath.sqed(x) / YooMath.fact(2))
                + (YooMath.qded(x) / YooMath.fact(4))
                - (YooMath.pow(x, 6) / YooMath.fact(6))
                + (YooMath.pow(x, 8) / YooMath.fact(8))
                - (YooMath.pow(x, 10) / YooMath.fact(10))
                + (YooMath.pow(x, 12) / YooMath.fact(12))
                - (YooMath.pow(x, 14) / YooMath.fact(14))
                + (YooMath.pow(x, 16) / YooMath.fact(16))
                - (YooMath.pow(x, 18) / YooMath.fact(18))
                + (YooMath.pow(x, 20) / YooMath.fact(20));
        },
        tan(x) {
            return x + ((1 / 3) * YooMath.cbed(x))
                + ((2 / 15) * YooMath.qied(x))
                + ((17 / 315) * YooMath.pow(x, 7))
                + ((62 / 2835) * YooMath.pow(x, 9));
        },
        sinh(x) { return (YooMath.exp(x) - YooMath.exp(-YooMath.abs(x))) / 2; },
        cosh(x) { return (YooMath.exp(x) + YooMath.exp(-YooMath.abs(x))) / 2; },
        tanh(x) {
            return (YooMath.exp(x) - YooMath.exp(-YooMath.abs(x)))
                / (YooMath.exp(x) + YooMath.exp(-YooMath.abs(x)));
        },
        asin(x) {
            return x + ((1 / 2) * (YooMath.cbed(x) / 3))
                + (((1 * 3) / (2 * 4)) * (YooMath.qied(x) / 5))
                + (((1 * 3 * 5) / (2 * 4 * 6)) * (YooMath.pow(x, 7) / 7))
                + (((1 * 3 * 5 * 7) / (2 * 4 * 6 * 8)) * (YooMath.pow(x, 9) / 9))
                + (((1 * 3 * 5 * 7 * 9) / (2 * 4 * 6 * 8 * 10)) * (YooMath.pow(x, 11) / 11))
                + (((1 * 3 * 5 * 7 * 9 * 11) / (2 * 4 * 6 * 8 * 10 * 12)) * YooMath.pow(x, 13) / 13)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13) / (2 * 4 * 6 * 8 * 10 * 12 * 14)) * YooMath.pow(x, 15) / 15)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16)) * YooMath.pow(x, 17) / 17)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18)) * YooMath.pow(x, 19) / 19)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)) * YooMath.pow(x, 21) / 21);
        },
        acos(x) { return (YooMath.PI / 2) - this.asin(x); },
        atan(x) {
            return (YooMath.PI / 2)
                - (1 / x)
                + (1 / (YooMath.cbed(x) * 3))
                - (1 / (YooMath.qied(x) * 5))
                + (1 / (YooMath.pow(x, 7) * 7))
                - (1 / (YooMath.pow(x, 9) * 9))
                + (1 / (YooMath.pow(x, 11) * 11))
                - (1 / (YooMath.pow(x, 13) * 13))
                + (1 / (YooMath.pow(x, 15) * 15))
                - (1 / (YooMath.pow(x, 17) * 17));
        },
        asinh(x) {
            return x - ((1 / 2) * (YooMath.cbed(x) / 3))
                + (((1 * 3) / (2 * 4)) * (YooMath.qied(x) / 5))
                - (((1 * 3 * 5) / (2 * 4 * 6)) * (YooMath.pow(x, 7) / 7))
                + (((1 * 3 * 5 * 7) / (2 * 4 * 6 * 8)) * (YooMath.pow(x, 9) / 9))
                - (((1 * 3 * 5 * 7 * 9) / (2 * 4 * 6 * 8 * 10)) * (YooMath.pow(x, 11) / 11))
                + (((1 * 3 * 5 * 7 * 9 * 11) / (2 * 4 * 6 * 8 * 10 * 12)) * YooMath.pow(x, 13) / 13)
                - (((1 * 3 * 5 * 7 * 9 * 11 * 13) / (2 * 4 * 6 * 8 * 10 * 12 * 14)) * YooMath.pow(x, 15) / 15)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16)) * YooMath.pow(x, 17) / 17)
                - (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18)) * YooMath.pow(x, 19) / 19)
                + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)) * YooMath.pow(x, 21) / 21);
        },
        acosh(x) {
            return YooMath.ln(x * 2) - (
                (1 / ((YooMath.sqed(x) * 2) * 2))
                + ((1 * 3) / ((YooMath.qded(x) * 4) * 2 * 4))
                + ((1 * 3 * 5) / ((YooMath.pow(x, 6) * 6) * 2 * 4 * 6))
                + ((1 * 3 * 5 * 7) / ((YooMath.pow(x, 8) * 8) * 2 * 4 * 6 * 8))
                + ((1 * 3 * 5 * 7 * 9) / ((YooMath.pow(x, 10) * 10) * 2 * 4 * 6 * 8 * 10))
                + ((1 * 3 * 5 * 7 * 9 * 11) / ((YooMath.pow(x, 12) * 12) * 2 * 4 * 6 * 8 * 10 * 12))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13) / ((YooMath.pow(x, 14) * 14) * 2 * 4 * 6 * 8 * 10 * 12 * 14))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / ((YooMath.pow(x, 16) * 16) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / ((YooMath.pow(x, 18) * 18) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18))
                + ((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / ((YooMath.pow(x, 20) * 20) * 2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20))
            );
        },
        atanh(x) {
            return (YooMath.PI / 2)
                + (1 / x)
                + (1 / (YooMath.cbed(x) * 3))
                + (1 / (YooMath.qied(x) * 5))
                + (1 / (YooMath.pow(x, 7) * 7))
                + (1 / (YooMath.pow(x, 9) * 9))
                + (1 / (YooMath.pow(x, 11) * 11))
                + (1 / (YooMath.pow(x, 13) * 13))
                + (1 / (YooMath.pow(x, 15) * 15))
                + (1 / (YooMath.pow(x, 17) * 17));
        },
        csc(x) { return 1 / this.sin(x); },
        sec(x) { return 1 / this.cos(x); },
        cot(x) { return 1 / this.tan(x); },
        csch(x) { return 2 / (YooMath.exp(x) - YooMath.exp(-YooMath.abs(x))); },
        sech(x) { return 2 / (YooMath.exp(x) + YooMath.exp(-YooMath.abs(x))); },
        coth(x) {
            return (YooMath.exp(x) + YooMath.exp(-YooMath.abs(x)))
                / (YooMath.exp(x) - YooMath.exp(-YooMath.abs(x)));
        },
        acsc(x) { return this.asin(1 / x); },
        asec(x) { return this.acos(1 / x); },
        acot(x) { return (YooMath.PI / 2) - this.atan(x); },
        acsch(x) {
            return YooMath.LN2 - YooMath.ln(x)
                + (1 / 4) * YooMath.sqed(x)
                - (3 / 32) * YooMath.qded(x)
                + (5 / 96) * YooMath.pow(x, 6);
        },
        asech(x) {
            return YooMath.LN2 - YooMath.ln(x)
                - (1 / 4) * YooMath.sqed(x)
                - (3 / 32) * YooMath.qded(x)
                - (5 / 96) * YooMath.pow(x, 6);
        },
        acoth(x) {
            return (1 / x)
                + (1 / (YooMath.cbed(x) * 3))
                + (1 / (YooMath.qied(x) * 5))
                + (1 / (YooMath.pow(x, 7) * 7))
                + (1 / (YooMath.pow(x, 9) * 9))
                + (1 / (YooMath.pow(x, 11) * 11))
                + (1 / (YooMath.pow(x, 13) * 13))
                + (1 / (YooMath.pow(x, 15) * 15))
                + (1 / (YooMath.pow(x, 17) * 17))
                + (1 / (YooMath.pow(x, 19) * 19))
                + (1 / (YooMath.pow(x, 21) * 21));
        }
    }
}