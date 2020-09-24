// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Puzzle.soy.
 */

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">Con v\u1ECBt</span><span id="Puzzle_animal1Pic">duck.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">L\u00F4ng v\u0169</span><span id="Puzzle_animal1Trait2">M\u1ECF</span><span id="Puzzle_animal1HelpUrl">https://vi.wikipedia.org/wiki/V%E1%BB%8Bt</span><span id="Puzzle_animal2">Con m\u00E8o</span><span id="Puzzle_animal2Pic">cat.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Ria m\u00E9p</span><span id="Puzzle_animal2Trait2">L\u00F4ng</span><span id="Puzzle_animal2HelpUrl">https://vi.wikipedia.org/wiki/M%C3%A8o</span><span id="Puzzle_animal3">Con ong</span><span id="Puzzle_animal3Pic">bee.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">M\u1EADt ong</span><span id="Puzzle_animal3Trait2">Ng\u00F2i</span><span id="Puzzle_animal3HelpUrl">https://vi.wikipedia.org/wiki/Ong</span><span id="Puzzle_animal4">Con s\u00EAn</span><span id="Puzzle_animal4Pic">snail.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">V\u1ECF</span><span id="Puzzle_animal4Trait2">Nh\u1EDBt</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">\u1EA2nh:</span><span id="Puzzle_legs">S\u1ED1 ch\u00E2n:</span><span id="Puzzle_legsChoose">ch\u1ECDn...</span><span id="Puzzle_traits">\u0110\u1EB7c \u0111i\u1EC3m:</span><span id="Puzzle_error0">Tuy\u1EC7t v\u1EDDi!\nT\u1EA5t c\u1EA3 %1 kh\u1ED1i \u0111\u00FAng.</span><span id="Puzzle_error1">S\u1EAFp \u0111\u01B0\u1EE3c r\u1ED3i! C\u00F2n 1 kh\u1ED1i ch\u01B0a \u0111\u00FAng.</span><span id="Puzzle_error2">%1 kh\u1ED1i sai.</span><span id="Puzzle_tryAgain">Kh\u1ED1i \u0111ang ph\u00E1t s\u00E1ng c\u00F2n ch\u01B0a \u0111\u00FAng.\nC\u1ED1 g\u1EAFng l\u00EAn!!!</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: 'Gh\u00E9p h\u00ECnh'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">H\u01B0\u1EDBng d\u1EABn</button>&nbsp;<button id="checkButton" class="primary">Ki\u1EC3m tra \u0111\u00E1p \u00E1n</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u0110\u1ED1i v\u1EDBi m\u1ED7i con v\u1EADt: Ch\u1ECDn h\u00ECnh \u1EA3nh, s\u1ED1 ch\u00E2n v\u00E0 s\u1EAFp x\u1EBFp c\u00E1c \u0111\u1EB7c \u0111i\u1EC3m c\u1EE7a n\u00F3.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
