// Your tests go in this file.

suite("Calculator suite", () => {
    suiteSetup(function() {
        self.x = [1, 2, 3, 4, 5];
        self.y = [2, 4, 6, 8, 10];
        self.addResult = [3, 6, 9, 12, 15];
        self.mulResult = [2, 8, 18, 32, 50];
    });
    test("Addition test", () => {
        for (let i=0; i < self.x.length; i++) {
            chai.assert.equal(add(self.x[i], self.y[i]), self.addResult[i]);
        }
    });
    test("Multiplication test", () => {
        for (let i=0; i < self.x.length; i++) {
            chai.assert.equal(mul(self.x[i], self.y[i]), self.mulResult[i]);
        }
    });
});

suite("CSS suite", () => {
    test("Result background colour", () => {
        chai.assert.equal(rgb2hex($('#result').css('background-color')), '#ffffff');
    });
    test("Result text size", () => {
        chai.assert.equal($('#result').css('font-size'), '20px');
    });
});