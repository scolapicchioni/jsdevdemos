function contains(array, item){
    if(array && array.length){
    // for(var i = 0; i< array.length; i++){
    //     if(array[i]===item){
    //         return true;
    //     }
    // }
    // return false;
    }
    if(array && array.indexOf)
        return array.indexOf(item) != -1;

    // var found = false;
    // array.forEach(function(x){
    //     if(x===item)
    //     found = true;
    // })
    // return found;
}

// adds the item to the array, if it is not yet included
// does nothing, otherwise
function add(array, item){
     if(!contains(array, item)){
         array.push(item);
         array[array.length] = item;
         
        //  var bla = [item];
        //  array.concat(bla);
     }   
}


function remove(array, item){
    var position = array.indexOf(item);
    if(position != -1){
        array.splice(position,1);    
    }
}

function sum(array){
    // var total = 0;
    // for(var i = 0; i<array.length;i++){
    //     total += array[i];
    // }
    // return total;

    // var total = 0;
    // for(var i in array){
    //     total += array[i];
    // }
    // return total;

    // var total = 0;
    // for(var item of array){
    //     total += item;
    // }
    // return total;

    //array = [10,20,30,40];
    var total = array.reduce(function(prev, item){
        return item + prev;
    }, 0);
}

var a = +[]; //0

var x = ++[[]][+[]]+[+[]];

var b = [[]];

var c = b[0]; // [] 

x = ++[] + [0];




