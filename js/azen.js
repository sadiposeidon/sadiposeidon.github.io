let wordMap = {};
let interval1 = 3000;
let interval2 = 6000;
let displayedWords = {};

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
    const availableKeys = keys.filter(key => !(key in displayedWords) || displayedWords[key] < 3);
    if (availableKeys.length === 0) {
        console.log("All words have been displayed at least three times.");
        return;
    }
    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];

    document.getElementById('word').textContent = 'EN: ' + randomKey;
    displayedWords[randomKey] = (displayedWords[randomKey] || 0) + 1;
    setTimeout(() => {
        document.getElementById('meaning').textContent = 'AZ: ' + wordMap[randomKey];
        setTimeout(displayRandomWord, interval1);
    }, interval2);
    document.getElementById('meaning').textContent = 'AZ:';
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
    console.log(`Display interval updated to ${interval1} milliseconds and ${interval2} milliseconds.`);
}
