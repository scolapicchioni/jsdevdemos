function sum(){

}

function sayHello(name){
    name = name || "";
    console.log("hello" + (name ? " " + name : ""));
}

//////////////////////////////////


var reflection = function(){
    function f1(theFunction){
        var code = theFunction.toString();

    }
    function f2(objectToLookFor, propertyName){
        return propertyName in objectToLookFor;
    }
    function f3(obj){

    }

    return {
        functionName : f1,
        hasProperty : f2,
        hasProperties : f3
    };
}();


function add(a,b) { return a + b; };
var obj = { x: 4, y: 7, sum: add };

reflection.functionName(obj.sum)	// => "add"
reflection.hasProperty(obj, "x") 	// => true
reflection.hasProperties(obj, "x", "sum", "y") // => true
