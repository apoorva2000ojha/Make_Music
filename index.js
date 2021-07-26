audio1 = new Audio('bubbles.mp3')
audio2 = new Audio('clay.mp3')
audio3 = new Audio('confetti.mp3')
audio4 = new Audio('glimmer.mp3')
audio5 = new Audio('moon.mp3')
audio6 = new Audio('ufo.mp3')


window.addEventListener("load", () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "peachpuff",
        "rebeccapurple",
        "lightskyblue",
        "yellowgreen"

    ];


    // Adding sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        })



    });
    //Create a function that pops colors
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationened", function(){
          visual.removeChild(this);

        });

    };
});

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 81) {
        audio1.play();
        audio1.currentTime = 0;
    }
    if(e.keyCode ==87)
    {
        audio2.play();
        audio2.currentTime = 0;
    }
    if(e.keyCode == 69)
    {
        audio3.play();
        audio3.currentTime = 0;
    }
    if(e.keyCode ==82)
    {
        audio4.play();
        audio4.currentTime = 0;
    }
    if(e.keyCode ==84)
    {
        audio5.play();
        audio5.currentTime = 0;
    }
    if(e.keyCode ==89)
    {
        audio6.play();
        audio6.currentTime = 0;
    }
}
