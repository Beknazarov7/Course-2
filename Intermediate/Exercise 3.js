let myObject = {
    name: "Initial Name"
};

myObject.age = 25;

myObject.name = "Updated Name";

delete myObject.age;

console.log(myObject);
