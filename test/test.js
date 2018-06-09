function add(a, b)
{
    return a + b;
}

QUnit.test("sample_Test", function(assert) {
    var val = add(4, 5);

    assert.equal(val, 9);
});