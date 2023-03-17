
// Keçilmiş sətri əlifba sırası ilə hərflərlə qaytaran JavaScript funksiyasını yazın.
// Fərz edin ki, durğu işarələri və rəqəm simvolları ötürülən sətirə daxil deyil.
// Nümunə sətir : 'webmaster' Gözlənilən Nəticə : 'abeemrstw'..

function strAlpha(str) {

    return str.split('').sort().join('');

}
console.log(strAlpha('webmaster') );