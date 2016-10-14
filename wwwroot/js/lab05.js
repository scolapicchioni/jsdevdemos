// function functionName(){}

// Function.prototype.getName = functionName;

// function doSomething(){}

// //doSomething.getName

// var f = new Function(param1, param2, "console.log(param1 + param2);")

// function f(param1, param2){
//     console.log(param1 + param2);
// }


// Write a Customer class in the namespace com.yourCompany.CRM.
var com  = com || {};
com.yourCompany = com.yourCompany || {};

!function(ns){
    function Customer(id, name, city){
        //id, name, city, nrOfUnpaidBills
        this.id = id || 0;
        this.name = name || "";
        this.city = city || "";
        this._nrOfUnpaidBills = 0;
        this.unpaidBillsChanged = new com.yourCompany.common.EventHandler();
        

    }

    // Invoke the unpaidBillsChanged event handler
    // each time the nrOfUnpaidBills changes value,
    // passing the customer object and 
    //an object literal with a bills property that contains 
    //the new number of unpaid bills.
    Customer.prototype.buyStuff = function(){
        this._nrOfUnpaidBills++;
        this.unpaidBillsChanged.invoke(this,{bills: this._nrOfUnpaidBills});
    }
    Customer.prototype.payBill = function(){
        this._nrOfUnpaidBills--;
        this.unpaidBillsChanged.invoke(this,{bills: this._nrOfUnpaidBills});
    }
    Customer.prototype.badPayer = function(n){
        //that returns true,   if the nrOfUnpaidBills is n or more
        // 	and returns false,  otherwise.
        return this._nrOfUnpaidBills >= n;
    }
    Customer.prototype.toString = function(){
        return "(" + this.id + ") " + this.name + " - " + this.city; 
        //"(id) name - city"
    }

    ns.Customer = Customer;

}(com.yourCompany.com);


!function(ns){
    function EventHandler(){
        this._listeners = [];
    }

    // adds the listener to the array of listeners,  if the listener is a function
    // fails silently, otherwise
    EventHandler.prototype.addListener = function(listener){
        if(typeof listener==="function")
            this._listeners.push(listener);
    }

    // removes the first occurrence of the listener 
    //in the array of listeners, 
    //if the listeners array contains this listener (same object reference)
    // fails silently, otherwise
    EventHandler.prototype.removeListener = function(listener){
        var index = this._listeners.indexOf(listener);
        if(index != -1){
            this._listeners.splice(index,1);
        }
    }

    // iterates through the array of listener functions 
    //and invoke all functions by passing them the sender and args objects.
    EventHandler.prototype.invoke = function(sender, args){
        this._listeners.forEach(function(listener){
            listener(sender, args);
        });
    }
    ns.EventHandler = EventHandler;
}(com.yourCompany.common);

/*

// invoke(sender, args)

*/



function accountant(sender, args) {
	console.log(sender.toString());
	console.log(args.bills);
}
var bob = new com.yourCompany.com.Customer(102, "Bob", "Utrecht");
bob.unpaidBillsChanged.addListener(accountant);

bob.buyStuff();	
// prints  "(102) Bob - Utrecht"  and  1  to console
bob.payBill();
// prints  "(102) Bob - Utrecht"  and  0  to console
