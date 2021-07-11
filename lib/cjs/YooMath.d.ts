interface YooMath {
    /** The mathematical constant `e`. This is Euler's number, the base of natural logarithms. */
    readonly E: number;
    /** The natural logarithm of `10`. */
    readonly LN10: number;
    /** The natural logarithm of `2`. */
    readonly LN2: number;
    /** The base-2 logarithm of `e`. */
    readonly LOG2E: number;
    /** The base-10 logarithm of `e`. */
    readonly LOG10E: number;
    /** Also known as `π`. This is the ratio of the circumference of a circle to its diameter. */
    readonly PI: number;
    /** The square root of `.5`, or, equivalently, one divided by the square root of `2`. */
    readonly SQRT1_2: number;
    /** The square root of `2`. */
    readonly SQRT2: number;
    /** Also known as `φ` (the Greek letter "phi"). The golden ratio, which people also call the golden proportion or golden section, is the calculation you obtain from two segment lengths with the same portion of their sum to the larger sum of two lengths. */
    readonly GR: number;
    /**
     * Returns true if `x` is negative.
     * @param {number} x A numeric expression.
     */
    isNegative: (x: number) => boolean;
    /**
     * Returns the `y` power of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The power for `x`.
     */
    pow: (x: number, y: number) => number;
    /**
     * Returns the square (second power) of `x`.
     * @param {number} x A numeric expression.
     */
    sqed: (x: number) => number;
    /**
     * Returns the cube (third power) of `x`.
     * @param {number} x A numeric expression.
     */
    cbed: (x: number) => number;
    /**
     * Returns the quad (fourth) power of `x`.
     * @param {number} x A numeric expression.
     */
    qded: (x: number) => number;
    /**
     * Returns the quin (fifth) power of `x`.
     * @param {number} x A numeric expression.
     */
    qied: (x: number) => number;
    /**
     * Returns the `y` root of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The root for `x`.
     */
    root: (x: number, y: number) => number;
    /**
     * Returns the square (second) root of `x`.
     * @param {number} x A numeric expression.
     */
    sqrt: (x: number) => number;
    /**
     * Returns the cubic (third) root of `x`.
     * @param {number} x A numeric expression.
     */
    cbrt: (x: number) => number;
    /**
     * Returns the quad (fourth) root of `x`.
     * @param {number} x A numeric expression.
     */
    qdrt: (x: number) => number;
    /**
     * Returns the quin (fifth) root of `x`.
     * @param {number} x A numeric expression.
     */
    qirt: (x: number) => number;
    /**
     * Returns the absolute value of `x`.
     * @param {number} x A numeric expression.
     */
    abs: (x: number) => number;
    /**
     * Returns the factorial of `x`.
     * @param {number} x A numeric expression.
     */
    fact: (x: number) => number;
    /**
     * Returns the sum of a series over a given interval (Sigma Notation or Summation).
     * @param {number} x The starting number.
     * @param {number} y The ending number.
     * @param {number} z The calculation.
     */
    signot: (x: number, y: number, z: any) => number;
    /**
     * Returns the sign of the `x`, indicating whether `x` is positive, negative or zero.
     * @param {number} x A numeric expression.
     */
    sign: (x: number) => number;
    /**
     * Returns the `x` power of `e` (the base of natural logarithms).
     * @param {number} x A numeric expression representing the power of `e`.
     */
    exp: (x: number) => number;
    /**
     * Returns the result of `(e^x - 1)`, which is an implementation-dependent approximation to subtracting 1 from the exponential function of `x` (`e` to the `x` power, where `e` is the base of the natural logarithms).
     * @param {number} x A numeric expression.
     */
    expm1: (x: number) => number;
    /**
     * Returns the base-`y` logarithm of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The base for `x`.
     */
    logBase: (x: number, y: number) => number;
    /**
     * Returns the natural logarithm (base e) of `x`.
     * @param {number} x A numeric expression.
     */
    ln: (x: number) => number;
    /**
     * Returns the base-10 logarithm of `x`.
     * @param {number} x A numeric expression.
     */
    log10: (x: number) => number;
    /**
     * Returns the base-2 logarithm of `x`.
     * @param {number} x A numeric expression.
     */
    log2: (x: number) => number;
    /**
     * Returns the natural logarithm of 1 + `x`.
     * @param {number} x A numeric expression.
     */
    log1p: (x: number) => number;
    /** Trigonometric Functions */
    trig: {
        /**
         * Returns the sine of `x`.
         * @param {number} x A numeric expression.
         */
        sin: (x: number) => number;
        /**
         * Returns the cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cos: (x: number) => number;
        /**
         * Returns the tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tan: (x: number) => number;
        /**
         * Returns the hyperbolic sine of `x`.
         * @param {number} x A numeric expression.
         */
        sinh: (x: number) => number;
        /**
         * Returns the hyperbolic cosine of `x`.
         * @param {number} x A numeric expression.
         */
        cosh: (x: number) => number;
        /**
         * Returns the hyperbolic tangent of `x`.
         * @param {number} x A numeric expression.
         */
        tanh: (x: number) => number;
        /**
         * Returns the arcsine of `x`.
         * @param {number} x A numeric expression.
         */
        asin: (x: number) => number;
        /**
         * Returns the arc cosine (or inverse cosine) of `x`.
         * @param {number} x A numeric expression.
         */
        acos: (x: number) => number;
        /**
         * Returns the arctangent of `x`.
         * @param {number} x A numeric expression.
         */
        atan: (x: number) => number;
        /**
         * Returns the inverse hyperbolic sine of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        asinh: (x: number) => number;
        /**
         * Returns the inverse hyperbolic cosine of `x`.
         * **This is a work in progress and currently uses the default function.**
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acosh: (x: number) => number;
        /**
         * Returns the inverse hyperbolic tangent of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        atanh: (x: number) => number;
        /**
         * Returns the cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csc: (x: number) => number;
        /**
         * Returns the secant of `x`.
         * @param {number} x A numeric expression.
         */
        sec: (x: number) => number;
        /**
         * Returns the cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        cot: (x: number) => number;
        /**
         * Returns the hyperbolic cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        csch: (x: number) => number;
        /**
         * Returns the hyperbolic secant of `x`.
         * @param {number} x A numeric expression.
         */
        sech: (x: number) => number;
        /**
         * Returns the hyperbolic cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        coth: (x: number) => number;
        /**
         * Returns the arc cosecant of `x`.
         * @param {number} x A numeric expression.
         */
        acsc: (x: number) => number;
        /**
         * Returns the arcsecant of `x`.
         * @param {number} x A numeric expression.
         */
        asec: (x: number) => number;
        /**
         * Returns the arc cotangent of `x`.
         * @param {number} x A numeric expression.
         */
        acot: (x: number) => number;
        /**
         * Returns the inverse hyperbolic cosecant of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acsch: (x: number) => number;
        /**
         * Returns the inverse hyperbolic secant of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        asech: (x: number) => number;
        /**
         * Returns the inverse hyperbolic cotangent of `x`.
         * @param {number} x A numeric expression that contains an angle measured in radians.
         */
        acoth: (x: number) => number;
    };
}
/** A simple math library that adds extra and useful functions to your project. */
export declare const YooMath: YooMath;
export {};
