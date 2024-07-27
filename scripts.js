function navigateTo(page) {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = page;
    }, 500);
}

function showAnswer(id) {
    var answer = document.getElementById(id);
    answer.style.display = 'block';
}
