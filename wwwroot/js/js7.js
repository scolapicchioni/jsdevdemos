// function sum(){

// }

// sum();

// var library = function module(){
//     var i;
//     function f(){}
//     return f;
// }();

// var library = module();

//constructor function
function Person(name, age, children){
    //with new
    //this === {};
    var self = this;

    this.name = name || "";
    this.age = age || 0;
    this.children = children || false;
    
    //with new
    //return this;

    //without new 
    //return undefined
}

Person.prototype.sayHi = function(){
    console.log("Hi from " + this.name);
}

// var p = Person();

// var p1 = new Person("Simona", 42, true);
// var p2 = new Person("Mario", 50, false);


// p1.sayHi();
// p2.sayHi();

function Customer(name, age, children){
    Person.call(this,name, age, children);
    this.products = [];
}

// function foo(){}
// foo.prototype = Person.prototype;
// Customer.prototype = new foo();

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.buyStuff = function () {

}

var c1 = new Customer("Mario");
//c1.name = "Stuff";
c1.sayHi();

class VIPCustomer extends Customer{
    
}