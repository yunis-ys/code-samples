
// 6. Düymələrin dəyərlərə, dəyərlərin isə düymələrə çevrildiyi obyektin 
// surətini almaq üçün JavaScript funksiyasını yazın..

const obj1 = {
    name: 'Yunis',
    fsName: 'Yaqubi-Sabit'
};

function reverseObj(obj) {
    let test = Object.entries(obj);

   for(let i = 0; i < test.length; i++) {
    console.log(test[i]);
   }
    
}

reverseObj(obj1);