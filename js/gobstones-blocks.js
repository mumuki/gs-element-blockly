/* global Blockly */

var ControlColor = 60;
var CommandColor = 200;
var ExpressionColor = 180;

// Guardo un par de bloques utiles el resto los elimino
delete Blockly.Blocks.procedures_defreturn;
delete Blockly.Blocks.procedures_ifreturn;
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe el procedimiento...';

Blockly.Blocks.Program = {
	init: function () {
		this.setColour(100);
		this.appendDummyInput().appendField('programa');
		this.appendStatementInput('program');
		this.setDeletable(false);
		this.setEditable(false);
		this.setMovable(false);
	}
};

// ------------------------------------------------------
// Control de flujo de ejecucion:
// ------------------------------------------------------

Blockly.Blocks.Repetir = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('count')
			.appendField('Repetir');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.RepetirHasta = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.setCheck('Bool')
			.appendField('Repetir Hasta');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.SiEntonces = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.appendField('Si');
		this.appendStatementInput('block');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.SiEntoncesSiNo = {
	init: function () {
		this.setColour(ControlColor);
		this.appendValueInput('condicion')
			.appendField('Si');
		this.appendStatementInput('block1');
		this.appendDummyInput()
				.appendField('si no');
		this.appendStatementInput('block2');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

// ------------------------------------------------------
// Comandos:
// ------------------------------------------------------

Blockly.Blocks.Poner = {
	init: function () {
		this.jsonInit({
			message0: 'Poner %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Poner color en casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Sacar = {
	init: function () {
		this.jsonInit({
			message0: 'Sacar %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Sacar color de casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Mover = {
	init: function () {
		this.jsonInit({
			message0: 'Mover %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Mover en una dirección.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.IrAlBorde = {
	init: function () {
		this.jsonInit({
			message0: 'IrAlBorde %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Ir al borde del tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.VaciarTablero = {
	init: function () {
		this.jsonInit({
			message0: 'VaciarTablero',
			previousStatement: true,
			nextStatement: true,
			colour: CommandColor,
			tooltip: 'Vaciar el tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.BOOM = {
	init: function () {
		this.jsonInit({
  		"lastDummyAlign0": "RIGHT",
  		"message0": "Hacer ¡BOOM! porque:  %1 %2",
		  "args0": [
		    {
		      "type": "input_dummy"
		    },
		    {
		      "type": "field_input",
		      "name": "boomDescription",
		      "text": "Ingresar motivo..."
		    }
		  ],
		  "inputsInline": false,
		  "previousStatement": true,
		  "nextStatement": true,
		  "colour": CommandColor,
		  "tooltip": "Este comando hace que estalle todo."
		});
	}
};
// ------------------------------------------------------
// Expresiones:
// ------------------------------------------------------
function createLiteralSelectorBlock(type,values){
	return {
		init: function () {
			this.jsonInit({
				type: type,
				message0: "%1",
				args0: [{
					type: "field_dropdown",
					name: type + "Dropdown",
					options: values.map(value => [value,value]),
				}],
				output: type,
				colour: ExpressionColor,
				tooltip: "Escoger " + type,
			});
		}
	};
}

Blockly.Blocks.ColorSelector = createLiteralSelectorBlock('Color',['Rojo','Verde','Negro','Azul']);
Blockly.Blocks.DireccionSelector = createLiteralSelectorBlock('Direccion',['Este','Oeste','Norte','Sur']);
Blockly.Blocks.BoolSelector = createLiteralSelectorBlock('Bool',['True','False']);

function createSingleParameterExpressionBlock(blockText,returnType){
	return {
		init: function () {
			this.jsonInit({
				message0: blockText + ' %1',
				args0: [
					{
						type: 'input_value',
						name: 'VALUE'
					}
				],
				colour: ExpressionColor,
				inputsInline: true,
				output: returnType
			})
		}
	};
}

Blockly.Blocks.hayBolitas = createSingleParameterExpressionBlock('hay bolitas','Bool');
Blockly.Blocks.puedeMover = createSingleParameterExpressionBlock('puede mover','Bool');
Blockly.Blocks.nroBolitas = createSingleParameterExpressionBlock('numero de bolitas','Number');

// ------------------------------------------------------
// Operaciones:
// ------------------------------------------------------

Blockly.Blocks.Relation = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'RELATION',
					options: [['==', '=='], ['/=', '/='], ['<=', '<='], ['<', '<'], ['>=', '>='], ['>', '>']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Bool'
		});
	}
};

Blockly.Blocks.OpNum = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['+', '+'], ['-', '-'], ['*', '*'], ['div', 'div'], ['mod', 'mod'], ['^', '^']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Number'
		});
	}
};

Blockly.Blocks.OpBoolBinary = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['o bien', '||'], ['y también', '&&']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: ExpressionColor,
			inputsInline: false,
			output: 'Bool'
		});
	}
};

Blockly.Blocks.not = createSingleParameterExpressionBlock('not','Bool');
Blockly.Blocks.siguiente = createSingleParameterExpressionBlock('siguiente','*');
Blockly.Blocks.previo = createSingleParameterExpressionBlock('previo','*');
Blockly.Blocks.opuesto = createSingleParameterExpressionBlock('opuesto','*');
