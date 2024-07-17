function f1(){
    console.log("this is f1 function");
}

var x = 10;
var y = 20;

module.exports.f1 = f1;
module.exports.xx = x;
module.exports.yy = y;