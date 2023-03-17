
// Sətiri parametr kimi qəbul edən JavaScript funksiyasını yazın və sətir daxilində ən uzun sözü tapın.

function strLength(str) {

    let numArr = [];

    let arr = str.split(" ");
    for (let x = 0; x < arr.length; x++) {
        let arrLeng = arr[x].length;
        numArr.push(arrLeng);
    }
    let num = Math.max(...numArr);
     for(let i = 0; i < arr.length; i++) {
        if(num == arr[i].length) {
            console.log(`cumlenin icinde en uzun soz: ${arr[i] }`);
        }
     }
}
strLength('Azerbaycan Naxcivan muxtar respublikasi');