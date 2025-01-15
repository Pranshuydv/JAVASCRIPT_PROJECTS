function Change_btn() {
    const quotes_list = ['So many books, so little time.', 'Are you ready for great one-liners, simple thoughts, and wise sayings to start your day?', 'We can do anything we want to if we stick to it long enough. Helen Keller00', 'Nothing Imposibble if you think', 'Solitary trees, if they grow at all, grow strong. Winston Churchill', 'Good things happen to those who hustle. Anaïs Nin'];

    var a = Math.floor(Math.random() * quotes_list.length);
    document.querySelector('q').innerText = quotes_list[a];
}

