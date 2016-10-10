"use strict";

// var x = 1;

// switch(x)
// {
//     case 1:
//         console.log("it is 1");
//         break;
//     case "hi":
//         console.log("it is hi");
//         break;
//     case true:
//         console.log("it is true");
//         break;
//     default:

// }

// var o1 = {
//     name : "Simona",
//     surname : "Colapicchioni"
// };

// for(var propName in o1){
//     //o1[propName]
// }

// var a1 = ["one", true, 23, Infinity];
// a1[10] = undefined;
// a1[20] = "stuff";
// delete a1[10];

// a1.myProperty = "something completely different";

// //a1.length //21

// for(var i = 0; i < a1.length; i++){
//     console.log(a1[i]);
// }

// for(var propIndex in a1){
//     console.log(a1[propIndex]);
// }

// for(var propValue of a1){
//     console.log(propValue);
// }


var person = {
    address : {
        straat : {
            name : "",
            number : 22
        }
    }
}

person.address.straat.name = "aa";
person.address.straat.number = 22;
var o = person.address.straat;

with(person.address.straat){
    name = "aaa"; // person.address.straat.name = "aa";
    number = 22; //person.address.straat.number = 22;
    postcode = "2846ps"; //window.postcode = "2846ps"
}