<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function lsolveAll

Finds all solutions of a linear equation system by forwards substitution. Matrix must be a lower triangular matrix.

`L * x = b`


## Syntax

```js
math.lsolve(L, b)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`L` | Matrix, Array | A N x N matrix or array (L)
`b` | Matrix, Array | A column vector with the b values

### Returns

Type | Description
---- | -----------
DenseMatrix[] &#124; Array[] | An array of affine-independent column vectors (x) that solve the linear system


## Examples

```js
const a = [[-2, 3], [2, 1]]
const b = [11, 9]
const x = lsolve(a, b)  // [ [[-5.5], [20]] ]
```


## See also

[lsolve](lsolve.md),
[lup](lup.md),
[slu](slu.md),
[usolve](usolve.md),
[lusolve](lusolve.md)