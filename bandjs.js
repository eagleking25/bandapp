beat = (key, random = false) => {
    const audio = document.querySelector(`audio[key='${key}']`);
    console.log(key + '' + audio);
    if (!audio) { return; }
    // #make repeat on click or change current time
    if (!random) { audio.currentTime = 0; } else { audio.currentTime = audio.duration * (1 - (Math.random() * 10) / 10); }
    // Play
    audio.play();
    const but = document.querySelector(`.key[key='${key}']`);
    but.style.transitionDuration = '2s';
    but.style.border = 'solid 0.4rem rgb(226, 240, 41)';
    but.style.transform = 'rotate(360deg)';

}
window.addEventListener('transitionend', (e) => {
    e.target.style.transform = 'none';
    e.target.style.border = 'solid 0.2rem crimson'
})
window.addEventListener('keydown', e => { beat(e.key, false) })
window.addEventListener('load', e => {
    document.querySelector('.play').addEventListener('click', () => {

        let key;
        for (let i = 0; i < 5; i++) {
            setInterval(() => {
                const keys = Array.from(document.querySelectorAll('.key'));
                key = keys[Math.floor(Math.random() * keys.length)].getAttribute('key');
                beat(key, true);
            }, 1000);

        }
    })
})