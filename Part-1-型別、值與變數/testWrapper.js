var s = "test";

console.log(s.length);

s.length = 5;

console.log(s.length);   // Wrapper 物件的特性只能唯讀，嘗試修改會被忽略

s.len = 4;

console.log(s.len);     // 特性實際上不存在, 故 undefined