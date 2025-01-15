const photos = ['crash', 'kick', 'snare', 'tom'];
const container = document.querySelector('.container');

photos.forEach((photo_name) => {
    const btn_tag = document.createElement('button');
    btn_tag.style.backgroundImage = "url(images/" + photo_name + ".png)";
    btn_tag.innerText = photo_name;
    container.appendChild(btn_tag);

    const audio_tag = document.createElement("audio");
    audio_tag.src = "sounds/" + photo_name + ".mp3";
    container.appendChild(audio_tag);


    btn_tag.addEventListener("click", () => {
        audio_tag.play();

    }
    )
}
)