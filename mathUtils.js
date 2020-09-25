export function add(thingOne, thingTwo) {
    return thingOne + thingTwo;
}

export function sub(thingOne, thingTwo) {
    return thingOne - thingTwo;
}

export function mul(thingOne, thingTwo) {
    return thingOne * thingTwo;
}

export function div(thingOne, thingTwo) {
    return thingOne / thingTwo;
}

// the benefits of testing
// if someone in the future changes the behavior of the function, the tests won't pass
// if you have github set up right, then passing tests is a requirement of merging code into master
