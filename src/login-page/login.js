document.getElementById('forgot-password').addEventListener('click', function() {
    document.getElementById('recover-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('recover-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('recover-popup')) {
        document.getElementById('recover-popup').style.display = 'none';
    }
});