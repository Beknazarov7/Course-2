function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { name: 'John', info: { age: 30, city: 'Liverpool' } };
const clone = deepClone(original);

console.log(clone);
