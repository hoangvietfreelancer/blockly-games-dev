// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.Duck.soy.
 */

goog.provide('Pond.Duck.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Duck.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_myName">Player</span></div>';
};
if (goog.DEBUG) {
  Pond.Duck.soy.messages.soyTemplateName = 'Pond.Duck.soy.messages';
}


Pond.Duck.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Pond.Duck.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Pond', levelLinkSuffix: '', hasLinkButton: false, hasHelpButton: false, farLeftHtml: ''}, null, opt_ijData) + Pond.soy.visualization(null, null, opt_ijData) + '<div id="tabarea"><div id="editorBar" class="tab-bar"><div><select id="avatar-select"></select></div><div class="tab tab-selected">Blocks</div><div class="tab">JavaScript</div></div><div class="tab-bar-clear"></div><div id="blockly"></div><div id="editor"></div></div>' + Pond.Duck.soy.toolbox(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData);
};
if (goog.DEBUG) {
  Pond.Duck.soy.start.soyTemplateName = 'Pond.Duck.soy.start';
}


Pond.Duck.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block><block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block><block type="pond_stop"></block><block type="pond_getX"></block><block type="pond_getY"></block><block type="pond_speed"></block><block type="pond_health"></block><block type="pond_log"><value name="VALUE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">123</field></shadow></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category><category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="pond_math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_random_float"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml>';
};
if (goog.DEBUG) {
  Pond.Duck.soy.toolbox.soyTemplateName = 'Pond.Duck.soy.toolbox';
}
