// function module(){
//     var i = 5;
//     function f(){
//         console.log(i);
//     }
//     i = 10;
//     return f;
// }

// var library = module();
// library();

// function module2(){
//     var listOfFunction = [];

//     for(var i = 0; i< 10; i++){
//         listOfFunction[i] = function f(){
//             console.log(i);
//         }
//     }
//     return listOfFunction;
// }

// var actions = module2();

// actions[2]();



for(var i = 1; i<=5; i++){
    var btn = document.getElementById("button" + i);
    btn.onclick = function(value){
        return function(){
            console.log("You clicked on button " + value + "!");
        };  
    }(i);
}