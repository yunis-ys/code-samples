//  Ədədi tərsinə çevirən JavaScript funksiyasını yazın.
//  Nümunə x = 32243; Gözlənilən Nəticə : 34223 .

function reversNum(x) {

  let str = String(x).split('').reverse().join('');

  return Number(str);

}
  console.log(reversNum(32243) );