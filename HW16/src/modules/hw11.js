function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.forEach(key => {
        key.classList.add('playing');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        key.style.borderColor = "#" + randomColor;
        key.style.boxShadow = `0px 0px 10px #${randomColor}`;
    });
}
function clickPlaySound(e) {
    let audio;
    let key;
    if(typeof e.srcElement.dataset.key === "string") {
        audio = document.querySelector(`audio[data-key="${e.srcElement.dataset.key}"]`);
        key = document.querySelectorAll(`.key[data-key="${e.srcElement.dataset.key}"]`);
    } else {
        audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`);
        key = document.querySelectorAll(`.key[data-key="${e.path[1].dataset.key}"]`);
    }
    audio.currentTime = 0;
    audio.play();
    key.forEach(key => {
        key.classList.add('playing');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        key.style.borderColor = "#" + randomColor;
        key.style.boxShadow = `0px 0px 10px #${randomColor}`;
    });
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
    this.style.borderColor = null;
    this.style.boxShadow = null;
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', clickPlaySound));

export {
    playSound,
    clickPlaySound,
    removeTransition,
    keys
}