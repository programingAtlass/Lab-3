var textExample = document.getElementById('text');
textExample.textContent = "Напишіть програму на JS, часто потрібно за даним номером року Y&gt;=0 визначати до якої половини X якого століття C та якого тисячоліття M цей рік належить за Григоріанським календарем.";


var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    const year = prompt("Введіть рік: ");

    let century = Math.ceil(year / 100);
    let halfCentury = Math.ceil(year / 50) % 2 === 0 ? 2 : 1;
    let millennium = Math.ceil(year / 1000);

    var script1 = document.getElementById("script1");
    var text1 = "Рік належить до "; 
    var text2 = " половини ";
    var text3 = " століття ";
    var text4 = " тисячоліття";
    script1.innerHTML = text1 + halfCentury + text2 + century + text3 + millennium + text4;

    console.log(halfCentury);
    console.log(century);
    console.log(millennium);
})