

var scope = "global";                   // 宣告一個全域變數

console.log("scope: " + scope);         // 印出全域變數的值

function testScope1() {
    
    var scope = "local";                // 宣告一個同名的區域變數
    
    console.log("scope: " + scope);     // 印出區域變數值而非全域變數值
}

testScope1();                           // 呼叫 testScope1()
       