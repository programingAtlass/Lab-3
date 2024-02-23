var textExample = document.getElementById('text');
textExample.textContent = "Маючи дату початку події та дату її завершення, обчисліть скільки повних років тривала дана подія. Примітка. Від'ємні значення років позначають роки до нашої ери.";

var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    let startDate = prompt("Введіть дату, з якої ведеться відлік (формат ДД.ММ.РРРР): ");;
    let endDate = prompt("Введіть дату, до якої ведеться відлік (формат ДД.ММ.РРРР): ");;

    // Розділяємо дати на день, місяць та рік
    let startParts = startDate.split('.');
    let endParts = endDate.split('.');

    // Перетворюємо рядок на число
    let startYear = parseInt(startParts[2]);
    let endYear = parseInt(endParts[2]);

    // Обчислюємо кількість повних років між датами
    let yearsDiff = endYear - startYear;

    var script1 = document.getElementById("script1");
    var text1 = "Пройшло ";
    var text2 = " повних років" 
    script1.innerHTML = text1 + yearsDiff + text2;

    console.log(yearsDiff);
})