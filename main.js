function openNextPage(nextPage, scriptName) {
    // Перевіряємо, чи вказано правильні параметри
    if (nextPage && scriptName) {
        // Формуємо URL з параметрами
        var url = nextPage + '?script=' + scriptName;
        // Переходимо на наступну сторінку
        window.location.href = url;
    } else {
        console.error('Неправильні параметри для відкриття наступної сторінки');
    }
}