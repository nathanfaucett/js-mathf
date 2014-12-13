var utils = require("utils");


var mathf = module.exports;


mathf.ArrayType = typeof(Float32Array) !== "undefined" ? Float32Array : Array;

mathf.PI = Math.PI;
mathf.TAU = mathf.PI * 2;
mathf.TWO_PI = mathf.TAU;
mathf.HALF_PI = mathf.PI * 0.5;
mathf.FOURTH_PI = mathf.PI * 0.25;

mathf.EPSILON = 0.000001;

mathf.TO_RADS = mathf.PI / 180;
mathf.TO_DEGS = 180 / mathf.PI;

mathf.E = Math.E;
mathf.LN2 = Math.LN2;
mathf.LN10 = Math.LN10;
mathf.LOG2E = Math.LOG2E;
mathf.LOG10E = Math.LOG10E;
mathf.SQRT1_2 = Math.SQRT1_2;
mathf.SQRT2 = Math.SQRT2;

mathf.abs = Math.abs;

mathf.acos = Math.acos;
mathf.acosh = Math.acosh || (Math.acosh = function acosh(x) {
    return Math.log(x + Math.sqrt(x * x - 1));
});
mathf.asin = Math.asin;
mathf.asinh = Math.asinh || (Math.asinh = function asinh(x) {
    if (x === -Infinity) {
        return x;
    } else {
        return Math.log(x + Math.sqrt(x * x + 1));
    }
});
mathf.atan = Math.atan;
mathf.atan2 = Math.atan2;
mathf.atanh = Math.atanh || (Math.atanh = function atanh(x) {
    return Math.log((1 + x) / (1 - x)) / 2;
});

mathf.cbrt = Math.cbrt || (Math.cbrt = function cbrt(x) {
    var y = mathf.pow(mathf.abs(x), 1 / 3);
    return x < 0 ? -y : y;
});
mathf.ceil = Math.ceil;
mathf.cos = Math.cos;
mathf.cosh = Math.cosh || (Math.cosh = function cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
});

mathf.exp = Math.exp;

mathf.floor = Math.floor;
mathf.fround = Math.fround || (Math.fround = function fround(x) {
    return x;
});

mathf.log = Math.log;
mathf.log10 = Math.log10 || (Math.log10 = function log10(x) {
    return Math.log(x) / Math.LN10;
});

mathf.max = Math.max;
mathf.min = Math.min;

mathf.pow = Math.pow;

mathf.random = Math.random;
mathf.round = Math.round;

mathf.sin = Math.sin;
mathf.sinh = Math.sinh || (Math.sinh = function sinh(x) {
    return (Math.exp(x) - Math.exp(-x)) / 2;
});
mathf.sqrt = Math.sqrt;

mathf.tan = Math.tan;
mathf.tanh = Math.tanh || (Math.tanh = function tanh(x) {
    if (x === Infinity) {
        return 1;
    } else if (x === -Infinity) {
        return -1;
    } else {
        return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
    }
});

mathf.equals = function(a, b, e) {

    return mathf.abs(a - b) < (e !== undefined ? e : mathf.EPSILON);
};

mathf.modulo = function(a, b) {
    var r = a % b;

    return (r * b < 0) ? r + b : r;
};

mathf.standardRadian = function(x) {

    return mathf.modulo(x, mathf.TWO_PI);
};

mathf.standardAngle = function(x) {

    return mathf.modulo(x, 360);
};

mathf.sign = function(x) {

    return x < 0 ? -1 : 1;
};

mathf.snap = function(x, y) {
    var m = x % y;

    return m < y ? x - m : x + y - m;
};

mathf.clamp = function(x, min, max) {

    return x < min ? min : x > max ? max : x;
};

mathf.clampBottom = function(x, min) {

    return x < min ? min : x;
};

mathf.clampTop = function(x, max) {

    return x > max ? max : x;
};

mathf.clamp01 = function(x) {

    return x < 0 ? 0 : x > 1 ? 1 : x;
};

mathf.truncate = function(x, n) {
    var p = mathf.pow(10, n),
        num = x * p;

    return (num < 0 ? mathf.ceil(num) : mathf.floor(num)) / p;
};

mathf.lerp = function(a, b, x) {

    return a + (b - a) * x;
};

mathf.lerpRadian = function(a, b, x) {

    return mathf.standardRadian(a + (b - a) * x);
};

mathf.lerpAngle = function(a, b, x) {

    return mathf.standardAngle(a + (b - a) * x);
};

mathf.lerpCos = function(a, b, x) {
    var ft = x * mathf.PI,
        f = (1 - mathf.cos(ft)) * 0.5;

    return a * (1 - f) + b * f;
};

mathf.lerpCubic = function(v0, v1, v2, v3, x) {
    var P, Q, R, S, Px, Qx, Rx;

    v0 || (v0 = v1);
    v3 || (v3 = v2);

    P = (v3 - v2) - (v0 - v1);
    Q = (v0 - v1) - P;
    R = v2 - v0;
    S = v1;

    Px = P * x;
    Qx = Q * x;
    Rx = R * x;

    return (Px * Px * Px) + (Qx * Qx) + Rx + S;
};

mathf.smoothStep = function(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;

    x = (x - min) / (max - min);

    return x * x * (3 - 2 * x);
};

mathf.smootherStep = function(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;

    x = (x - min) / (max - min);

    return x * x * x * (x * (x * 6 - 15) + 10);
};

mathf.pingPong = function(x, length) {
    length || (length = 1);

    return length - mathf.abs(x % (2 * length) - length);
};

mathf.degsToRads = function(x) {

    return mathf.standardRadian(x * mathf.TO_RADS);
};

mathf.radsToDegs = function(x) {

    return mathf.standardAngle(x * mathf.TO_DEGS);
};

mathf.randInt = function(min, max) {

    return mathf.round(min + (mathf.random() * (max - min)));
};

mathf.randFloat = function(min, max) {

    return min + (mathf.random() * (max - min));
};

mathf.randSign = function() {

    return mathf.random() < 0.5 ? 1 : -1;
};

mathf.shuffle = function(array) {
    var i = array.length,
        j, x;

    while (i) {
        j = (mathf.random() * i--) | 0;
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};

mathf.randArg = function() {

    return arguments[(mathf.random() * arguments.length) | 0];
};

mathf.randChoice = function(array) {

    return array[(mathf.random() * array.length) | 0];
};

mathf.randChoiceObject = function(object) {
    var keys = utils.keys(object);

    return object[keys[(mathf.random() * keys.length) | 0]];
};

mathf.isPowerOfTwo = function(x) {

    return (x & -x) === x;
};

mathf.floorPowerOfTwo = function(x) {
    var i = 2,
        prev;

    while (i < x) {
        prev = i;
        i *= 2;
    }

    return prev;
};

mathf.ceilPowerOfTwo = function(x) {
    var i = 2;

    while (i < x) {
        i *= 2;
    }

    return i;
};

var n225 = 0.39269908169872414,
    n675 = 1.1780972450961724,
    n1125 = 1.9634954084936207,
    n1575 = 2.748893571891069,
    n2025 = 3.5342917352885173,
    n2475 = 4.319689898685966,
    n2925 = 5.105088062083414,
    n3375 = 5.8904862254808625,

    RIGHT = "right",
    UP_RIGHT = "up_right",
    UP = "up",
    UP_LEFT = "up_left",
    LEFT = "left",
    DOWN_LEFT = "down_left",
    DOWN = "down",
    DOWN_RIGHT = "down_right";

mathf.directionAngle = function(a) {
    a = mathf.standardRadian(a);

    if (a >= n3375 && a < n225) return RIGHT;
    if (a >= n225 && a < n675) return UP_RIGHT;
    if (a >= n675 && a < n1125) return UP;
    if (a >= n1125 && a < n1575) return UP_LEFT;
    if (a >= n1575 && a < n2025) return LEFT;
    if (a >= n2025 && a < n2475) return DOWN_LEFT;
    if (a >= n2475 && a < n2925) return DOWN;
    if (a >= n2925 && a < n3375) return DOWN_RIGHT;

    return RIGHT;
};

mathf.direction = function(x, y) {
    var a = mathf.standardRadian(mathf.atan2(y, x));

    if (a >= n3375 && a < n225) return RIGHT;
    if (a >= n225 && a < n675) return UP_RIGHT;
    if (a >= n675 && a < n1125) return UP;
    if (a >= n1125 && a < n1575) return UP_LEFT;
    if (a >= n1575 && a < n2025) return LEFT;
    if (a >= n2025 && a < n2475) return DOWN_LEFT;
    if (a >= n2475 && a < n2925) return DOWN;
    if (a >= n2925 && a < n3375) return DOWN_RIGHT;

    return RIGHT;
};