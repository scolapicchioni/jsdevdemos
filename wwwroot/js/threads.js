document.getElementById("btn1").addEventListener("click", function(){console.log("click")});
// console.log("before setTimeout");
// setTimeout(function() {
//     console.log("inside setTimeout");
//     while(true){

//     }
// }, 1000);

// console.log("after setTimeout");


// function f(){
//     console.log("inside f");
//     return new Promise((resolve, reject)=>{
//         setTimeout(function() {
//             console.log("inside setTimeout");
//             resolve("Done");
//             console.log("after resolve");
//         }, 1000);
//     });
// }


// console.log("calling f");
// const p =f(); 
// p.then(console.log);
// console.log("called f");
// p.then((message)=>console.log(message + " again!"));


// function* observerIterator(){
//     console.log("started");
//     let first = yield ;
//     console.log(first);
//     let second = yield ;
//     console.log(second);
//     let third = yield ;
//     console.log(third);
// }

// let oi = observerIterator();
// oi.next();
// console.log("after first next");
// oi.next('a');
// console.log("after second next");
// // oi.next('b');
// // oi.next('c');


// let iterator;

// function doStuffAsync(){
//     let x = new XMLHttpRequest();
//     x.onreadystatechange = function(){
//         if (x.readyState == 4 && x.status == 200) {
//             iterator.next(x.responseText);
//         }
//     }
//     x.open("GET","./stuff.json");
//     x.send();
// }

// function* start(){
//     let contents = yield doStuffAsync();
//     console.log(contents);
// }

// iterator = start();
// iterator.next();



function doStuffAsync(){
    let x = new XMLHttpRequest();
    x.onreadystatechange = function(){
        if (x.readyState == 4 && x.status == 200) {
            iterator.next(x.responseText);
        }
    }
    x.open("GET","./stuff.json");
    x.send();
}

function* start(){
    let contents = yield doStuffAsync();
    console.log(contents);
}

iterator = start();
iterator.next();
