var o1 = {};
var o2 = {
    "name" : "Simona",
    age : 42,
    children : true,
    address : {

    },
    jobs : [],
    sayHi : function(parameter)
    {
        console.log("Hi "+ parameter +" , my name is" + this.name);
    },
    "address-1" : ""
};

//o2["address-1"]
o2.sayHi("Mario");

var o3 = {
    "name" : "Simona",
    age : 42,
    children : true,
    address : {

    },
    jobs : [],
    sayHi : function(parameter)
    {
        console.log("Hi "+ parameter +" , my name is" + this.name);
    },
    "address-1" : ""
};


function createPerson(name, age, children){
    return {
        "name" : name,
        age : age || 0,
        children : children || false,
        address : {

        },
        jobs : [],
        sayHi : function(parameter)
        {
            console.log("Hi "+ parameter +" , my name is" + this.name);
        },
        "address-1" : ""
    };
}

