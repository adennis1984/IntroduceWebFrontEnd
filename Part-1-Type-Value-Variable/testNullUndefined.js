var Null = null;

console.log (Null);                     // null

console.log(typeof Null)                // object

var Undefined = undefined;

console.log (Undefined);                // undefined

console.log(typeof Undefined)           // undefined

var testUndefined;

console.log (Undefined);                // 未定義

console.log (Null == Undefined);        // true, 相等運算子 == 將其視為相等

console.log (Null === Undefined);       // false, 嚴格相等運算子 === 可以區分

var error = Null.prop;                  //對 null or undefined 使用 . 或 [] 取值時會 throw TypeError

