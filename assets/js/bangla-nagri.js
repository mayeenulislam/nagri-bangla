var nagri = document.querySelector("#nagri");
var bangla = document.querySelector("#bangla");

var nagriGlyphs = [
  {
    অ: "ꠅ", // ও
    আ: "ꠀ",
    ই: "ꠁ",
    ঈ: "ꠁ",
    উ: "ꠃ",
    ঊ: "ꠃ",
    ঋ: "ꠞꠤ", // রি
    এ: "ꠄ",
    ঐ: "ꠅꠁ", // ওই
    ও: "ꠅ",
    ঔ: "ꠅꠃ", // ওউ
    ক: "ꠇ",
    খ: "ꠈ",
    গ: "ꠉ",
    ঘ: "ꠊ",
    ঙ: "ꠋ", // ং
    চ: "ꠌ",
    ছ: "ꠍ",
    জ: "ꠎ",
    ঝ: "ꠏ",
    ঞ: "ꠘ", // ন
    ট: "ꠐ",
    ঠ: "ꠑ",
    ড: "ꠒ",
    ঢ: "ꠓ",
    ণ: "ꠘ", // ন
    ত: "ꠔ",
    থ: "ꠕ",
    দ: "ꠖ",
    ধ: "ꠗ",
    ন: "ꠘ",
    প: "ꠙ",
    ফ: "ꠚ",
    ব: "ꠛ",
    ভ: "ꠜ",
    ম: "ꠝ",
    য: "ꠎ", // জ
    র: "ꠞ",
    ল: "ꠟ",
    শ: "ꠡ", // স
    স: "ꠡ", // স
    ষ: "ꠡ", // স
    হ: "ꠢ",
    য়: "ꠁ", // ই
    ড়: "ꠠ",
    ঢ়: "ꠠ", // ড়
    ৎ: "ꠔ",
    "ং": "ꠋ",
    "ঃ": "ꠂ",
    "ঁ": "ꠘ", // ন

    "্": "꠆", // হসচিহ্ন
    "া": "ꠣ", // আ-কার
    "ি": "ꠤ", // ই-কার
    "ী": "ꠤ", // ই-কার
    "ু": "ꠥ", // উ-কার
    "ূ": "ꠥ", // উ-কার
    "ে": "ꠦ", // এ-কার
    "ৈ": "ꠧꠁ", // োই
    "ো": "ꠧ", // ও-কার
    "ৌ": "ꠧꠃ", // ৌউ

    "।": "*", // দাঁড়ি
    "॥": "॥", // দ্বৈত দাঁড়ি
    " ": " ", // space, ফাঁকা স্থান
  },
];

/**
 * Handle Bengali Inputs.
 */
bangla.addEventListener("keyup", function () {
  var nagriChars = "";

  var str = this.value;
  for (var i = 0; i < str.length; i++) {
    for (var key in nagriGlyphs) {
      // console.warn(str[i], ' - ', typeof nagriGlyphs[key][str[i]]);
      if ('undefined' !== typeof nagriGlyphs[key][str[i]]) {
        nagriChars += nagriGlyphs[key][str[i]];
      } else {
        nagriChars += str[i];
      }
    }
  }
  nagri.value = nagriChars;
});
