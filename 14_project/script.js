function change_emojis() {
    const emoji_list = ['❌', '🪟', '😧', '⛔', '🤩'];
    var index_emoji = Math.floor(Math.random() * emoji_list.length);
    document.getElementById('result').innerText = emoji_list[index_emoji];
}