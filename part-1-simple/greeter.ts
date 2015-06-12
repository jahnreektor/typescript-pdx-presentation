class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};
var greeter: Greeter = new Greeter("Hello, TypescriptPDX!");
var str = greeter.greet();
document.body.innerHTML = str;
