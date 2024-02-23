const currentDay = dayjs().format("dddd");
const currentTime = dayjs().format("HH:mm:ss:SSS");

var textExample = document.getElementById('text');
textExample.textContent = "Напишіть програму на JS для відображення поточного дня та часу";

var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    var script1 = document.getElementById("script1");
    var text = "Сьогодні "; 
    script1.innerHTML = text + currentDay;

    var script2 = document.getElementById("script2");
    var text = "Час: "; 
    script2.innerHTML = text + currentTime; 

    console.log(currentDay);
    console.log(currentTime);
})