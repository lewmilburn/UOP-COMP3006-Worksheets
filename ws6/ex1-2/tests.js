// Your tests go in this file.

suite("sayHello", () => {
    test("Hello Mark", () => {
        chai.assert.equal(sayHello("Mark"), "Hello Mark");
    });
});
