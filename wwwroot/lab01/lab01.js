var me;
function helloWorld(){
    console.log(me);
}

me = {
    name : "Simona",
    city : "Rome"
};

helloWorld();

// var me = {};

// me.name = "Simona";
// me["city"] = "Rome";

console.log("me.name== " + me.name + "; me.city == " + me.city);