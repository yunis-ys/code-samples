// 1. JavaScript obyektinin xassələrini sadalamaq üçün JavaScript proqramını yazın.
// Nümunə obyekti :
// var student = {
// ad : "David Rayy",
// sinif : "VI",
// rollno : 12 };
// Nümunə çıxışı : ad, sinif, rollno;

const student = {
    ad: "David Rayy",
    sinif: "VI",
    rollno: 12
};

function objEnumerate(obj) {

    // Object.keys methodu obyekti array formasinda qaytarir...

    Object.keys(obj).forEach(item => {
        console.log(item);
    })
};

objEnumerate(student);


// 2.  JavaScript-də Bubble Sort alqoritmini yazın.
// Qeyd: Bubble çeşidləmə sıralanacaq siyahıda dəfələrlə addımlamaqla işləyən sadə çeşidləmə alqoritmidir,
// Nümunə Məlumat: [6,4,0, 3,-2,1]
// Gözlənilən Nəticə : [-2, 0 , 1, 3, 4, 6]...

let arr = [6, 4, 0, 3, -2, 1];

function sortArray(array) {
    return array.sort((a, b) => {
        return a - b;
    });
};

console.log(sortArray(arr));


// 3. JavaScript obyektlərinin massivini çeşidləmək üçün JavaScript proqramını yazın.

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

function sortLibrary(arr) {
    return arr.sort((a, b) => {
        return b.libraryID - a.libraryID;
    })
}

console.log(sortLibrary(library));

// 4. 18. Verilmiş dəyərin DOM elementi olub-olmadığını yoxlamaq üçün JavaScript funksiyasını yazın.

function checkElemDom(elem) {
    let checkElem = document.querySelector(elem);

    if (checkElem !== null) {
        console.log('element senedde var');
    } else {
        console.log('element senedde yoxdur');
    }
}

checkElemDom('body');

// 5. Obyektdə verilmiş xassə olub-olmadığını yoxlamaq üçün JavaScript funksiyasını yazın.

const obj = {
    name: 'Yunis',
    fsName: 'Yaqubi-Sabit'
};

function findProp(property, obj) {

    return property in obj;
}

console.log(findProp('fsName', obj));
