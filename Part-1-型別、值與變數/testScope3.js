

var scope = "global";                       // 宣告一個全域變數

console.log("scope: " + scope);             // 印出全域變數值

function testScope3() {
    
    var scope = "local";                    // 宣告一個全域變數
    console.log("scope: " + scope);         // 印出巢狀函式內的區域變數值
    
    function nested() {
        var scope = "nested";               // 宣告一個全域變數
        console.log("scope: " + scope);     // 印出巢狀函式內的區域變數值
    }
    
    return nested();
}

testScope3();                               // 呼叫 testScope2()
        