var textExample = document.getElementById('text');
textExample.textContent = "Напишіть програму на JS, яка за заданим роком та номером місяця визначає останній день місяця";


var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    result = dayjs(prompt("Приклад введення: рік-місяць"),'-01').daysInMonth()

    var script1 = document.getElementById("script1");
    var text1 = "В заданому місяці ";
    var text2 = " днів"; 
    script1.innerHTML = text1 + result + text2;
})






console.log(result)




