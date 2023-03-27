
// 1. Düymələrin dəyərlərə, dəyərlərin isə düymələrə çevrildiyi obyektin 
// surətini almaq üçün JavaScript funksiyasını yazın..

const obj1 = {
    name: 'Yunis',
    fsName: 'Yaqubi-Sabit'
};

function reverseObj(obj) {

    let arr = Object.entries(obj).map(([key, value]) => [value, key]);
    let arrToObj = Object.fromEntries(arr);
    console.log(arrToObj);
}

reverseObj(obj1);