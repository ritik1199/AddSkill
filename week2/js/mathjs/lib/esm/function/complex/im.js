import { factory } from '../../utils/factory.js';
import { deepMap } from '../../utils/collection.js';
var name = 'im';
var dependencies = ['typed'];
export var createIm = /* #__PURE__ */factory(name, dependencies, (_ref) => {
  var {
    typed
  } = _ref;

  /**
   * Get the imaginary part of a complex number.
   * For a complex number `a + bi`, the function returns `b`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.im(x)
   *
   * Examples:
   *
   *    const a = math.complex(2, 3)
   *    math.re(a)                     // returns number 2
   *    math.im(a)                     // returns number 3
   *
   *    math.re(math.complex('-5.2i')) // returns number -5.2
   *    math.re(math.complex(2.4))     // returns number 0
   *
   * See also:
   *
   *    re, conj, abs, arg
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Array | Matrix} The imaginary part of x
   */
  return typed(name, {
    number: function number(x) {
      return 0;
    },
    BigNumber: function BigNumber(x) {
      return x.mul(0);
    },
    Complex: function Complex(x) {
      return x.im;
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, this);
    }
  });
});