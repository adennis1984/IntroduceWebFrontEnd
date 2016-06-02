

var scope = "global";                   // 宣告一個全域變數

console.log("scope: " + scope);         // 印出全域變數值

function testScope2() {
    
    scope = "local";                    // OOPS!! 修改到全域變數值了
    
    console.log("scope: " + scope);     // 印出全域變數值
}

testScope2();                           // 呼叫 testScope2()
        