// var PageHandler = {

//     id: "123456",

//     init: function () {
//         document.onclick = function (event) {
//             this.doSomething(event.type);     // error
//         };
//     },

//     doSomething: function (type) {
//         console.log("Handling " + type + " for " + this.id);
//     }

// };
// PageHandler.init();


// //ES2015
// const PageHandler2 = {

//     id: "123456",

//     init: function () {
//         document.onclick = event => this.doSomething(event.type)
//     },

//     doSomething: function (type) {
//         console.log("Handling " + type + " for " + this.id);
//     }

// };

// PageHandler2.init();


var library = function module(){
    var listOfFunctions = [];
    for(var i = 0; i<10; i++){
        listOfFunctions.push(function doStuff(){
            console.log(i);
        });
    }
    
    return {actions : listOfFunctions};
}();

library.actions[3]();


for(var i = 1; i<=5; i++){
    var btn = document.getElementById("button"+i).onclick = function(value){
        return function(){console.log("you clicked on " + value);}
    }(i);
}