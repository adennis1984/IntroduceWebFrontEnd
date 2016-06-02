

function f() {

    scope = "global";       // 沒有用 var 來宣告變數，這會是一個全域變數

    console.log(scope);     // 印出全域變數值 "global"
}

f();

console.log(scope);         // 因為已經被宣告成全域變數，所以不受 function 限制 scope 範圍