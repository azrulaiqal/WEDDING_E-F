document.addEventListener('DOMContentLoaded', function () {
    var beforeButton = document.getElementById('before-button');
    var afterButton = document.getElementById('after-button');
    var beforeContent = document.getElementById('before');
    var afterContent = document.getElementById('after');
    var backgroundMusic = document.getElementById('background-music');

    beforeButton.addEventListener('click', function () {
        beforeContent.style.display = 'block';
        afterContent.style.display = 'none';
        backgroundMusic.play();
    });

    afterButton.addEventListener('click', function () {
        afterContent.style.display = 'block';
        beforeContent.style.display = 'none';
        backgroundMusic.play();
    });

    beforeButton.classList.add('breathe');
    afterButton.classList.add('breathe');
});
