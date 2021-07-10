# Yoo-Math.js
A simple math library that adds extra and useful functions to your project.
## Install
You can use NPM to install Yoo-Math.js.
```
npm i @yoo-babobo/yoo-math.js
```
Or you can load it from the browser:
```html
<!-- Download Yoo-Math.js -->
<script src="Yoo-Math.js"></script>

<!-- Always have the latest version -->
<script src="https://www.math.yoo-babobo.com/packages/Yoo-Math.js"></script>
<!-- Minified version -->
<script src="https://www.math.yoo-babobo.com/packages/Yoo-Math.min.js"></script>
```
If you want to download Yoo-Math.js, then download it from [/lib/cjs/YooMath.js](https://github.com/Yoo-Babobo/Yoo-Math.js/blob/main/lib/cjs/YooMath.js) and name it what you want.
## Usage
Yoo-Math.js is easy to set up.
```html
<script src="Yoo-Math.js"></script>
<script>
  console.log(YooMath.PI); // 3.1415926535897931
  console.log(YooMath.trig.sin(57 / 180 * YooMath.PI)); // 0.8386705679454242
</script>
```
Or if your using NPM:
```javascript
const YooMath = require("@yoo-babobo/yoo-math.js").YooMath;

console.log(YooMath.PI); // 3.1415926535897931
console.log(YooMath.trig.sin(57 / 180 * YooMath.PI)); // 0.8386705679454242
```