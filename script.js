var toggleButton = document.getElementById('toggleButton');
var content = document.getElementById('content');
toggleButton.addEventListener('click', function () {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Hide Content';
    }
    else {
        content.style.display = 'none';
        toggleButton.textContent = 'Show Content';
    }
});
