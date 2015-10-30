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
