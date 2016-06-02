"use strict";

var a = [1, 2, 3, 4];

console.log(a.length);

for (var index = 0; index < a.length; index++) {
    console.log(a[index]);
}

a["zero"] = 0;

console.log(a.length);

a.forEach(function(element) {
    console.log(element);
}, this);

for (var key in a) {
    if (a.hasOwnProperty(key)) {
        var element = a[key];
        console.log(element);
    }
}