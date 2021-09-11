function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally' + i);
}
doSomething();
// types
var count = 5;
count = 'a'; //this in not right
var a;
var b;
// and so on
// now see enum type 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Greeen"] = 1] = "Greeen";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var BackgroundColor = Color.Red;
