var o = {
    name : "Simona",
    surname : "Colapicchioni",
    get fullName(){
        return this.name + " " + this.surname;
    },
    set fullName(value){

    },
    age : 42,
    children : true,
    sayHi : function(){
        console.log(this.name);
    }
};

o.name = "Mario";
o["age"] = 30;

o.children = [];

o.address = "";

console.log(o.something);

delete o.name;

console.log(o.fullName);
o.fullName = "Mario Rossi";

//arrays

var a1 = [];

console.log(a1.length);

a1[0] = "hi";

console.log(a1.length);

a1[10] = "hi";

console.log(a1.length);

a1.length = 0;

a1.length = 100;

a1[a1.length] = "new element";
a1.push("new element");

delete a1[a1.length-1];
var element = a1.pop();

var a2 = [1,2,3,4,"hi", undefined, , , , true, 22,,];

var a3 = a2;
function f(array){

}

f(a2);

a3.yadayada = "aaa";

a3[-2] = "";


function forEachCallBack(item, position, list){
    console.log("hi!!" + item);
}

a3.forEach(function (item,bla,array){
    console.log("hi!!" + item);
});


var people = [
    {name : "Simona", surname: "Colapicchioni", age : 42},
    {name : "Simona", surname: "Colapicchioni", age : 12},
    {name : "Simona", surname: "Colapicchioni", age : 32},
    {name : "Simona", surname: "Colapicchioni", age : 2},
    {name : "Simona", surname: "Colapicchioni", age : 42}
];

a3.push("hi");

var names = people.map(function(item){
    return {
        name : item.name, 
        surname : item.surname
    };
});

var people2 = people.filter(function(item){
    return item.age >= 18;
});
