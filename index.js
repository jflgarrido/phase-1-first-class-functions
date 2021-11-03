const chai = "chai";
const spies = "chai-spies"

function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function hello(){ return 7 };
}

function returnsAnAnonymousFunction() {
    return function () { 1 + 1};
}
