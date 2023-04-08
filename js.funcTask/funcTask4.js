
// Sətri parametr kimi qəbul edən və sətirin hər sözünün ilk hərfini böyük hərflə çevirən 
// JavaScript funksiyasını yazın
// Nümunə sətri : 'tez qəhvəyi tülkü' Gözlənilən nəticə: 'Tez Qəhvəyi Tülkü'.

function strCapitalize(str) {

    let arr = str.split(' '); // setiri array cevirirem sonra loop a saliram.

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// array 0 ci index aliram boyuk herfe cevirirem sonra arr[i] slice meth ile kesib birlesdirirem arr[i].

}
    let x = arr.join(' '); // sonra setire cevirib.
    console.log(x); // consolda cap edirik.
}
strCapitalize('azerbaycan naxcivan muxtar respublikasi');