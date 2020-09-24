// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Qu\u00E9t k\u1EBB th\u00F9. Ch\u1EC9 \u0111\u1ECBnh m\u1ED9t h\u01B0\u1EDBng (0-360). \\nTr\u1EA3 l\u1EA1i kho\u1EA3ng c\u00E1ch cho k\u1EBB th\u00F9 g\u1EA7n nh\u1EA5t \\ntheo h\u01B0\u1EDBng \u0111\u00F3. Tr\u1EA3 v\u1EC1 Infinity n\u1EBFu kh\u00F4ng \\nt\u00ECm th\u1EA5y k\u1EBB th\u00F9. </span><span id="Pond_cannonTooltip">B\u1EAFn \u0111\u1EA1i b\u00E1c. Ch\u1EC9 \u0111\u1ECBnh h\u01B0\u1EDBng (0-360) v\u00E0 ph\u1EA1m vi \\n(0-70). </span><span id="Pond_swimTooltip">B\u01A1i v\u1EC1 ph\u00EDa tr\u01B0\u1EDBc. Ch\u1EC9 \u0111\u1ECBnh m\u1ED9t h\u01B0\u1EDBng (0-360). </span><span id="Pond_stopTooltip">D\u1EEBng b\u01A1i. Ng\u01B0\u1EDDi ch\u01A1i s\u1EBD ch\u1EADm l\u1EA1i \u0111\u1EC3 d\u1EEBng l\u1EA1i. </span><span id="Pond_healthTooltip">Tr\u1EA3 v\u1EC1 ph\u1EA7n tr\u0103m m\u00E1u hi\u1EC7n t\u1EA1i c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i (0 \\nl\u00E0 \u0111\u00E3 ch\u1EBFt, 100 l\u00E0 kh\u1ECFe m\u1EA1nh). </span><span id="Pond_speedTooltip">Tr\u1EA3 v\u1EC1 t\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i c\u1EE7a tr\u00ECnh ph\u00E1t (0 b\u1ECB \\nd\u1EEBng, 100 l\u00E0 t\u1ED1c \u0111\u1ED9 t\u1ED1i \u0111a). </span><span id="Pond_locXTooltip">Tr\u1EA3 v\u1EC1 t\u1ECDa \u0111\u1ED9 X c\u1EE7a tr\u00ECnh ph\u00E1t (0 l\u00E0 c\u1EA1nh tr\u00E1i, \\n100 l\u00E0 c\u1EA1nh ph\u1EA3i). </span><span id="Pond_locYTooltip">Tr\u1EA3 v\u1EC1 t\u1ECDa \u0111\u1ED9 Y c\u1EE7a tr\u00ECnh ph\u00E1t (0 l\u00E0 c\u1EA1nh d\u01B0\u1EDBi, \\n100 l\u00E0 c\u1EA1nh tr\u00EAn). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Hi\u1EC3n th\u1ECB t\u00E0i li\u1EC7u ng\u00F4n ng\u1EEF.">T\u00E0i li\u1EC7u</button></td><td><button id="runButton" class="primary" title="Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh b\u1EA1n \u0111\u00E3 vi\u1EBFt"><img src="common/1x1.gif" class="run icon21"> Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh</button><button id="resetButton" class="primary" style="display: none" title="D\u1EEBng ch\u01B0\u01A1ng tr\u00ECnh v\u00E0 ch\u1EA1y l\u1EA1i. "><img src="common/1x1.gif" class="stop icon21"> Ch\u1EA1y l\u1EA1i</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
