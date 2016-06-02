var a = 10 + " objects";

console.log(a);                     // "10 objects", 數字10轉為字串

var b = "7" * "4";

console.log(b);                     // 28, 兩個字串皆轉為數字

var n = 1 - "x";                    // NaN: 字串 "x" 不能轉型為數字

console.log(n + " objects");        // "NaN objects", NaN 被轉型為字串 "NaN"

var ObjectNull = null;

var ObjectFull = { a: 1, b: 2 };

if (ObjectFull) {                   // ObjectFull 不為空物件，會被轉型成 true
    console.log(ObjectFull);
} 

if (ObjectNull) {                   // ObjectNull 是 null 值，會被轉型成 false
    console.log(ObjectNull);
}