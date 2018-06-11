arr1 = ['u',['v','w'],['w','z'],['x','u'],['y','z'],'z'];
arr2 = ['x'];
arr3 = ['y',['x','z'],'z'];

QUnit.test("handles dependency", function(assert) {
    var val = HolidayPlanner([
        'x',
        ['y', 'z'],
        'z'
    ]);

    assert.equal(val, 'xzy');
});