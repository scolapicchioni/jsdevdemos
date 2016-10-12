var o1 = {
    id : 12345,
    init : function(){
        document.onclick = function(){
            this.doSomething();
        }
    },
    doSomething : function(){
        console.log("hi from " + this.id);
    }
}
o1.init();

o1.doSomething();

