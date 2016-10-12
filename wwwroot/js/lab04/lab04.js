function sum(){

}

function sayHello(name){
    name = name || "";
    console.log("hello" + (name ? " " + name : ""));
}

//////////////////////////////////


var reflection = function(){
    function f1(funct){
        if (typeof funct === "function") {
            var code = funct.toString();
            var functionPosition = code.search(/\bfunction\b/);
            var openParenthesisPosition = code.search(/\(/);
            var value = code.substring(functionPosition + 8, openParenthesisPosition).trim();
            return value.length > 0 ? value : undefined;
        }
        return undefined;

    }
    function f2(obj, propertyName){
        return propertyName in obj;
    }
    function f3(obj){
        for (var i = 1; i < arguments.length; i++) {
            if(!(arguments[i] in obj))
                return false;
        }
        return true;
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

////////////////////////////////////////

//Make the reflection API a member of the namespace  com.yourCompany.common.

var com ;

!function (ns){
    function f1(funct){
        if (typeof funct === "function") {
            var code = funct.toString();
            var functionPosition = code.search(/\bfunction\b/);
            var openParenthesisPosition = code.search(/\(/);
            var value = code.substring(functionPosition + 8, openParenthesisPosition).trim();
            return value.length > 0 ? value : undefined;
        }
        return undefined;

    }
    function f2(obj, propertyName){
        return propertyName in obj;
    }
    function f3(obj){
        for (var i = 1; i < arguments.length; i++) {
            if(!(arguments[i] in obj))
                return false;
        }
        return true;
    }

    var reflection =  {
        functionName : f1,
        hasProperty : f2,
        hasProperties : f3
    };
    ns.reflection = reflection;
}((com = com || {}, com.yourCompany = com.yourCompany || {}, com.yourCompany.common = com.yourCompany.commonn || {}));

////////////////////////////////////////

function overload(function_with_n_parameters, function_with_m_parameters){
    var n = function_with_n_parameters.length;
    var m = function_with_m_parameters.length;
    // that throws a TypeError,  if both function have the same number of parameters,
    if(n===m)
        throw new TypeError("both function have the same number of parameters");
        
    // and otherwise, returns an function that
    return function (){
        // when called with n parameters,
         if(arguments.length===n){
            //forwards the call to function_with_n_parameters,
            return function_with_n_parameters.apply(this, arguments);
         }
        // when called with m parameters, forwards the call to function_with_m_parameters,
        if(arguments.length===m){
            //forwards the call to function_with_n_parameters,
            return function_with_m_parameters.apply(this, arguments);
         }
        // when called otherwise, throws a TypeError
    } 
}

var createVector = overload(
	function (a, b) { 
		return { x: a,  y: b }; 
	},
	function (length) { 
		return { x: length / 1.414,  y: length / 1.414 }; 
	}
);

createVector(3, 4) 	// => { x: 3,  y: 4 }
createVector(7.07) 	// => { x: 5,  y: 5 }

