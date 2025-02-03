# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript addition function caused by type coercion. The function incorrectly handles the case where one or both of the inputs are 0 (zero).

## Bug Description

The `foo` function is designed to add two numbers. However, due to the use of strict equality (`===`), if either input is 0, the function treats it as `null` and returns `null` instead of performing the addition.

## Solution

The solution addresses this by explicitly checking for numeric type before performing the addition. This eliminates the unintended behavior when an input is 0.