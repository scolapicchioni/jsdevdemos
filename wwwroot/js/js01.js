console.log(a);

var a;

function f(parameter){
    if(parameter){
        console.log(parameter);
        return "hi";
    }
    //return undefined;
}

var result = f();

var o = {
    name : "Simona"
};

//var address = o.address;

console.log(o.address);

var list = [1,true,"hi"];
console.log(list[40]);

//Math.random()

var d = new Date();
d.getDay();
d.getMonth();
d.getFullYear();
d.getDate();

function f(parameter){
    if(parameter>100)
        throw new Error("oh noes!");
}

function f(parameter){
    if(parameter>100)
        throw {myproblem : "OH NOES!"};
}


try{
    f(10000);
}catch(x){
    
}








