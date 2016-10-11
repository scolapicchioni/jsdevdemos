
var value = function module(){
    var i = 0;
    function increment()
    {
        if(i<10)
            i++;
    }
    function decrement(){
        if(i>0)
            i--;
    }
    return {
        inc : increment,
        dec : decrement
    } ;
}();

//value.inc();

//var val2 = module();




(function module(){
    var i = 0;
    function increment()
    {
        if(i<10)
            i++;
    }
    function decrement(){
        if(i>0)
            i--;
    }
    window.value = {
        inc : increment,
        dec : decrement
    } ;
})();

var x = {};
(function module(param){
    var i = 0;
    function increment()
    {
        if(i<10)
            i++;
    }
    function decrement(){
        if(i>0)
            i--;
    }
    param.value = {
        inc : increment,
        dec : decrement
    } ;
})(x);



