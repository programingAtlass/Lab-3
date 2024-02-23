const urlParams = new URLSearchParams(window.location.search);
const scriptName = urlParams.get('script');

if (scriptName === 'scripts/Example1.js') {
        console.log('Виконуємо скрипт 1');
        var script = document.createElement('script');
        script.src = 'scripts/Example1.js';
        document.head.appendChild(script)
}

else if (scriptName === 'scripts/Example2.js') {
    console.log('Виконуємо скрипт 2');
    var script = document.createElement('script');
    script.src = 'scripts/Example2.js';
    document.head.appendChild(script)
}

else if (scriptName === 'scripts/Example3.js') {
    console.log('Виконуємо скрипт 3');
    var script = document.createElement('script');
    script.src = 'scripts/Example3.js';
    document.head.appendChild(script)
}

else if (scriptName === 'scripts/Example4.js') {
    console.log('Виконуємо скрипт 4');
    var script = document.createElement('script');
    script.src = 'scripts/Example4.js';
    document.head.appendChild(script)
}

else if (scriptName === 'scripts/Example5.js') {
    console.log('Виконуємо скрипт 5');
    var script = document.createElement('script');
    script.src = 'scripts/Example5.js';
    document.head.appendChild(script)
}

else if (scriptName === 'scripts/Example6.js') {
    console.log('Виконуємо скрипт 6');
    var script = document.createElement('script');
    script.src = 'scripts/Example6.js';
    document.head.appendChild(script)
}