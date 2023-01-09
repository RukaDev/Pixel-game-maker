var buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.onclick = function() {
        sessionStorage.setItem('gameName', button.innerHTML)
        window.location.href = '../html/game.html'
    }
});