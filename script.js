document.getElementById('lang-ru').addEventListener('click', function() {
    document.querySelectorAll('.content').forEach(function(element) {
        if (element.getAttribute('data-lang') === 'en') {
            element.style.display = 'none';
        } else if (element.getAttribute('data-lang') === 'ru') {
            element.style.display = 'block';
        }
    });
});

document.getElementById('lang-en').addEventListener('click', function() {
    document.querySelectorAll('.content').forEach(function(element) {
        if (element.getAttribute('data-lang') === 'en') {
            element.style.display = 'block';
        } else if (element.getAttribute('data-lang') === 'ru') {
            element.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
