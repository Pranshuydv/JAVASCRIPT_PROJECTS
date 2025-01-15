function generatePattern() {
    const rows = document.getElementById('rows').value;
    const patternElement = document.getElementById('pattern');
    let pattern = '';

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += j + ' ';
      }
      pattern += '\n';
    }

    patternElement.textContent = pattern;
  }