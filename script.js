const reader = document.getElementById("reader");
const paragraphs = document.querySelectorAll(".paragraph");
const cognitive = document.getElementById("cognitive");


document.getElementById("toggle-settings").onclick = () => {
    document.getElementById("settings").classList.toggle("hide");
};

document.getElementById("fontSize").oninput = e => {
    reader.style.fontSize = e.target.value + "px";
};

document.getElementById("lineHeight").oninput = e => {
    reader.style.lineHeight = e.target.value;
};

document.getElementById("spacing").oninput = e => {
    reader.style.wordSpacing = e.target.value + "px";
};

document.getElementById("contrast").onchange = e => {
    document.body.className = e.target.value;
};

document.getElementById("font").onchange = e => {
    document.body.classList.remove("roboto", "dyslexic");
    if (e.target.value === "roboto") document.body.classList.add("roboto");
    if (e.target.value === "dyslexic") document.body.classList.add("dyslexic");
};

document.getElementById("focusMode").onchange = () => {
    reader.classList.toggle("focus");
};


paragraphs.forEach(p => {
    p.onclick = () => {
        paragraphs.forEach(x => x.classList.remove("active"));
        p.classList.add("active");

        cognitive.innerText = "Cognitive Load: " + p.dataset.level;
    };
});


const ruler = document.getElementById("reading-ruler");

document.getElementById("ruler").onchange = (e) => {
    ruler.style.display = e.target.checked ? "block" : "none";
};

document.addEventListener("mousemove", e => {
    ruler.style.top = e.clientY + "px";
});


document.getElementById("reduceMotion").onchange = () => {
    document.body.style.transition = "none";
};


function detectTone(text) {
    text = text.toLowerCase();

    let tones = [];

    if (text.includes("happy") || text.includes("love")) tones.push("😊 Positive");
    if (text.includes("sad") || text.includes("tired")) tones.push("😢 Sad");
    if (text.includes("angry") || text.includes("hate")) tones.push("😠 Angry");
    if (text.includes("lol") || text.includes("haha")) tones.push("😂 Playful");
    if (text.includes("yeah right")) tones.push("🤨 Sarcastic");

    if (tones.length === 0) tones.push("😐 Neutral");

    return tones.join(", ");
}

/* COMMENTS */
const postBtn = document.getElementById("postComment");
const input = document.getElementById("commentInput");
const list = document.getElementById("commentsList");

postBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;

    const tone = detectTone(text);

    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `<p>${text}</p><b>${tone}</b>`;

    list.prepend(div);
    input.value = "";
};
document.getElementById("reduceMotion").onchange = () => {
    document.body.classList.toggle("reduce-motion");
};