
// 1. “Giriş”in massiv olub-olmadığını yoxlamaq üçün JavaScript funksiyasını yazın.


function isArray(input) {

    let checkArr = Array.isArray(input);

    if (checkArr == true) {
        console.log('successful ( Array )');
    } else {
        console.log('please type correctly');
    }
}

isArray([1,2,3]);

// 2. Massivi klonlaşdırmaq üçün JavaScript funksiyasını yazın.

function arrClone(array) {
   let arrClone = array.slice(0);
   console.log(arrClone);
   console.log(array);
}

arrClone( [1,2,3,4,5] );

// 3. Massivin birinci elementini almaq üçün JavaScript funksiyasını yazın.
// 'n' parametrinin ötürülməsi massivin ilk 'n' elementlərini qaytaracaq.


function firstArr(n) {
    let firstAddArr = n[0];
    console.log( `Array in ilk elementi ( ${firstAddArr} )`);
}
firstArr( [5,2,7,3,8] );

// 4. Massivin birinci elementini almaq üçün JavaScript funksiyasını yazın.
// 'n' parametrinin ötürülməsi massivin souncu 'n' elementlərini qaytaracaq.

function lastArr(n) {
    let lastAddArr = n.reverse();
    console.log( `Array in sonuncu elementi ( ${lastAddArr[0] } )`);
}
lastArr( [5,2,7,3,8] );

// 5 Arrayin butun elementlerini setirde birlesdirmek ucun js funksiyasi yazin.

function changeArrToStr(arr) {
    return arr.join(', ');
}

console.log( `array setire ugurla cevirildi` +  '  ' + changeArrToStr( ['html', 'css', 'js', 'react.js'] ));