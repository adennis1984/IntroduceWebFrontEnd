
/*
 * 變數 i, j, k 雖然在不同的地方宣告，但卻具有同樣的範疇 (scope)
 * －它們在函式主體中的每個地方都有定義
 */

function testFunctionScope(o) {
    
    var i = 0;                              // i 在函式中的每個地方都有定義
    console.log("i = " + i); 

    if (typeof o == "object") {
        
        var j = 0;                          // j 在函式中的每個地方都有定義：不僅在 if 判斷區塊內

        for (var k = 0; k < 10; k++) {      // j 在函式中的每個地方都有定義：不僅在 for 迴圈區塊內
            console.log("k = " + k);
        }
        console.log("k = " + k);            // k 仍有定義：印出 10
    }
    console.log("j = " + j);                // j 有定義，但未必初始化
}

testFunctionScope({});                      // 傳入一空物件

testFunctionScope();                        // 不傳入任何值