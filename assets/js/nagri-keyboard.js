var keyboard = document.querySelector("#nagri-keyboard");
var nagriTextarea = document.querySelector("#nagri");
var keys = '';

var banglaGlyphs = [
  {
    // Independent vowels and dvisvara
    ꠀ: "আ",
    ꠁ: "ই",
    ꠃ: "উ",
    ꠄ: "এ",
    ꠅ: "ও",

    // Consonants and consonant signs
    ꠇ: "ক",
    ꠈ: "খ",
    ꠉ: "গ",
    ꠊ: "ঘ",
    ꠌ: "চ",
    ꠍ: "ছ",
    ꠎ: "জ",
    ꠏ: "ঝ",
    ꠐ: "ট",
    ꠑ: "ঠ",
    ꠒ: "ড",
    ꠓ: "ঢ",
    ꠔ: "ত",
    ꠕ: "থ",
    ꠖ: "দ",
    ꠗ: "ধ",
    ꠘ: "ন",
    ꠙ: "প",
    ꠚ: "ফ",
    ꠛ: "ব",
    ꠜ: "ভ",
    ꠝ: "ম",
    ꠞ: "র",
    ꠟ: "ল",
    ꠠ: "ড়",
    ꠡ: "স",
    ꠢ: "হ",

    // Sign
    "꠆": "্",

    // Dependent vowel signs
    "ꠣ": "া",
    "ꠤ": "ি",
    "ꠥ": "ু",
    "ꠦ": "ে",
    "ꠧ": "ো",

    // Dependent consonent sign (separated from Vowel signs)
    "ꠋ": "ং",
    "ꠂ": "ঃ",

    // Poetry Signs
    "꠨": "",
    "꠩": "",
    "꠪": "",
    "꠫": "",

    // Additional Glyphs
    // Not included in Sylheti Nagri set
    "*": "।",
    "॥": "॥",
  },
];

/**
 * Populate the Keyboard with the keys.
 */
for (var key in banglaGlyphs) {
    var glyphs = banglaGlyphs[key];
    for (var key in glyphs) {
        keys += `<kbd data-glyph="${key}" class="noselect btn btn-outline-secondary bg-white text-dark btn-sm m-1" onClick="writeNagri(this)">
            <span>
                ${key}
            </span>
            ${'' !== glyphs[key] ? '(' + glyphs[key] + ')' : ''}
        </kbd>`;
    };
}

document.querySelector("#keys").innerHTML = keys;

/**
 * Check is element hidden.
 * @param {string} el Element to check whether is hidden.
 * @returns string
 */
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

/**
 * Toggle Keyboard Visibility.
 * @param {string} btn Button to toggle keyboard.
 */
function toggleKeyboard(btn) {
    if (isHidden(keyboard)) {
        btn.setAttribute("aria-expanded", "true");
        keyboard.setAttribute("aria-hidden", "false");
        keyboard.style.display = 'block';
    } else {
        btn.setAttribute("aria-expanded", "false");
        keyboard.setAttribute("aria-hidden", "true");
        keyboard.style.display = 'none';
    }
}

/**
 * Write nagri on textarea based on key event.
 * @param {string} key Key element.
 */
function writeNagri(key) {
    var key_value = key.getAttribute("data-glyph");
    nagriTextarea.value += key_value;
    nagriTextarea.focus();
}

// Hide the keyboard on click.
document.querySelector("#hide-keyboard").addEventListener('click', function(e) {
    keyboard.style.display = 'none';
});
