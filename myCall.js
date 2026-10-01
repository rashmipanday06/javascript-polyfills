Function.prototype.myCall=function (thisArgs, ...args) {
    let context= thisArgs || globalThis;
    let key= Symbol();
    context[key]=this;
    const result=context[key](...args);
    delete context[key];
    return result
}

function print(greet) {
    console.log(this.name, greet);
}

const person={name: 'John'};

print.myCall(person, "hello");