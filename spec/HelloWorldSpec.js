describe("HelloWorld", function() {

    it("should return true when given 'Hello World' equals to 'Hello World'", function() {
       expect('Hello World').toBe('Hello World');
    });

    it("should return 'hi' when mocked 'hello'", function() {
        var helloWorld = new HelloWorld();
        spyOn(helloWorld, 'hello').and.returnValue('hi');

        expect(helloWorld.hello()).toBe('hi');
    });
});