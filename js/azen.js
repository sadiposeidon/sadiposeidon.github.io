let wordMap = {};
let interval1 = 10000;
let interval2 = 10000;

async function fetchWordMap() {
    const fileName = 'https://sadiposeidon.github.io/db/word_2.txt';
    try {
        const response = await fetch(fileName);
        const text = await response.text();
        const lines = text.split('\n');
        lines.forEach(line => {
            const parts = line.split(' => ');
            if (parts.length === 2) {
                wordMap[parts[0]] = parts[1];
            }
        });
    } catch (error) {
        console.error('Error loading word map:', error);
    }
}

function displayRandomWord() {
    const keys = Object.keys(wordMap);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    if (randomKey.startsWith('+')) {
        displayRandomWord();
        return;
    }

    document.getElementById('meaning').textContent = 'AZ: ' + wordMap[randomKey];
    setTimeout(() => {
        document.getElementById('word').textContent = 'EN: ' + randomKey;
        setTimeout(displayRandomWord, interval1);
    }, interval2);

    document.getElementById('word').textContent = 'EN: . . .';
}

async function initialize() {
    await fetchWordMap();
    displayRandomWord();
}

document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

function updateInterval(interval1, interval2) {
    interval1 = interval1 * 1000;
    interval2 = interval2 * 1000;
    console.log(`Display interval updated to ${interval1} seconds and ${interval2} seconds.`);
}
