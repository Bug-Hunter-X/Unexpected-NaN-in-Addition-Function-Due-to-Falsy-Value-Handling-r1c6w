# JavaScript Falsy Value Handling Bug

This repository demonstrates a common JavaScript bug related to handling falsy values in a simple addition function.

The `foo` function is intended to add two numbers. However, it incorrectly only checks for strict equality (`===`) with 0 and does not account for other falsy values (e.g., `false`, `''`, `null`, `undefined`). This leads to unexpected `NaN` results when one of the inputs is a falsy value other than 0.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version that addresses the issue using a more robust falsy value check.