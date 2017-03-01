gsSuite('Generadores de Expresiones', function() {
	gsTestCode('|| se genera bien',
    '<xml><block type="OpBoolBinary"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">False</field></block></value></block></xml>',
    'True && False'
	);
	gsTestCode('|| se genera bien',
    '<xml><block type="OpBoolBinary"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">False</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></xml>',
    'False || True'
	);
	gsTestCode('|| se genera bien',
    '<xml><block type="OpBoolBinary"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OpBoolBinary"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
    'True && (True || True)'
	);
  gsTestCode('Anidación de || dentro de && provoca paréntesis',
    '<xml><block type="OpBoolBinary"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OpBoolBinary"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
    'True && (True || True)'
	);
	gsTestCode('Anidación de && dentro de || no provoca paréntesis',
    '<xml><block type="OpBoolBinary"><field name="OPERATOR">||</field><value name="arg1"><block type="OpBoolBinary"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></xml>',
    'True && True || True'
	);
});
