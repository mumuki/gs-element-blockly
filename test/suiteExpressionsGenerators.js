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

	gsTestCode('hayBolitas',
    '<xml><block type="hayBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    'hayBolitas(Rojo)'
	);

	gsTestCode('nroBolitas',
    '<xml><block type="nroBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    'nroBolitas(Rojo)'
	);

	gsTestCode('puedeMover',
    '<xml><block type="puedeMover"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'puedeMover(Este)'
	);

	gsTestCode('siguiente',
    '<xml><block type="siguiente"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'siguiente(Este)'
	);

	gsTestCode('previo',
    '<xml><block type="previo"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'previo(Este)'
	);

	gsTestCode('opuesto',
		'<xml><block type="opuesto"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
		'opuesto(Este)'
	);
});
