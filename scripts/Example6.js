var textExample = document.getElementById('text');
textExample.textContent = `Гринвіцький годинник. В Гринвіцький обсерваторії жив старий астроном. Одного дня 
нього зупинився годинник. І він вирішив використовуючи знання про Сонце самостійно встановити
час. Він навмання завів годинник і став записувати час сходу та заходу Сонця. Астроном також знає
що теоретично о 12 годині 0 хвилин Сонце повинно бути в зеніті. Але старість має свої мінуси, і
астроном уже кілька днів сумнівається, чи правильно в нього відображається час на годиннику.
Допоможіть астроному в його обрахунках. Приклад вхідних даних (Години та хвилини сходу та
заходу Сонця) 5:30 18:20 Результат (Години та хвилини відхилення вiд правильного часу) 0 -5 хв.
Пояснення: годинник відстає на 5 хв`;

var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    
    const sunriseInput = prompt("Введіть час сходу Сонця у форматі HH:MM (наприклад, 5:30):");
    const sunsetInput = prompt("Введіть час заходу Сонця у форматі HH:MM (наприклад, 18:20):");

    // Розбиваємо рядок введення на години та хвилини
    const sunriseArray = sunriseInput.split(":");
    const sunsetArray = sunsetInput.split(":");

    // Переводимо години та хвилини у числовий формат
    const sunriseHour = parseInt(sunriseArray[0], 10);
    const sunriseMinute = parseInt(sunriseArray[1], 10);
    const sunsetHour = parseInt(sunsetArray[0], 10);
    const sunsetMinute = parseInt(sunsetArray[1], 10);


    // Робимо подальші обчислення
    const averageTime = ((sunriseHour * 60 + sunriseMinute) + (sunsetHour * 60 + sunsetMinute)) / 2;
    const deviation = averageTime - (12 * 60);
    // Виводимо результат
    let result = '';
    if (deviation === 0) {
        result = 'Годинник показує правильний час.';
    } else if (deviation > 0) {
        result = `Годинник випереджає сонячний час на ${deviation} хв.`;
    } else {
        result = `Годинник відстає від сонячного часу на ${-deviation} хв.`;
    }
    console.log(result);

    var script1 = document.getElementById("script1");
    var text = ""; 
    script1.innerHTML = result;
})