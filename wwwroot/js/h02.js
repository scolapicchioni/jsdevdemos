var types = [
    0, -0, 1, 1.3, Infinity, -Infinity, 
    NaN, 1/3, 0/3, 0/0 , 1e25,

    "", "hi", 'hi', "bla \
    bla \
    bla",
    "Simona's code",
    'Simona said "Mamma Mia!"',
    "supercalifragilistichespiralidoso".slice(0,5),

    true, false, 1> 3, "hi"==2,

    null, undefined,

    /^[0-9]?$/,
];

console.log("types == " + types);

// printTruthyFalsy(types);

// function printTypes(){
//     for(var i = 0; i<types.length; i++){
//         var item = types[i];
//         var type = typeof item;
//         console.log("types[" + i + "] == " + item + "; typeof == " + type);
//     }
// }

// // undefined = 3;

// // var variable ;
// // if(variable == undefined){}

// // function f(parameter1, par2, undefined){
// //     if(parameter1==undefined)
// // }

// // f(1,2);

// function printTruthyFalsy(){
//     for(var i = 0; i<types.length; i++){
//         var item = types[i];
//         var type = typeof item;
//         if(item){
//             console.log("types[" + i + "] == " + item + "; typeof == " + type + " truthy");
//         }else{
//             console.log("types[" + i + "] == " + item + "; typeof == " + type + " falsy");
//         }
        
//     }
// }

// window.console.log("hi");
// console.log();


// var n1 = 5;
// var n2 = n1; // n2==5, n1 == 5

// n1 = 6; //n1 == 6, n2 == 5;
// console.log(n1, n2);

// function increment(parameter){
//     console.log(parameter);
//     parameter ++;
//     console.log(parameter);
// }

// var n1 = 5;

// console.log(n1);
// increment(n1);
// console.log(n1);


// function increment2(parameter){
//     console.log(parameter);
//     parameter.n++;
//     console.log(parameter);
// }

// var o1 = {n : 5} ;

// console.log(o1);
// increment2(o1);
// console.log(o1);



// var n1 = 5;
// var n2 = 5;
// console.log(n1==n2);

// var o1 = {n : 5} ;
// var o2 = {n : 5} ;
// console.log(o1==o2);
// o1 = o2;
// console.log(o1==o2);


// var a = 5;

// function f1()
// {
//     var a ;
//     var i ;
//     console.log(a);
//     a = 10;
//     console.log(a);
//     var b = !a;

//     for(i = 0; i<10; i++)
//     {

//     }


// }
// f1();


var o1 = {
    n : 5,
    name : "Simona"
};
//delete o1.toString();

// o1.toString = function (){return {};};
// o1.valueOf = function (){return {};};


// console.log("my object " + o1);

var a = "23";
var b = 5;

if(a==b){

}
var c = +a;

var o1 = {};
o1.newProperty = 5;
console.log(o1.newProperty);


b = 6;
b.newProperty = 5;

(new Number(b)).newProperty = 5;
console.log(b.newProperty);
var x;
x.newProperty = 5;

function f1(parameter){
    parameter.property = 5;
}

var x = "1";
var x2 = ++x;

var x2 = x + 1;

var o1 = {
    name : "Simona",
    surname : "Colapicchioni",
    age : 42,
    children : true
};

function f1(parameter){
    //if("surname" in parameter)
    for(var propertyName in parameter){
        // "parameter.name == Simona";
        // "parameter.surname == Colapicchioni";
        console.log("parameter." + propertyName + " == " +  parameter[propertyName]);
    }
}


//OR
/*
true || false === true
true || true === true

false || false === false
false || true === true

*/

var a = 5 || 0; //5
var a = 0 || 5; //5
var a = 5 || 10; //5
var a = undefined || 10; // 10

function f1(parameter){
    //if (parameter == 0, "", undefined, false, null)
    parameter = parameter || {};

}





