var nagri = document.querySelector("#nagri");
var bangla = document.querySelector("#bangla");

var banglaGlyphs = [
  {
    "ꠅ": "অ", // ও
    "ꠀ": "আ",
    "ꠁ": "ই",
    "ꠁ": "ঈ",
    "ꠃ": "উ",
    "ꠃ": "ঊ",
    "ꠞꠤ": "ঋ", // রি
    "ꠄ": "এ",
    "ꠅꠁ": "ঐ", // ওই
    "ꠅ": "ও",
    "ꠅꠃ": "ঔ", // ওউ
    "ꠇ": "ক",
    "ꠈ": "খ",
    "ꠉ": "গ",
    "ꠊ": "ঘ",
    "ꠋ": "ঙ", // ং
    "ꠌ": "চ",
    "ꠍ": "ছ",
    "ꠎ": "জ",
    "ꠏ": "ঝ",
    "ꠋ": "ঞ", // ং
    "ꠐ": "ট",
    "ꠑ": "ঠ",
    "ꠒ": "ড",
    "ꠓ": "ঢ",
    "ꠘ": "ন", // ণ
    "ꠔ": "ত",
    "ꠕ": "থ",
    "ꠖ": "দ",
    "ꠗ": "ধ",
    "ꠘ": "ন",
    "ꠙ": "প",
    "ꠚ": "ফ",
    "ꠛ": "ব",
    "ꠜ": "ভ",
    "ꠝ": "ম",
    "ꠎ": "জ", // য
    "ꠞ": "র",
    "ꠟ": "ল",
    "ꠡ": "স", // শ
    "ꠡ": "স", // স
    "ꠡ": "স", // ষ
    "ꠢ": "হ",
    "ꠁ": "ই", // য়
    "ꠠ": "ড়",
    "ꠠ": "ড়", // ঢ়
    "ꠔ": "ত",
   "ꠋ" : "ং",
   "ꠂ" : "ঃ",
   "ꠘ" : "ন", // ঁ (চন্দ্রবিন্দু)

   "꠆" : "্", // হসচিহ্ন
   "ꠣ" : "া", // আ-কার
   "ꠤ" : "ি", // ই-কার
   "ꠥ" : "ু", // উ-কার
   "ꠦ" : "ে", // এ-কার
   "ꠧ" : "ো", // ও-কার

    "*": "।", // দাঁড়ি
    "॥": "॥", // দ্বৈত দাঁড়ি
    " ": " ", // space, ফাঁকা স্থান
  },
];

/**
 * Handle Nagri Inputs.
 */
nagri.addEventListener("keyup", function (e) {
  var banglaChars = "";

  var str = this.value;
  for (var i = 0; i < str.length; i++) {
    for (var key in banglaGlyphs) {
      // console.warn(str[i], " - ", typeof banglaGlyphs[key][str[i]]);
      if ("undefined" !== typeof banglaGlyphs[key][str[i]]) {
        banglaChars += banglaGlyphs[key][str[i]];
      } else {
        banglaChars += str[i];
      }
    }
  }
  bangla.value = banglaChars;
});
