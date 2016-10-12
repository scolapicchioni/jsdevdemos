
var library = function module(){
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

//library.inc();

//var library2 = module();




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
    window.library = {
        inc : increment,
        dec : decrement
    } ;
})();

var library = {};
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
})(library);


