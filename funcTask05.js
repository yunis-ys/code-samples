
// Rəqəmi parametr kimi qəbul edən JavaScript funksiyasını yazın və nömrənin əsas olub-olmadığını yoxlayın.
// Qeyd: Sadə ədəd (və ya sadə) 1-dən və özündən başqa müsbət bölənləri olmayan 1-dən böyük natural ədəddir.

function simpleNum(x) {

    let checkNum = x.constructor === Number;
    if (checkNum == true) {

        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    } else {
        console.log('nomre deyil!');
    }
}
console.log(simpleNum(2));