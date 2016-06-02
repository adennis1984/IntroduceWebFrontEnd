

var scope = "global";

function f() {
    
    var scope;                      // 區域變數被提升到函式最上方進行宣告
    
    console.log (scope);            // 區域變數這時已經存在，但仍是 "undefined"
    
    scope = "local";                // 區域變數終於給定初值了
    
    console.log (scope);            // 印出區域變數值 "local"
}

f();