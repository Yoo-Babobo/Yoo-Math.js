interface YooMath {
    /**
     * The mathematical constant `e`. This is Euler's number, the base of natural logarithms.
     */
    E: 2.7182818284590451;
    /**
     * Also known as `π`. This is the ratio of the circumference of a circle to its diameter.
     */
    PI: 3.1415926535897931;
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
     * Returns the `y` root of `x`.
     * @param {number} x A numeric expression.
     * @param {number} y The root for `x`.
     */
    root: (x: number, y: number) => number;
    /**
     * Returns the square root of `x`.
     * @param {number} x A numeric expression.
     */
    sqrt: (x: number) => number;
    /**
     * Returns the cubic root of `x`.
     * @param {number} x A numeric expression.
     */
    cbrt: (x: number) => number;
    /**
     * Returns the quad root of `x`.
     * @param {number} x A numeric expression.
     */
    qdrt: (x: number) => number;
    /**
     * Returns the quintuple root of `x`.
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
     * Trigonometric Functions
     */
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
         * **This is a work in progress and currently uses the default function.**
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
         * **This is a work in progress and currently uses the default function.**
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
    };
}
/**
 * A simple math library that adds extra functions to your project.
 */
export declare const YooMath: YooMath;
export {};
