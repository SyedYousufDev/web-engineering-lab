function showText() {
    const txt = document.getElementById("txt");
    const start = txt.selectionStart;
    const end = txt.selectionEnd;

    const selected = txt.value.substring(start, end);

    const outputDiv = document.getElementById("output");

    if (selected.length > 0) {
        outputDiv.innerHTML = selected; // show selected text
    } else {
        outputDiv.innerHTML = ""; // clear when nothing selected
    }
}

// Optional: also clear if user clicks outside without selection
document.getElementById("txt").addEventListener("keyup", showText);
document.getElementById("txt").addEventListener("mouseup", showText);