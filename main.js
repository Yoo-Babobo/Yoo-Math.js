/**
 * The future of math.
 */
const YooMath = {
    /**
     * The mathematical constant `e`. This is Euler's number, the base of natural logarithms.
     */
    E: 2.7182818284590451,
    
    /**
     * Also known as `π`. This is the ratio of the circumference of a circle to its diameter.
     */
    PI: 3.1415926535897931,

    /**
     * Returns true if `x` is negative.
     * @param {number} x A numeric expression.
     */
    isNegative: (x) => { if (x < 0) return true; else return false; },

    /**
     * Returns the `y` power of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The power for `x`.
     */
    pow: (x, y) => { return x ** y; },

    /**
     * Returns the `y` root of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The root for `x`.
     */
    root: (x, y) => { return YooMath.pow(x, 1 / y); },
    
    /**
     * Returns the square root of `x`.
     * @param {number} x A numeric expression.
     */
    sqrt: (x) => { return YooMath.root(x, 2); },

    /**
     * Returns the cubic root of `x`.
     * @param {number} x A numeric expression.
     */
    cbrt: (x) => { return YooMath.root(x, 3); },

    /**
     * Returns the quad root of `x`.
     * @param {number} x A numeric expression.
     */
    qdrt: (x) => { return YooMath.root(x, 4); },

    /**
     * Returns the quintuple root of `x`.
     * @param {number} x A numeric expression.
     */
    qirt: (x) => { return YooMath.root(x, 5); },

    /**
     * Returns the absolute value of `x`.
     * @param {number} x A numeric expression.
     */
    abs: (x) => {
        if (YooMath.isNegative(x)) return parseInt(x.toString().replace("-", ""));
        else return x;
    },

    /**
     * Returns the factorial of `x`.
     * @param {number} x A numeric expression.
     */
    fact: (x) => {
        var f = 1;
        for(var i = x; i >= 1; i--) f = f * i;
        return f;
    },
    
    /**
     * Trigonometric Functions
     */
    trig: {
        /**
         * Returns the sine of `x`.
         * @param {number} x A numeric expression.
         */
        sin: (x) => {
            return x - (YooMath.pow(x, 3) / YooMath.fact(3))
            + (YooMath.pow(x, 5) / YooMath.fact(5))
            - (YooMath.pow(x, 7) / YooMath.fact(7))
            + (YooMath.pow(x, 9) / YooMath.fact(9))
            - (YooMath.pow(x, 11) / YooMath.fact(11))
            + (YooMath.pow(x, 13) / YooMath.fact(13))
            - (YooMath.pow(x, 15) / YooMath.fact(15))
            + (YooMath.pow(x, 17) / YooMath.fact(17))
            - (YooMath.pow(x, 19) / YooMath.fact(19))
            + (YooMath.pow(x, 21) / YooMath.fact(21));
        },

        /**
         * Returns the cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cos: (x) => {
            return 1 - (YooMath.pow(x, 2) / YooMath.fact(2))
            + (YooMath.pow(x, 4) / YooMath.fact(4))
            - (YooMath.pow(x, 6) / YooMath.fact(6))
            + (YooMath.pow(x, 8) / YooMath.fact(8))
            - (YooMath.pow(x, 10) / YooMath.fact(10))
            + (YooMath.pow(x, 12) / YooMath.fact(12))
            - (YooMath.pow(x, 14) / YooMath.fact(14))
            + (YooMath.pow(x, 16) / YooMath.fact(16))
            - (YooMath.pow(x, 18) / YooMath.fact(18))
            + (YooMath.pow(x, 20) / YooMath.fact(20));
        },

        /**
         * Returns the tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tan: (x) => {
            return x + ((1 / 3) * YooMath.pow(x, 3))
            + ((2 / 15) * YooMath.pow(x, 5))
            + ((17 / 315) * YooMath.pow(x, 7))
            + ((62 / 2835) * YooMath.pow(x, 9));
        },

        /**
         * Returns the hyperbolic sine of `x`.
         * @param {number} x A numeric expression.
         */
        sinh: (x) => {
            return (YooMath.pow(YooMath.E, x) - YooMath.pow(YooMath.E, -YooMath.abs(x))) / 2;
        },

        /**
         * Returns the hyperbolic cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cosh: (x) => {
            return (YooMath.pow(YooMath.E, x) + YooMath.pow(YooMath.E, -YooMath.abs(x))) / 2;
        },

        /**
         * Returns the hyperbolic tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tanh: (x) => {
            return (YooMath.pow(YooMath.E, x) - YooMath.pow(YooMath.E, -YooMath.abs(x)))
            / (YooMath.pow(YooMath.E, x) + YooMath.pow(YooMath.E, -YooMath.abs(x)));
        },

        /**
         * Returns the arcsine of `x`.
         * @param {number} x A numeric expression.
         */
        asin: (x) => {
            return x + ((1 / 2) * (YooMath.pow(x, 3) / 3))
            + (((1 * 3) / (2 * 4)) * (YooMath.pow(x, 5) / 5))
            + (((1 * 3 * 5) / (2 * 4 * 6)) * (YooMath.pow(x, 7) / 7))
            + (((1 * 3 * 5 * 7) / (2 * 4 * 6 * 8)) * (YooMath.pow(x, 9) / 9))
            + (((1 * 3 * 5 * 7 * 9) / (2 * 4 * 6 * 8 * 10)) * (YooMath.pow(x, 11) / 11))
            + (((1 * 3 * 5 * 7 * 9 * 11) / (2 * 4 * 6 * 8 * 10 * 12)) * YooMath.pow(x, 13) / 13)
            + (((1 * 3 * 5 * 7 * 9 * 11 * 13) / (2 * 4 * 6 * 8 * 10 * 12 * 14)) * YooMath.pow(x, 15) / 15)
            + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16)) * YooMath.pow(x, 17) / 17)
            + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18)) * YooMath.pow(x, 19) / 19)
            + (((1 * 3 * 5 * 7 * 9 * 11 * 13 * 15 * 17 * 19) / (2 * 4 * 6 * 8 * 10 * 12 * 14 * 16 * 18 * 20)) * YooMath.pow(x, 21) / 21);
        },

        /**
         * Returns the arc cosine (or inverse cosine) of `x`.
         * @param {number} x A numeric expression.
         */
        acos: (x) => {
            return (YooMath.PI / 2) - YooMath.trig.asin(x);
        },

        /**
         * Returns the arctangent of `x`.
         * @param {number} x A numeric expression.
         */
        atan: (x) => {
            return (YooMath.PI / 2)
            - (1 / x)
            + (1 / (YooMath.pow(x, 3) * 3))
            - (1 / (YooMath.pow(x, 5) * 5))
            + (1 / (YooMath.pow(x, 7) * 7))
            - (1 / (YooMath.pow(x, 9) * 9))
            + (1 / (YooMath.pow(x, 11) * 11))
            - (1 / (YooMath.pow(x, 13) * 13))
            + (1 / (YooMath.pow(x, 15) * 15))
            - (1 / (YooMath.pow(x, 17) * 17));
        },

        /**
         * Returns the inverse hyperbolic sine of `x`.
         * **This is a work in progress and currently uses the default function.**
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        asinh: (x) => {
            return Math.asinh(x);
        },

        /**
         * Returns the inverse hyperbolic cosine of `x`.
         * **This is a work in progress and currently uses the default function.**
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acosh: (x) => {
            return Math.acosh(x);
        },

        /**
         * Returns the inverse hyperbolic tangent of `x`.
         * **This is a work in progress and currently uses the default function.**
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        atanh: (x) => {
            return Math.atanh(x);
        },

        /**
         * Returns the cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csc: (x) => {
            return 1 / YooMath.trig.sin(x);
        },

        /**
         * Returns the secant of `x`.
         * @param {number} x A numeric expression.
         */
        sec: (x) => {
            return 1 / YooMath.trig.cos(x);
        },

        /**
         * Returns the cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        cot: (x) => {
            return 1 / YooMath.trig.tan(x);
        },

        /**
         * Returns the hyperbolic cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csch: (x) => {
            return 2 / (YooMath.pow(YooMath.E, x) - YooMath.pow(YooMath.E, -YooMath.abs(x)));
        },

        /**
         * Returns the hyperbolic secant of `x`.
         * @param {number} x A numeric expression.
         */
        sech: (x) => {
            return 2 / (YooMath.pow(YooMath.E, x) + YooMath.pow(YooMath.E, -YooMath.abs(x)));
        },

        /**
         * Returns the hyperbolic cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        coth: (x) => {
            return (YooMath.pow(YooMath.E, x) + YooMath.pow(YooMath.E, -YooMath.abs(x)))
            / (YooMath.pow(YooMath.E, x) - YooMath.pow(YooMath.E, -YooMath.abs(x)));
        },
    },
}