var tape = require("tape"),
    mathf = require("..");


tape("mathf.equals(a, b, e)", function(assert) {
    assert.equals(mathf.equals(0, 0), true);
    assert.end();
});

tape("mathf.modulo(a, b)", function(assert) {
    assert.equals(mathf.modulo(3, 2), 1);
    assert.end();
});

tape("mathf.snap(x, y)", function(assert) {
    assert.equals(mathf.snap(175, 45), 180);
    assert.end();
});

tape("mathf.fac(n)", function(assert) {
    assert.equals(mathf.fac(0), 1);
    assert.equals(mathf.fac(2), 2);
    assert.equals(mathf.fac(5), 120);
    assert.end();
});
