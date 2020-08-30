const buttons = document.querySelectorAll('button');
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
if(!isMobile){
    buttons.forEach(button => {
        button.classList.add('btn-lg');
    })
}