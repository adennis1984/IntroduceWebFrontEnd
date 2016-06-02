

var scope = "global";

function f() {
    
    console.log (scope);            // 弔詭的是，它印出了 "undefined" 而不是 "global"
    
    var scope = "local";            // 區域變數在此設定初值，但在函式中每個地方都有定義
    
    console.log (scope);            // 印出區域變數值 "local"
}

f();