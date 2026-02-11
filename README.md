# 🎲 Simple Random Number Generator

A minimalist, high-contrast web tool designed to generate a single random integer within a user-defined range. 

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Git](https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)

## ✨ Updates
* **Refined Focus:** Optimized the logic to provide one clear, random result.
* **DOM Integration:** Results now render directly to the UI instead of just the console.
* **Flexbox Layout:** Centered UI elements for a cleaner user experience.

## 🚀 How to Use
1. Enter your desired maximum range in the input field.
2. Click the **Generate** button.
3. Your random number will appear instantly below the button.

## 🛠️ Technical Implementation
The core logic resides in the `onclick` event listener:
```javascript
// Captures input, converts to a Number, and rounds the Math.random result
randomnum1 = Math.floor(Math.random() * x) + 1;
document.getElementById("label1").textContent = randomnum1;
