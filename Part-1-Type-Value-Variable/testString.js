var s = "Hello, World!!";           // 創建一字串
console.log(s.length);              // 字串長度
console.log(s.charAt(0));           // H: 第一個字元
console.log(s.charAt(s.length-1));  // !: 最後一個字元
console.log(s.substring(1, 4));     // ell: 第二、三、四字元
console.log(s.slice(1, 4));         // 同上
console.log(s.split(" "));          // ["Hello", "World"] 以空白切割為子字串
console.log(s.replace("H", "h"));   // "hello, World!!
console.log(s.toUpperCase());       // "HELLO, WORLD!!"  轉為大寫
console.log(s.toLocaleLowerCase()); // "hello, world!!"  轉為小寫

// Javascript 中字串是不可變(immutable)的，
// replace()、toUpperCase() 之類的方法是回傳新字串
// 並沒有修改到原始字串

// 字串可被視為唯獨陣列，固可使用中括號 [] 取值
console.log(s[0]);                  // "H" 
console.log(s[s.length-1]);         // "!"