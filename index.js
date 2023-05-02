


function makeSound(data) {
    switch (data) {
        case 'w':
            const audio1 = new Audio ('sounds/tom-1.mp3')
            audio1.play();
            break;

        case 'a' :
            const audio2 = new Audio ('sounds/tom-2.mp3');
            audio2.play();
            break;
        case 's' :
            const audio3 = new Audio ('sounds/tom-3.mp3');
            audio3.play()
            break;
        case 'd' :
            const audio4 = new Audio ('sounds/tom-4.mp3');
            audio4.play()
            break;
        
        case 'l' :
            const audio5 = new Audio ('sounds/kick-bass.mp3');
            audio5.play()
            break;

        case 'j' :
            const audio6 = new Audio ('sounds/snare.mp3');
            audio6.play()
            break;

        case 'k' :
            const audio7 = new Audio ('sounds/crash.mp3');
            audio7.play()
            break;

        default:
            alert('Please select a key on the screen');
            break;
    }
}

function makeAnimations (data) {

    document.querySelector('.' + data).classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.' + data).classList.remove('pressed');
    },100);
}

for (var i = 0 ; i < (document.querySelectorAll('button').length); i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        const button = this.innerHTML
        

        makeSound(button);
        makeAnimations(button)
        
    })
    
}

document.addEventListener('keypress', function(event){
    const button = event.key;

    makeSound(button);
    makeAnimations(button)
})


