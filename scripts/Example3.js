var textExample = document.getElementById('text');
textExample.textContent = "Напишіть програму на JS, яка повертає об’єкт з двома полями: - кількість секунд, яка пройшла від початку сьогоднішнього дня; - кількість секунд до початку наступного дня";


var startButton = document.getElementById('start');
startButton.addEventListener('click', function()  {
    const now = new Date();

    // Begginin of the day
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // End of day
    const startOfNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // Seconds (begginin --> )
    const secondsPassed = Math.floor((now - startOfDay) / 1000);

    // Seconds (--> end )
    const secondsTillNextDay = Math.floor((startOfNextDay - now) / 1000);

    var script1 = document.getElementById("script1");
    var text1 = "З початку дня пройшло "; 
    var text2 = " секунд";
    script1.innerHTML = text1 + secondsPassed + text2;

    var script1 = document.getElementById("script2");
    var text3 = "До початку наступного дня "; 
    var text4 = " секунд";
    script1.innerHTML = text3 + secondsTillNextDay + text4;

    console.log("З початку дня пройшло ",secondsPassed, "секунд")
    console.log("До початку наступного дня ",secondsTillNextDay, "секунд")
})