// Cari günü və saatı aşağıdakı formatda göstərmək üçün JavaScript proqramı yazın. 
// Nümunə Nəticə : Bu gün : Çərşənbə axşamı.
// Hazırkı vaxt : 10 PM : 30 : 38

let showDay = document.querySelector('.showDay');
let showDate = document.querySelector('.showDate');

function showDayDate() {
    let date = new Date();

    switch (date.getDay()) {
        case 1:
            showDay.innerHTML = 'Bu gün : Bazar-ertesi';
            break;
        case 2:
            showDay.innerHTML = 'Bu gün : Çərşənbə axşamı';
            break;
        case 3:
            showDay.innerHTML = 'Bu gün : Çərşənbə';
            break;
        case 4:
            showDay.innerHTML = 'Bu gün : Cümə axşamı';
            break;
        case 5:
            showDay.innerHTML = 'Bu gün : Cümə';
            break;
        case 6:
            showDay.innerHTML = 'Bu gün : Şənbə';
            break;
        case 7:
            showDay.innerHTML = 'Bu gün : Bazar';
            break;
    }

    showDate.innerHTML = ` Hazırkı vaxt : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

};

