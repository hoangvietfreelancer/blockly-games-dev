// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Bird.soy.
 */

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">kh\u00F4ng c\u00F3 s\u00E2u</span><span id="Bird_heading">M\u1EE5c ti\u00EAu</span><span id="Bird_noWormTooltip">T\u00ECnh tr\u1EA1ng khi ch\u01B0a c\u00F3 s\u00E2u.</span><span id="Bird_headingTooltip">Di chuy\u1EC3n theo h\u01B0\u1EDBng c\u1EE7a g\u00F3c \u0111\u00E3 cho: 0 l\u00E0 b\u00EAn \\nph\u1EA3i, 90 l\u00E0 th\u1EB3ng l\u00EAn, v.v. </span><span id="Bird_positionTooltip">x v\u00E0 y \u0111\u00E1nh d\u1EA5u v\u1ECB tr\u00ED c\u1EE7a chim. \\nKhi x = 0 con chim \u1EDF g\u1EA7n c\u1EA1nh tr\u00E1i, \\nkhi x = 100 n\u00F3 \u1EDF g\u1EA7n c\u1EA1nh ph\u1EA3i. \\nKhi y = 0 con chim \u1EDF d\u01B0\u1EDBi c\u00F9ng, \\nkhi y = 100 n\u00F3 \u1EDF tr\u00EAn c\u00F9ng. </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Chim t\u00ECm m\u1ED3i'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="L\u01B0u v\u00E0 li\u00EAn k\u1EBFt v\u1EDBi c\u00E1c kh\u1ED1i."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh b\u1EA1n \u0111\u00E3 vi\u1EBFt"><img src="common/1x1.gif" class="run icon21"> Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh</button><button id="resetButton" class="primary" style="display: none" title="D\u1EEBng ch\u01B0\u01A1ng tr\u00ECnh v\u00E0 ch\u1EA1y l\u1EA1i. "><img src="common/1x1.gif" class="stop icon21"> Ch\u1EA1y l\u1EA1i</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Thay \u0111\u1ED5i g\u00F3c ti\u00EAu \u0111\u1EC1 \u0111\u1EC3 l\u00E0m cho con chim l\u1EA5y s\u00E2u v\u00E0 h\u1EA1 c\u00E1nh trong t\u1ED5 c\u1EE7a n\u00F3.</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>S\u1EED d\u1EE5ng kh\u1ED1i n\u00E0y \u0111\u1EC3 \u0111i v\u00E0o m\u1ED9t h\u01B0\u1EDBng n\u1EBFu b\u1EA1n c\u00F3 s\u00E2u ho\u1EB7c m\u1ED9t h\u01B0\u1EDBng kh\u00E1c n\u1EBFu b\u1EA1n kh\u00F4ng c\u00F3 s\u00E2u.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\' l\u00E0 v\u1ECB tr\u00ED ngang hi\u1EC7n t\u1EA1i c\u1EE7a b\u1EA1n. S\u1EED d\u1EE5ng kh\u1ED1i n\u00E0y \u0111\u1EC3 \u0111i trong m\u1ED9t ti\u00EAu \u0111\u1EC1 n\u1EBFu \'x\' nh\u1ECF h\u01A1n m\u1ED9t s\u1ED1 ho\u1EB7c m\u1ED9t ti\u00EAu \u0111\u1EC1 kh\u00E1c.</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Nh\u1EA5p v\u00E0o bi\u1EC3u t\u01B0\u1EE3ng \u0111\u1EC3 s\u1EEDa \u0111\u1ED5i kh\u1ED1i \'n\u1EBFu\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>C\u1EA5p \u0111\u1ED9 n\u00E0y c\u1EA7n c\u1EA3 kh\u1ED1i \'kh\u00E1c n\u1EBFu\' v\u00E0 \'kh\u00E1c\'.</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>Kh\u1ED1i \'v\u00E0\' ch\u1EC9 \u0111\u00FAng n\u1EBFu c\u1EA3 hai \u0111\u1EA7u v\u00E0o c\u1EE7a n\u00F3 \u0111\u1EC1u \u0111\u00FAng.</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>K\u00E9o m\u1ED9t kh\u1ED1i \'kh\u00E1c\' v\u00E0o kh\u1ED1i \'n\u1EBFu\'.</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Bird.soy.start.soyTemplateName = 'Bird.soy.start';
}


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? ((opt_ijData.level == 4 || opt_ijData.level == 5) ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Bird.soy.toolbox.soyTemplateName = 'Bird.soy.toolbox';
}
